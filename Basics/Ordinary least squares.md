**Ordinary least squares (OLS)**. Suppose you have a datset of $n$ examples $\\{(x_i, y_i)\\}_{i=1}^n$ where each $x \in \RR^d$ and $y \in \RR$. You suspect that the relationship is linear, i.e. $y = w^\mathsf{T}x$ for some weight parameter $w \in \RR^d$. OLS tells you how to find the $w$ with the lowest mean squared error.

For ease, we put the examples into a [[design matrix]] $X \in \RR^{n \times d}$ and the labels in a vector $y \in \RR^n$. 

$$
w^\star = \arg\min_w \lVert y - Xw \rVert^2_2
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

- The matrix $X^\mathsf{T}X$ is only invertible when the rank of $X$ is $d$, i.e. each of the columns is linearly independent. 
- [[Ridge regression]] is also an important extension to least squares.