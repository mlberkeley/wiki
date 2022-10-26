**Matrix calculus** is just expanding the familiar notions of single-variable calculus for functions of vectors and matrices, e.g. the concept of [[gradient]]. A popular resource is [The Matrix Cookbook](https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf). Some common/useful facts are here:

$$
\nabla_x \left( x^\mathsf{T}Ax \right) = x^\mathsf{T}\left(A + A^\mathsf{T} \right)
$$

- $$\nabla_x \langle Ax, b \rangle = A^\mathsf{T}b$$
    - A corollary: $$\nabla_x \langle x, a \rangle = a$$ 