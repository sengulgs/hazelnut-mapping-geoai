# Explainable-AI Results

## Files

- [`local_shap_samples.csv`](local_shap_samples.csv): true and predicted classes of samples selected for local explanations.
- [`local_sample_reflectance.csv`](local_sample_reflectance.csv): Red Edge, NIR, and SWIR trajectories for selected local examples.
- [`phenological_period_performance.csv`](phenological_period_performance.csv): XGBoost results for every single-date 12-band and 10-band experiment.
- [`selected_feature_combinations.csv`](selected_feature_combinations.csv): complete K1-K5 feature definitions derived from SHAP and period-level analyses.
- [`feature_combination_performance.csv`](feature_combination_performance.csv): complete retraining benchmark for the reduced feature combinations.

<div align="justify">

The best SHAP-guided all-class and hazelnut F1 scores were **94.55%** and **97.22%**, respectively.

</div>

<div align="justify">

Figures are stored under [`assets/figures/shap/`](../../assets/figures/shap/). See the [SHAP documentation](../../docs/SHAP_ANALYSIS.md) for interpretation and limitations.

</div>
