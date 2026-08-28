# Machine-Learning Models

<div align="justify">

Five tree-based ensemble classifiers were trained for the 72-feature and 60-feature multi-temporal Sentinel-2 stacks:

</div>

- Random Forest;
- Extra Trees;
- XGBoost;
- CatBoost; and
- LightGBM.

<div align="justify">

XGBoost produced the highest test performance in both experiments.

</div>

| Configuration | All-class F1 | Hazelnut F1 |
|---|---:|---:|
| XGBoost, 72 features | **95.43%** | 97.64% |
| XGBoost, 60 features | 94.88% | **97.90%** |

<div align="justify">

The complete five-model benchmark is available in the [machine-learning documentation](../../docs/MACHINE_LEARNING.md) and [`model_performance_60_72_bands.csv`](../../results/classification/model_performance_60_72_bands.csv).

</div>

## Download status

<div align="justify">

The MachineLearningModels package is access-controlled. [Request access through Google Drive](https://drive.google.com/file/d/1hSgELz7dp6lRwnjn_2HIJrN43a9BI2VE/view?usp=sharing); requests are reviewed by the author.

</div>
