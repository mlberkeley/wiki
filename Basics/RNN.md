**Recurrent neural network (RNN)**. Make sure you understand [[neural network]] first.

An RNN is a neural network designed to address the problem that standard neural networks don't use past inputs to predict future ones. An RNN captures these temporal dependencies in a hidden state $h_t$. But the weights $W$ are shared across states. 

![](https://colah.github.io/posts/2015-08-Understanding-LSTMs/img/RNN-unrolled.png)

The hidden state depends both on the past hidden state and the current input.

$$
h_t = f_W(h_{t-1}, x_t)
$$

For example, we could have

$$
h_t = \sigma(W^h h_{t-1} + W^x x_t + b)
$$

RNNs can be used for a number of tasks.

![](https://3863425935-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LIA3amopGH9NC6Rf0mA%2F-M4bJ-IWAKzglR0XHFwU%2F-M4bJ3Kh_oCL1b6-9iX9%2Fsequence.png?generation=1586576264708001&alt=media)


$$
\frac{\partial \mathcal{L}}{\partial W} = \sum_{t=1}^T \frac{\partial \mathcal{L}}{\partial h_t}\frac{\partial h_t}{\partial W}
$$

The big problem with RNNs is that they don't capture long-term dependencies well, hence [[LSTM]].