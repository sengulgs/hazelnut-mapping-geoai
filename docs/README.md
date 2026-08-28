# Project Documentation

<div align="justify">

This directory contains the detailed methodology, experiments, results, and interpretation supporting the thesis repository. The root README gives the research overview; these pages preserve the technical depth needed to understand the individual components.

</div>

## Documents

| Document | Scope |
|---|---|
| [Phenology and vegetation indices](PHENOLOGY.md) | NDVI, SAVI, and EVI time series; district examples; frost comparison; selected Sentinel-2 dates |
| [Machine-learning experiments](MACHINE_LEARNING.md) | sampling, feature stacks, five-model benchmark, confusion matrices, area estimates, and classification maps |
| [SHAP analysis](SHAP_ANALYSIS.md) | global and local explanations, spectral and phenological contributions, single-period tests, and feature selection |
| [VHRHazelSeg and deep learning](VHRHAZELSEG_DEEP_LEARNING.md) | Pléiades Neo preprocessing, GEOBIA labels, patch generation, model settings, and segmentation results |
| [Google Earth Engine application](GEE_APPLICATION.md) | live split-map imagery comparison, vegetation-index time series, parcel selection, custom geometry, and frost monitoring |

## Data and results

<div align="justify">

Machine-readable versions of the thesis tables are organized under:

</div>

- [`data/`](../data/) for band metadata, phenology, sample distributions, and dataset composition;
- [`results/classification/`](../results/classification/) for machine-learning performance and class-area estimates;
- [`results/explainable_ai/`](../results/explainable_ai/) for SHAP samples, period experiments, and feature combinations; and
- [`results/segmentation/`](../results/segmentation/) for encoder and model benchmarks.

<div align="justify">

Selected thesis figures are stored under [`assets/figures/`](../assets/figures/) and referenced from the relevant documents.

</div>

## Access-controlled data and model packages

<div align="justify">

Access requests are submitted through Google Drive and reviewed by the author.

</div>

- [MachineLearningSamples](https://drive.google.com/file/d/1cBJIWvMLubBuWd0LYTsBcosBLHlr45Lg/view?usp=sharing)
- [VHRHazelSeg](https://drive.google.com/file/d/1n90xCnEwWvugkVdm5QeeLBdUNdBtBNkR/view?usp=sharing)
- [MachineLearningModels](https://drive.google.com/file/d/1hSgELz7dp6lRwnjn_2HIJrN43a9BI2VE/view?usp=sharing)
- [DeepLearningModels](https://drive.google.com/file/d/15ufC5lv32Mf0C3o-XSfgS_mfDY-ZQoO_/view?usp=sharing)

## Navigation

- [Main repository](../README.md)
- [Data resources](../data/)
- [Models](../models/)
- [Results](../results/)
- [Scripts](../scripts/)
- [GEE resources](../gee/)
