**Convolutional neural network (CNN)**. Make sure you understand [[neural network]] first.

CNNs are good for images because they respect locality and invariance. In a standard CNN, we have

- [[Convolution]] layers
- Pooling layers
- Flattening

Example

```py
nn.Conv2d(...),
nn.ReLU(),
nn. MaxPool2d(...),
nn. Conv2d(...),
nn. ReLU(),
nn. MaxPool2d(...),
nn. Flatten(),
nn. Linear(...),
nn. Softmax(...)
```