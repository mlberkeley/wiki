**Principle Component Analysis (PCA)**. Make sure you understand [[ordinary least squares]], which is the supervised learning analogue, and [[SVD]].


PCA is a method for dimensionality reduction from dimension $d$ to $k$. 

$$
\mathcal{L}(W_1, W_2; X) = \frac{1}{n} \lVert \mathbf{X} - W_2 W_1 \mathbf{X} \rVert_F^2
$$

Let's say we have data in the form of a [[design matrix]] $X \in \RR^{n \times d}$. SVD yields

$$
X = U \Sigma V^\mathsf{T}
$$

Select the first $k$ columns of $U$, which correspond to the $k$ largest singular values in $\Sigma$. That's your basis for the lower dimensional space.