# Preprocessing Scripts

## Available script

| Script | Purpose |
|---|---|
| [`export_sentinel2_six_dates.js`](export_sentinel2_six_dates.js) | Select and export the six thesis acquisitions from `COPERNICUS/S2_SR_HARMONIZED` as multiband GeoTIFFs |

### Google Earth Engine Code Editor usage

1. Open the [Google Earth Engine Code Editor](https://code.earthengine.google.com/).
2. Create a new script and paste the contents of [`export_sentinel2_six_dates.js`](export_sentinel2_six_dates.js).
3. Keep the included Sakarya boundary or replace `aoi` with an imported study-area geometry.
4. Select `12-band` or `10-band` with `BAND_CONFIGURATION`.
5. Run the script and confirm that scene IDs are printed for all six dates.
6. Open the **Tasks** tab and start the six Drive export tasks.

<div align="justify">

The default configuration exports the 12-band experiment inputs: B1-B9, B8A, B11, and B12, with B10 excluded. Setting `BAND_CONFIGURATION` to `10-band` also excludes B1 and B9. Output is generated at 10 m in EPSG:32636; Earth Engine uses nearest-neighbor resampling by default when reprojection is required. Original scaled surface-reflectance integers are retained unless `EXPORT_SCALED_REFLECTANCE` is enabled. `MAX_SCENE_CLOUD_PERCENT` defaults to 100 so all granules covering Sakarya on the selected dates are retained; set it to 5 when a strict scene-level cloud threshold is required.

</div>

## Remaining planned scope

- build multi-date feature stacks after download;
- orthorectify and pan-sharpen Pléiades Neo imagery where licensing permits execution;
- generate or validate GEOBIA-derived label products;
- create 512 × 512 image-mask patches with 64-pixel overlap; and
- create stratified train/validation/test manifests.

<div align="justify">

Methodology is documented in [Machine Learning](../../docs/MACHINE_LEARNING.md) and [VHRHazelSeg and Deep Learning](../../docs/VHRHAZELSEG_DEEP_LEARNING.md).

</div>
