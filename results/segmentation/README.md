# Semantic-Segmentation Results

## Files

- [`segformer_encoder_performance.csv`](segformer_encoder_performance.csv): MiT-B0, MiT-B1, and MiT-B2 test results.
- [`model_performance_train_val_test.csv`](model_performance_train_val_test.csv): complete U-Net++, DeepLabv3+, and SegFormer metrics for training, validation, and test partitions.

## Test benchmark

| Model | IoU | F1 |
|---|---:|---:|
| U-Net++ | **90.98%** | **94.97%** |
| DeepLabv3+ | 90.97% | **94.97%** |
| SegFormer | 90.85% | 94.89% |

<div align="justify">

The confusion matrix and qualitative prediction comparison are stored under [`assets/figures/segmentation/`](../../assets/figures/segmentation/).

</div>

<div align="justify">

See [VHRHazelSeg and Deep-Learning Semantic Segmentation](../../docs/VHRHAZELSEG_DEEP_LEARNING.md) for methodology and interpretation.

</div>
