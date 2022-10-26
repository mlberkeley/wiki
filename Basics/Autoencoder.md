**Autoencoder**. An autoencoder is a [[neural network]] 

\begin{align\*}
\overbrace{f_\theta}^{\text{Encoder}}: \RR^m &\to \RR^k, \qquad k \ll m \\\\
x &\mapsto z \\\\
\\\\
g_\phi: \RR^k &\to \RR^m \\\\
z &\mapsto x
\end{align\*}

that does dimensionality reduction by simultaneously learning an encoder and a decoder.