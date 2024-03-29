**Gradient descent (GD)**. Before reading this article, you should know what a [[gradient]] and a [[neural network]] is.

Gradient descent is the basic algorithm used to train a NN. If the weights of the network are $\theta$ and the loss function is $\mathcal{L}(\theta)$, then gradient descent consists in iteratively computing the following update:

$$
\theta_{t + 1} =  \theta_t - \eta \nabla_\theta \mathcal{L}(\theta) \tag{Vanilla Gradient Descent}
$$

The hyperparameter $\eta$ is called the **learning rate**. The larger the learning rate, the bigger the delta or step in an iteration. The steps need to be big enough that the model is improving, but not so big as to overshoot.

Applying the gradient descent algorithm in practice requires [[backpropagation]] and [[automatic differentiation]].

# Analysis

The simplest setting to try GD on is [[ordinary least squares]].

\begin{align\*}
w_{t +1 } &= w_t - \eta \nabla_{w_t} \lVert y - Xw_t \rVert^2 \\\\
&= w_t - 2\eta X^\mathsf{T} (y - Xw_t)
\end{align\*}

## Convergence

Let's take a very simple example. Our parameter is a scalar $w$, and our equation is $y = wx$. We want to minimize $L(w) = (y - x w)^2$.

\begin{align\*}
w_{t + 1} &= w_t - \eta \frac{\partial}{\partial w_t} (y - x w_t)^2 \\\\
&= w_t + 2\eta x(y - xw_t) \\\\
&= \left(1 - 2\eta x^2\right) w_t + 2\eta x y
\end{align\*}

We can see now that the value of $w_{t+1}$ is going to depend on a term $(1 - 2 \eta x\^2)^{t+1}$. For this to converge, we need $\eta < \frac{1}{x^2}$. Now, if $\eta$ is sufficiently small, we'll see convergence. But if it is too big, we can actually diverge from the solution! [[Momentum]] is a solution to this problem.