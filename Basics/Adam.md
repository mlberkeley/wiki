**Adam** is a [[gradient descent]] method.

\begin{align\*}
w_{k+1} &= w_k - \eta \frac{a_{k+1}}{\sqrt{V_{k+1} } + \epsilon} \\\\
a_{k+1} &= (1 - \beta)a_k + \beta \nabla_w L(w_k)
\end{align\*}