A **convolution** is a layer in a [[CNN]]. Rather than a standard affine function with an activation applied, a CNN scans a convolutional kernel or filter across the whole image input to get a feature map. The weights are shared.

The layer is made up of $F$ filters, each of which we'll slide over the input. 

- The number of weights is $K^2CF$
- The number of biases is $F$
- $W' = \left\lfloor \frac{W - K  + 2P}{S} \right\rfloor + 1$
- $H' = \left\lfloor \frac{H - K  + 2P}{S} \right\rfloor + 1$
- $C' = F$

![](https://cs231n.github.io/assets/cnn/cnn.jpeg)

Say the input has shape $(W, H, C)$. The convolutional layers has 4 hyperparameters:

|Name|Symbol|
|----|------|
|Filter Size|$K$|
|Padding Size|$P$|
|Stride step|$S$|
|Number of filters|$F$|

# Padding

Padding is adding extra pixels to the image for the purpose of capturing what's happening at the borders of the image. Common options are zero-padding and mirror-padding.

# Stride

The stride is how big the steps are.

# Receptive Field

The receptive field for a pixel in the output is the set of pixels from the image it depends on. To increase receptive field, we use [[pooling]].