# Source-Code Organization

<div align="justify">

This directory organizes the executable research workflow. The six-date Sentinel-2 Drive export script is available now; additional cleaned source files will be added after configuration, path, credential, and licensed-data references have been removed.

</div>

| Directory | Status and content |
|---|---|
| [`preprocessing/`](preprocessing/) | Six-date Sentinel-2 export available; further stack preparation, Pléiades Neo preprocessing, GEOBIA support, and patch generation planned |
| [`machine_learning/`](machine_learning/) | sample extraction, model optimization, training, evaluation, and province-scale inference |
| [`explainability/`](explainability/) | global/local SHAP analysis, aggregation, plotting, and feature selection |
| [`deep_learning/`](deep_learning/) | VHRHazelSeg loaders, model training, validation, inference, and segmentation evaluation |

<div align="justify">

Each released script package documents inputs, outputs, environment, random seed, and example commands. No placeholder Python files are included because non-executable stubs would overstate the repository's present reproducibility.

</div>
