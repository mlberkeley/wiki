---
bibliography: "./RL/rl.bib"
---

# Maximum Entropy Reinforcement learning

**Maximum entropy reinforcement learning (MaxEnt RL)** is a variant on the standard RL formulation where we encourage our policy to have as high an entropy as it can. You'll want to understand that formulation first before you dive into this one.

The modified RL objective is now

$$
\arg\max_\pi  \mathbb{E}_\pi \left[ \sum_{t=1}^T r(s_t, a_t) + \color{red}\alpha \mathcal{H}\left[ \pi(\cdot \mid s_t) \right] \color{black} \right],
$$

where $\mathcal{H}$ is the [[entropy]].

- The strongest example of a MaxEnt RL algorithm is SAC [@pmlr-v80-haarnoja18b].
- A [BAIR blog post](https://bair.berkeley.edu/blog/2021/03/10/maxent-robust-rl/) explaining why MaxEnt RL is good: it's a more robust optimization.

---