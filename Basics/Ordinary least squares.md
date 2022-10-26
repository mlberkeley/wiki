**Ordinary least squares (OLS)**. Suppose you have labels $y$ and a [[design matrix]] $X \in \RR^{n \times d}$ with $n$ examples and $d$ features (typically, $n \gg d$). OLS will find the parameters $w \in \RR^d$ for the linear approximation $Xw \approx y$.

The optimization problem is to minimize the mean squared error.

$$
w^\star = \arg\min_w \lVert y - Xw \rVert^2
$$

# Analysis

We can find the optimal $w$ by setting the gradient equal to 0.

\begin{gather\*}
\nabla_w \langle y - Xw,  y - Xw \rangle = 0 \\\\
\nabla_w \left[ {\langle y, y \rangle} - 2 \langle Xw, y \rangle +  \langle Xw, Xw \rangle \right] = 0 \\\\
-2 X^\mathsf{T}y + 2(X^\mathsf{T}X)w = 0
\end{gather\*}

Rearranging, we get a closed-form solution.

$$
w^\star = (X\^\mathsf{T}X)\^{-1}X^\mathsf{T}y \tag{OLS Solution}
$$

This trick for making an "inverse" out of a non-rectangular matrix comes up often enough that it has its own name, the [Moore-Penrose pseudoinverse](https://www.wikiwand.com/en/Moore%E2%80%93Penrose_inverse). In that notation, we just write

$$
w^\star = X^\dagger y
$$

# Synthesis

The matrix $X^\mathsf{T}X$ is only invertible when the rank of $X$ is $d$, i.e. each of the columns is linearly independent. [[Ridge regression]] is also an important extension to least squares.