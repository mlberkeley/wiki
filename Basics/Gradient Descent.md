**Gradient descent**. Before reading this article, you should know what a [[gradient]] is.

is the basic algorithm used to train a [[neural network]]. If the weights of the network are $\theta$ and the loss function is $\mathcal{L}(\theta)$, then gradient descent consists in iteratively computing the following update:

$$
\theta \leftarrow \theta - \alpha \nabla_\theta \mathcal{L}(\theta)
$$

Applying the gradient descent algorithm in practice requires [[backpropagation]] and [[automatic differentiation]].