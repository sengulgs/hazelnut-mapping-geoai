# Classification Results

## Files

- [`model_performance_60_72_bands.csv`](model_performance_60_72_bands.csv): OA, all-class F1/IoU, and hazelnut precision, recall, F1, and IoU for all five models and both feature stacks.
- [`class_area_estimates_km2.csv`](class_area_estimates_km2.csv): class-area estimates from XGBoost, LightGBM, and Random Forest using the 60- and 72-feature stacks.

## Best results

| Configuration | Model | All-class F1 | Hazelnut F1 |
|---|---|---:|---:|
| 72 features | XGBoost | **95.43%** | 97.64% |
| 60 features | XGBoost | 94.88% | **97.90%** |

<div align="justify">

Confusion matrices and classification maps are stored under [`assets/figures/classification/`](../../assets/figures/classification/).

</div>

<div align="justify">

See [Machine Learning-Based Hazelnut and Land-Cover Mapping](../../docs/MACHINE_LEARNING.md) for the experimental design and interpretation.

</div>
