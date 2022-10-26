**Autoencoder**. An autoencoder is a [[neural network]] that does dimensionality reduction by simultaneously learning an encoder and a decoder. 

\begin{align\*}
\overbrace{f_\theta}^{\text{Encoder}}: \RR^m &\to \RR^k, \qquad k \ll m \\\\
x &\mapsto z \\\\
\\\\
\overbrace{g_\phi}^{\text{Decoder}}: \RR^k &\to \RR^m \\\\
z &\mapsto x
\end{align\*}


$$
\theta, \phi = \arg\min_{\Theta, \Phi} \frac{1}{N}\sum_{i=1}^N \ell(\hat{x}_i, x_i) \\\\
\hat{x} = g_\phi(f_\theta(x))
$$