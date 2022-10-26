**Ridge regression** is an extension to [[ordinary least squares]]. Again, we have $X \in \RR^{n \times d}$, $w \in \RR^d$, and $y \in \RR^n$. In ridge regression, we add a penalty to the $\ell^2$ norm on the weights $w$ with proportionality constant $\lambda$.

$$
w^\star = \arg\min_w \lVert Xw - y \rVert^2 + \lambda \lVert w \rVert^2
$$

$$
w\^\star = (X\^\mathsf{T}X + \lambda I_{d})\^{-1}X^\mathsf{T}y
$$

As you can see, we recover OLS by simply setting $\lambda = 0$ everywhere.

# Analysis

$$
\begin{bmatrix}X \\\\ \sqrt{\lambda} I w \approx \begin{bmatrix}y \\\\ 0 \end{bmatrix} \end{bmatrix}
$$