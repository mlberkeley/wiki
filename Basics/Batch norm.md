---
bibliography: "./Basics/basics.bib"
---

**Batch normalization (batch norm)**. Batch norm is a technique from @https://doi.org/10.48550/arxiv.1502.03167 to ensure that each layer sees inputs which have zero mean and unit variance.

At training time, the layer uses a minibatch of data to estimate the mean and variance of each feature. These are then used to center and normalize the minibatch. A running average of these means and variances is kept during training, and at test time the running averages are used to center and normalize features.


---