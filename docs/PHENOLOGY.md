# Hazelnut Phenology and Vegetation-Index Analysis

## Objective

<div align="justify">

The phenological component evaluates the seasonal spectral response of hazelnut orchards in Sakarya Province using multi-temporal Sentinel-2 observations. NDVI, SAVI, and EVI time series were compared with field knowledge of flowering, leaf emergence, fertilization, cluster development, harvest, and leaf fall.

</div>

<div align="justify">

The analysis served two purposes:

</div>

1. characterize the seasonal development of representative hazelnut orchards; and
2. select Sentinel-2 acquisitions that capture spectrally distinct phenological stages for province-scale classification.

## Study locations and sampling

<div align="justify">

Two representative orchards were selected in each of Akyazı, Hendek, Karasu, and Kocaali. The examples cover differences in planting pattern, canopy density, orchard age, and elevation. A 500 m buffer was used around the selected orchards, and Sentinel-2 observations were filtered using a 5% cloud-cover criterion.

</div>

<p align="center">
  <img src="../assets/figures/study_area/study_area_field_samples.png" alt="Sakarya study area, pilot districts, and field-survey orchards" width="720">
</p>

## Vegetation indices

<div align="justify">

The analysis used the following indices:

</div>

| Index | Equation | Primary interpretation |
|---|---|---|
| NDVI | `(NIR - Red) / (NIR + Red)` | vegetation greenness and canopy vigor |
| SAVI | `((NIR - Red) / (NIR + Red + L)) × (1 + L)`, with `L = 0.5` | vegetation response with reduced soil-background influence |
| EVI | `G × (NIR - Red) / (NIR + C1 × Red - C2 × Blue + L)` | vegetation response with atmospheric and canopy-saturation corrections |

<div align="justify">

NDVI was generally the most stable index in dense orchards. SAVI provided a balanced response in young or sparse orchards where soil background was more visible. EVI was more responsive to short-term changes but also showed greater temporal variability.

</div>

## Hazelnut phenological calendar

| Phenological stage | Typical period |
|---|---|
| Male flowering | January-February |
| Female flowering | January-February |
| Pollination | January-February |
| Female flower drop and leaf emergence | March-April |
| Fertilization | May-June |
| Cluster development | June-July |
| Harvest | August-September |
| Post-harvest / pre-leaf fall | October |
| Leaf fall | November-December |

<div align="justify">

The source table is available as [`data/hazelnut_phenology_calendar.csv`](../data/hazelnut_phenology_calendar.csv).

</div>

## Time-series period

<div align="justify">

The primary time-series analysis covered **1 December 2023 to 31 December 2024**. The 2024 season was selected as the principal reference because it provided a more continuous set of radiometrically suitable observations than the frost-affected 2025 season.

</div>

<div align="justify">

Across the representative orchards, vegetation indices generally:

</div>

- began increasing with leaf emergence in March-April;
- reached high or maximum levels during fertilization and cluster development in May-June;
- decreased after July as the orchards approached harvest;
- reached lower values during late-season leaf fall.

<div align="justify">

Orchard structure affected the magnitude and short-term behavior of the indices, but the overall seasonal pattern remained consistent.

</div>

## District-level examples

### Akyazı

<p align="center">
  <img src="../assets/figures/phenology/akyazi_time_series.png" alt="NDVI, SAVI, and EVI time series for selected Akyazı hazelnut orchards" width="850">
</p>

<div align="justify">

EVI and SAVI began increasing around late March and early April. During May and June, covering fertilization and cluster development, all indices remained high. The denser orchard maintained a more stable NDVI response, while EVI showed stronger short-term variability.

</div>

### Hendek

<p align="center">
  <img src="../assets/figures/phenology/hendek_time_series.png" alt="NDVI, SAVI, and EVI time series for selected Hendek hazelnut orchards" width="850">
</p>

<div align="justify">

The sparse orchard showed similar seasonal trends for all three indices. In the higher-elevation dense orchard, NDVI and SAVI peaked on 17 June 2024, while EVI reacted earlier and showed more pronounced short-term changes.

</div>

### Karasu

<p align="center">
  <img src="../assets/figures/phenology/karasu_time_series.png" alt="NDVI, SAVI, and EVI time series for selected Karasu hazelnut orchards" width="850">
</p>

<div align="justify">

Seasonal development began earlier in the Karasu examples. SAVI gave a relatively balanced response in the younger and sparser orchard, where soil background was more influential. The dense orchard maintained high and stable NDVI values.

</div>

### Kocaali

<p align="center">
  <img src="../assets/figures/phenology/kocaali_time_series.png" alt="NDVI, SAVI, and EVI time series for selected Kocaali hazelnut orchards" width="850">
</p>

<div align="justify">

All indices increased during leaf emergence and reached their highest levels during fertilization and cluster development. NDVI remained higher and more stable, whereas EVI reacted more sharply to short-term spectral changes.

</div>

## Frost comparison

<div align="justify">

The April 2025 frost event was evaluated by comparing comparable orchard observations from 2024 and 2025. Vegetation-index decreases of approximately **5-10%** were observed in affected areas, demonstrating the potential of multi-temporal satellite indices for identifying abnormal seasonal responses.

</div>

<p align="center">
  <img src="../assets/figures/phenology/frost_2024_2025_comparison.png" alt="Comparison of 2024 and 2025 imagery and vegetation-index time series for a frost-affected hazelnut area" width="900">
</p>

<div align="justify">

This comparison is indicative rather than a complete operational frost-damage model. Atmospheric conditions, acquisition timing, orchard structure, and observation availability must be considered when interpreting interannual differences.

</div>

## Sentinel-2 dates used for classification

<div align="justify">

Six radiometrically suitable acquisitions were selected to represent distinct phenological stages:

</div>

| Period | Acquisition date | Phenological interpretation |
|---|---|---|
| D1 | 25 December 2023 | leaf fall / winter reference |
| D2 | 19 March 2024 | female flower drop and leaf emergence |
| D3 | 12 June 2024 | fertilization |
| D4 | 22 July 2024 | cluster development and pre-harvest |
| D5 | 16 August 2024 | harvest |
| D6 | 5 October 2024 | post-harvest and pre-leaf fall |

<p align="center">
  <img src="../assets/figures/datasets/sentinel2_phenological_dates.png" alt="Sentinel-2 RGB observations selected for the six phenological periods" width="720">
</p>

<div align="justify">

These acquisitions form the 72-feature and 60-feature stacks described in the [machine-learning documentation](MACHINE_LEARNING.md).

</div>

## Main findings

- Multi-temporal observations were more informative than a single-date view of orchard condition.
- NDVI, SAVI, and EVI captured the same broad seasonal cycle but responded differently to canopy density and short-term variation.
- Fertilization, cluster development, and harvest observations provided strong class-separation potential.
- The 2025 comparison showed that frost-related vegetation stress can be detected as an abnormal temporal response.
- Phenological interpretation provided the foundation for both feature-stack construction and SHAP-based temporal analysis.

## Related resources

- [Machine-learning experiments](MACHINE_LEARNING.md)
- [SHAP analysis](SHAP_ANALYSIS.md)
- [Google Earth Engine application](GEE_APPLICATION.md)
- [Main repository](../README.md)
