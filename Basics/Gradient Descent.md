**Gradient descent (GD)**. Before reading this article, you should know what a [[gradient]] is.

Gradient descent is the basic algorithm used to train a [[neural network]]. If the weights of the network are $\theta$ and the loss function is $\mathcal{L}(\theta)$, then gradient descent consists in iteratively computing the following update:

$$
\theta_{t + 1} =  \theta_t - \eta \nabla_\theta \mathcal{L}(\theta) \tag{Vanilla Gradient Descent}
$$

Applying the gradient descent algorithm in practice requires [[backpropagation]] and [[automatic differentiation]].

# Analysis

The simplest setting to try GD on is [[ordinary least squares]].

$$
w_{t +1 } = w_t - \eta \nabla_w \lVert y - Xw \rVert^2
$$