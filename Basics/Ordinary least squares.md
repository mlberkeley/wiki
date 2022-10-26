**Ordinary least squares (OLS)** is a method for determining the parameters $\mathbf{w} \in \RR^d$ to a linear model $\mathbf{X}\mathbf{w} \approx y$ when you have [[design matrix]] $X \in \RR^{n \times d}$ and labels $y$.

$$
w^\star = \arg\min_w \lVert y - Xw \rVert^2
$$

# Analysis

$$
w^\star = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y \tag{OLS Solution}
$$