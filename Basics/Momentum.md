---
bibliography: "./Basics/basics.bib"
---

**Momentum**. Make sure you understand [[gradient descent]] first.

Momentum is a tweak on GD.

\begin{align}
w_{t + 1} &= w_{t} - \eta a_{t+1} \\\\
a_{t + 1} &= \beta a_t + \nabla f(w_t)
\end{align}

When $\beta = 0$, we recover GD.

Check out @goh2017why for a good explanation.

---