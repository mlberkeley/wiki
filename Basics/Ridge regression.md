**Ridge regression** is an extension to [[ordinary least squares]] .

$$
w^\star = \arg\min_w \lVert Xw - y \rVert^2 + \lambda \lVert w \rVert^2
$$

$$
w\^\star = (X\^\mathsf{T}X + \lambda I)\^{-1}X^\mathsf{T}y
$$