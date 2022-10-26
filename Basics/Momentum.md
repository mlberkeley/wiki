---
bibliography: "./Basics/basics.bib"
---

**Momentum**. Make sure you understand [[gradient descent]] first.

Momentum is a tweak on GD to safely increase our learning rate. Instead of updating based on the latest gradient, we update with a moving average / low pass filter.

\begin{align}
w_{t + 1} &= w_{t} - \eta a_{t+1} \\\\
a_{t + 1} &= \beta a_t + \nabla_{w_t} L(w_t)
\end{align}

When $\beta = 0$, we recover GD.

Check out @goh2017why for a good explanation.

---