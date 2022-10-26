**Regularization**. You should understand [[ordinary least squares]] and [[singular value decomposition]] before reading this.

Regularization refers to techniques that modify a model to yield more sensible parameters. For example, consider using ordinary least squares to find $w$ such that $y \approx Xw$.

$$
w = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$

One problem here is that we're taking a matrix inverse, which is an operation that is not always stable. That is, a tiny change in $y$ could give us a very different answer for $w$, which wouldn't make sense. The instability is measured quantitavely by the **[condition number](https://en.wikipedia.org/wiki/Condition_number)** so that a low condition number means a stable, **well-conditioned** problem but a high condition number means an unstable, **ill-conditioned** problem. For matrices, the condition number (for the Euclidean norm) is

$$
\kappa(A) \triangleq \frac{\max_i \sigma_i(A)}{\min_i \sigma_i(A)},
$$

where the $\sigma_i(A)$ are the singular values of $A$.