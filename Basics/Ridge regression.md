**Ridge regression** is an extension to [[ordinary least squares]] with [[regularization]] in the form of a L2 norm penalty on the weights with proportionality constant $\lambda$. Again, we have $X \in \RR^{n \times d}$, $w \in \RR^d$, and $y \in \RR^n$.

$$
w^\star = \arg\min_w \lVert Xw - y \rVert^2 + \lambda \lVert w \rVert^2
$$

The closed form solution is

$$
w\^\star = (X\^\mathsf{T}X + \lambda I_{d})\^{-1}X^\mathsf{T}y, \tag{Classic Ridge Form}
$$

but we can equivalently write

$$
w\^\star = X^\mathsf{T}(XX\^\mathsf{T} + \lambda I_{d})\^{-1}y, \tag{Kernel Ridge Form}
$$

As you can see, we recover OLS by simply setting $\lambda = 0$ everywhere. As $\lambda \to \infty$, we have $w \to 0$.

# Analysis

$$
\begin{bmatrix}X \\\\ \sqrt{\lambda} I_d \end{bmatrix}w \approx \begin{bmatrix}y \\\\ 0 \end{bmatrix} \tag{Data-Augmentation View}
$$

$$
\begin{bmatrix}X & \sqrt{\lambda} I_n \end{bmatrix} \begin{bmatrix} w \\\\ f\end{bmatrix} \approx y \tag{Feature-Augmentation View}
$$

# Synthesis

Suppose we do the [[singular value decomposition]] $X = U \Sigma V^\mathsf{T}$. Then,

\begin{align}
\require{cancel} w^\star &= (V\Sigma^2 V^\mathsf{T} + \lambda I_{d})\^{-1}V\Sigma U^\mathsf{T}y \\\\
&= V(\Sigma^2 + \lambda I_d)\^{-1}\cancel{V^\mathsf{T}V} \Sigma U^\mathsf{T}y \\\\
&= VDU^\mathsf{T}y,
\end{align}

where $D$ is a diagonal matrix 

$$
D_{ii} = \frac{\sigma_i}{\sigma_i^2 + \lambda^2}
$$


In general, we can have the loss be

$$
\lVert Xw - y \rVert^2 + \lVert \Gamma w \rVert^2
$$