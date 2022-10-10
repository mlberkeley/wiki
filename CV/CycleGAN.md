---
bibliography: "./CV/cv.bib"
---

# CycleGAN

CycleGAN is a method for unpaired image-to-image translation introduced in @https://doi.org/10.48550/arxiv.1703.10593. 

Unpaired image-to-image translation
: Given a domain of images $X$ which have some correspondence to a domain of images $Y$, learn a mapping $G$ that takes an $x$ and produces the corresponding $y$.

If we had a dataset $\\{x_i, y_i\\}\_{i=1}^n$, this would be a simpler, supervised learning problem. Unpaired means that what we have is $\\{x\_i\\}\_{i=1}^N$ and $\\{y_j\\}_{j=1}^M$. The key idea is that to learn $G$ we learn an inverse mapping $F: Y \to X$ and force

$$
F(G(X)) \approx X \tag{Cycle Consistency}
$$

$$
\mathcal{L}\_{\text{cyc}} = \mathbb{E}\_{x \sim p_{\text{data}}(x)}\big[ \lVert F(G(x)) - x \Vert_1  \big] + \mathbb{E}\_{x \sim p_{\text{data}}(y)}\left[ \lVert G(F(y)) - y \Vert_1  \right]
$$

---