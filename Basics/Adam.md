**Adam** is a [[gradient descent]] method.

\begin{align\*}
w_{k+1} &= w_k - \eta \frac{a_{k+1}}{\sqrt{V_{k+1} } + \epsilon} \\\\
a_{k+1} &= (1 - \beta)a_k + \beta \nabla_{w_k} L(w_k) \\\\
V_{k+1} &= (1 - \beta') V_k + \beta' \nabla_{w_k} \left( \frac{\partial L}{\partial w} \right)^2
\end{align\*}

Typically, $\beta' \ll \beta$. 