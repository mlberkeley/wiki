**Autoencoder**. An autoencoder is a [[neural network]] 

\begin{align\*}
f_\theta: \RR^m &\to \RR^k, \qquad k \ll m \\\\
x &\mapsto z \\\\
\end{align\*}
\begin{align\*}
g_\phi: \RR^k &\to \RR^m \\\\
z &\mapsto x
\end{align\*}

that does dimensionality reduction by simultaneously learning an encoder and a decoder.