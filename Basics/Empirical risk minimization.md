**Empirical risk minimization (ERM)** is a framework for thinking about supervised learning. Typically, we're looking for the parameters $\hat\theta$ for a function $f_\theta(x)$, and we can do this by finding the parameters that minimize the average loss $\ell$ over the examples.

$$
\hat\theta = \arg\min_\theta \frac{1}{n} \sum_{i=1}^n \ell(y_i, f_\theta(x_i))
$$
