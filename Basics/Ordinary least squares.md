**Ordinary least squares (OLS)** is a method for determining the parameters $w \in \RR^d$ to a linear model $Xw \approx y$ when you have [[design matrix]] $X \in \RR^{n \times d}$ with $n$ examples and $d$ features (typically, $n \gg d$) and labels $y \in \RR^n$.

$$
w^\star = \arg\min_w \lVert y - Xw \rVert^2
$$

# Analysis

Using a little vector calculus, we can find a closed form solution to this equation.

\begin{gather\*}
\nabla_w \langle y - Xw,  y - Xw \rangle = 0 \\\\
\nabla_w \left[ {\langle y, y \rangle} - 2 \langle Xw, y \rangle +  \langle Xw, Xw \rangle \right] = 0 \\\\
-2 X^\mathsf{T}y + 2(X^\mathsf{T}X)w = 0
\end{gather\*}

$$
w^\star = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y \tag{OLS Solution}
$$

This trick for making an "inverse" out of a non-rectangular matrix comes up often enough that it has its own name, the [Moore-Penrose pseudoinverse](https://www.wikiwand.com/en/Moore%E2%80%93Penrose_inverse). In that notation, we just write

$$
w^\star = X^\dagger y
$$

# Synthesis

The matrix $X^\mathsf{T}X$ is only invertible when the rank of $X$ is $d$, i.e. each of the columns is linearly independent.