**Regularization**. You should understand [[ordinary least squares]] before reading this.

Regularization refers to techniques that modify a model to yield more sensible parameters. For example, consider using ordinary least squares to find $w$ such that $y \approx Xw$.

$$
w = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y
$$

One problem here is that we're taking a matrix inverse, which is an operation that is not always stable. That is, a tiny change in $y$ could give us a very different answer for $w$, which wouldn't make sense.