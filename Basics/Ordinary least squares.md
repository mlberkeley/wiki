**Ordinary least squares (OLS)** is a method for determining the parameters $w$ to a linear model $Xw \approx y$ when you have [[design matrix]] $X$ and labels $y$.

$$
w^\star = \arg\min_w \lVert y - Xw \rVert^2
$$

# Analysis

$$
w^\star = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y \tag{OLS Solution}
$$