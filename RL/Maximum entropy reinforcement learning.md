---
bibliography: "./RL/rl.bib"
---

# Maximum Entropy Reinforcement learning

**Maximum entropy reinforcement learning (MaxEnt RL)** is a variant on the standard RL formulation where we encourage our policy to have as high an entropy as it can. You'll want to understand that formulation first before you dive into this one.

The modified RL objective is now

$$
\arg\max_\pi  \mathbb{E}_\pi \left[ \sum_{t=1}^T r(s_t, a_t) + \color{red}\alpha \mathcal{H} \color{black} \right]
$$

The strongest example of a MaxEnt RL algorithm is SAC [@pmlr-v80-haarnoja18b].

---