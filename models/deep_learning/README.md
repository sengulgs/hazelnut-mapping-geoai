# Deep-Learning Models

<div align="justify">

U-Net++, DeepLabv3+, and SegFormer were trained for semantic segmentation of the VHRHazelSeg dataset. SE-ResNeXt50 was used in the final cross-model comparison.

</div>

| Architecture | Test IoU | Test F1 | Test precision | Test recall |
|---|---:|---:|---:|---:|
| U-Net++ | **90.98%** | **94.97%** | 94.99% | **94.96%** |
| DeepLabv3+ | 90.97% | **94.97%** | **95.01%** | 94.93% |
| SegFormer | 90.85% | 94.89% | 94.94% | 94.85% |

<div align="justify">

The complete training, validation, and test results are available in the [deep-learning documentation](../../docs/VHRHAZELSEG_DEEP_LEARNING.md) and [`model_performance_train_val_test.csv`](../../results/segmentation/model_performance_train_val_test.csv).

</div>

## Download status

<div align="justify">

The DeepLearningModels package is access-controlled. [Request access through Google Drive](https://drive.google.com/file/d/15ufC5lv32Mf0C3o-XSfgS_mfDY-ZQoO_/view?usp=sharing); requests are reviewed by the author.

</div>
