A **design matrix** is a matrix $X$ that represents all your data. The typical convention is that the rows are examples and the columns are features.

$$
X = \begin{bmatrix} --- & \text{example 1} & --- \\\\ --- & \text{example 2} & --- \\\\  & \vdots & \\\\ --- & \text{example }n & --- \end{bmatrix}
$$

The simplest "machine learning" you can do with a design matrix $X$ if you have labels $y$ is do [[ordinary least squares]].