**Ordinary least squares (OLS)** is a method for determining the parameters $w \in \RR^d$ to a linear model $Xw \approx y$ when you have [[design matrix]] $X \in \RR^{n \times d}$ and labels $y \in \RR^n$.

$$
w^\star = \arg\min_w \lVert y - Xw \rVert^2
$$

# Analysis

Using a little vector calculus, we can find a closed form solution to this equation.

$$
w^\star = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y \tag{OLS Solution}
$$

$$
w^\star = X^\dagger y
$$