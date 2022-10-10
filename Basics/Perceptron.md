The **perceptron** is a simple binary classifier learning algorithm. Say you have a dataset $D = \\{(\mathbf{x}\_i, y_i)\\}_{i=1}^n$. The labels $y_i \in \\{+1, -1\\}$. Given an input $\mathbf{x}$, the perceptron predicts

$$
f(\mathbf{x}) = \operatorname{sgn}(\mathbf{w} \cdot \mathbf{x})
$$

The update rule is that if $\hat{y}_i \neq y_i$, then

$$
\mathbf{w} \leftarrow \mathbf{w} + \alpha y_i \mathbf{x}_i
$$