---
bibliography: "./Basics/basics.bib"
---

**Momentum**. Make sure you understand [[gradient descent]] first.

Momentum is a tweak on GD.

\begin{align}
w_{t + 1} &= w_{t} - \alpha z_{t+1} \\\\
z_{t + 1} &= \beta z_t + \nabla f(w_t)
\end{align}

Check out @goh2017why