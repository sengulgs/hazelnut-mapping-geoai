/**
 * Export the six Sentinel-2 acquisitions used in the thesis to Google Drive.
 *
 * Run in the Google Earth Engine Code Editor:
 * https://code.earthengine.google.com/
 *
 * Default output:
 * - one multiband GeoTIFF per date (six export tasks);
 * - 12 spectral bands (all Sentinel-2 MSI spectral bands except B10);
 * - 10 m output pixels using Earth Engine's default nearest-neighbor resampling;
 * - EPSG:32636 (WGS 84 / UTM zone 36N);
 * - original Sentinel-2 SR integer scaling (reflectance multiplied by 10000).
 */

// -----------------------------------------------------------------------------
// User configuration
// -----------------------------------------------------------------------------

var DRIVE_FOLDER = 'HazelnutMapping_Sentinel2';

// Use '12-band' for the 72-feature experiment (12 bands x 6 dates).
// Use '10-band' for the 60-feature experiment (B1 and B9 excluded).
var BAND_CONFIGURATION = '12-band';

// The six acquisition dates are fixed below. A value of 100 retains every
// granule covering Sakarya on those dates and prevents gaps at tile edges.
// Set this to 5 to enforce a 5% scene-level cloud-cover threshold.
var MAX_SCENE_CLOUD_PERCENT = 100;

// False preserves the selected acquisitions as stored in the SR collection.
// Set true to mask SCL no-data, saturated pixels, cloud shadows, clouds,
// cirrus, and snow/ice before export.
var APPLY_SCL_CLOUD_MASK = false;

// False exports the original UINT16-scaled SR values. Set true to export
// floating-point reflectance in the approximate 0-1 range.
var EXPORT_SCALED_REFLECTANCE = false;

var EXPORT_SCALE_METERS = 10;
var EXPORT_CRS = 'EPSG:32636';

// -----------------------------------------------------------------------------
// Area of interest
// -----------------------------------------------------------------------------

// Default: Sakarya first-level administrative boundary from FAO GAUL 2015.
// To use an imported boundary, replace the aoi definition with, for example:
// var aoi = table.geometry();
var sakarya = ee.FeatureCollection('FAO/GAUL/2015/level1')
    .filter(ee.Filter.eq('ADM1_NAME', 'Sakarya'));
var aoi = sakarya.geometry();

// -----------------------------------------------------------------------------
// Thesis dates and band configurations
// -----------------------------------------------------------------------------

var acquisitions = [
  {period: 'D1', date: '2023-12-25', stage: 'leaf_fall_winter'},
  {period: 'D2', date: '2024-03-19', stage: 'leaf_emergence'},
  {period: 'D3', date: '2024-06-12', stage: 'fertilization'},
  {period: 'D4', date: '2024-07-22', stage: 'cluster_development'},
  {period: 'D5', date: '2024-08-16', stage: 'harvest'},
  {period: 'D6', date: '2024-10-05', stage: 'post_harvest'}
];

var bands12 = [
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
  'B7', 'B8', 'B8A', 'B9', 'B11', 'B12'
];

var bands10 = [
  'B2', 'B3', 'B4', 'B5', 'B6',
  'B7', 'B8', 'B8A', 'B11', 'B12'
];

if (BAND_CONFIGURATION !== '12-band' &&
    BAND_CONFIGURATION !== '10-band') {
  throw new Error("BAND_CONFIGURATION must be '12-band' or '10-band'.");
}

var exportBands = BAND_CONFIGURATION === '12-band' ? bands12 : bands10;
var bandTag = BAND_CONFIGURATION.replace('-', '');

var sentinel2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED');

// -----------------------------------------------------------------------------
// Processing functions
// -----------------------------------------------------------------------------

function makeSclClearMask(image) {
  var scl = image.select('SCL');

  return scl.neq(0)   // No data
      .and(scl.neq(1))   // Saturated or defective
      .and(scl.neq(3))   // Cloud shadow
      .and(scl.neq(8))   // Medium-probability cloud
      .and(scl.neq(9))   // High-probability cloud
      .and(scl.neq(10))  // Cirrus
      .and(scl.neq(11)); // Snow or ice
}

function prepareScene(image) {
  var prepared = image.select(exportBands);

  if (APPLY_SCL_CLOUD_MASK) {
    prepared = prepared.updateMask(makeSclClearMask(image));
  }

  return prepared.copyProperties(image, image.propertyNames());
}

function buildAcquisition(specification) {
  var start = ee.Date(specification.date);
  var end = start.advance(1, 'day');

  var scenes = sentinel2
      .filterBounds(aoi)
      .filterDate(start, end)
      .filter(ee.Filter.lte(
          'CLOUDY_PIXEL_PERCENTAGE', MAX_SCENE_CLOUD_PERCENT));

  // Mosaic uses the last image first. Sorting high-to-low cloud percentage
  // places the least-cloudy granule last and gives it priority in overlaps.
  var image = scenes
      .sort('CLOUDY_PIXEL_PERCENTAGE', false)
      .map(prepareScene)
      .mosaic()
      .clip(aoi);

  if (EXPORT_SCALED_REFLECTANCE) {
    image = image.divide(10000).toFloat();
  }

  image = image.set({
    period: specification.period,
    acquisition_date: specification.date,
    phenological_stage: specification.stage,
    band_configuration: BAND_CONFIGURATION,
    scl_cloud_mask_applied: APPLY_SCL_CLOUD_MASK
  });

  print(
      specification.period + ' ' + specification.date + ' scene count',
      scenes.size());
  print(
      specification.period + ' source scene IDs',
      scenes.aggregate_array('system:index'));

  return image;
}

// -----------------------------------------------------------------------------
// Create six Drive export tasks
// -----------------------------------------------------------------------------

var previewImage;

acquisitions.forEach(function(specification, index) {
  var image = buildAcquisition(specification);
  var compactDate = specification.date.replace(/-/g, '');
  var exportName = [
    'S2_SR',
    'Sakarya',
    specification.period,
    compactDate,
    bandTag
  ].join('_');

  if (index === 0) {
    previewImage = image;
  }

  Export.image.toDrive({
    image: image,
    description: exportName,
    folder: DRIVE_FOLDER,
    fileNamePrefix: exportName,
    region: aoi,
    scale: EXPORT_SCALE_METERS,
    crs: EXPORT_CRS,
    maxPixels: 1e13,
    fileFormat: 'GeoTIFF',
    skipEmptyTiles: true,
    formatOptions: {
      cloudOptimized: true
    }
  });
});

// -----------------------------------------------------------------------------
// Map preview
// -----------------------------------------------------------------------------

var rgbMax = EXPORT_SCALED_REFLECTANCE ? 0.3 : 3000;

Map.centerObject(aoi, 8);
Map.addLayer(
    aoi,
    {color: 'yellow'},
    'Sakarya export boundary',
    false);
Map.addLayer(
    previewImage.select(['B4', 'B3', 'B2']),
    {min: 0, max: rgbMax},
    'D1 RGB preview');

print('Export bands', exportBands);
print('Drive folder', DRIVE_FOLDER);
print('Open the Tasks tab and start the six export tasks.');
