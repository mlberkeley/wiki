A **convolution** is a layer in a [[CNN]].

The layer is made up of $F$ filters, each of which we'll slide over the input. 

- The number of weights is $K^2CF$
- The number of biases is $F$
- $W' = \lfloor \frac{W - K  + 2P}{S} \rfloor + 1$
- $H' = \lfloor \frac{H - K  + 2P}{S} \rfloor + 1$
- $C' = F$

![](https://cs231n.github.io/assets/cnn/cnn.jpeg)

Say the input has shape $(W, H, C)$. The convolutional layers has 4 hyperparameters:

|Name|Symbol|
|----|------|
|Filter Size|$K$|
|Padding Size|$P$|
|Stride step|$S$|
|Number of filters|$F$|