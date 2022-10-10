---
bibliography: "./CV/cv.bib"
---

# CycleGAN

**CycleGAN** is a generative adversarial network that can do unpaired image-to-image translation, first introduced in @https://doi.org/10.48550/arxiv.1703.10593.

Unpaired image-to-image translation
: Given a domain of images $X$ which have some correspondence to a domain of images $Y$, learn a mapping $G$ that takes an $x$ and produces the corresponding $y$.

Simple examples are translating pictures of horses into pictures of zebras or pictures of apples to pictures of oranges, but you might be able to see that this can help with style transfer tasks.

The key idea in this work is hinted at in the word cycle. The way to construct an objective is to try to learn two mappings: one from $X$ to $Y$ and, separately, one from $Y$ to $X$. Then, you can stipulate that these should be inverse functions, so that if I try to convert an apple to a corresponding orange back to an apple, I get back the same apple.

# Analysis

If we had a dataset $\\{x_i, y_i\\}\_{i=1}^n$, this would be a simpler, supervised learning problem. Unpaired means that what we have is $\\{x\_i\\}\_{i=1}^N$ and $\\{y_j\\}_{j=1}^M$. As mentioned above, to learn $G$, we will also learn an inverse mapping $F: Y \to X$ and force

$$
F(G(X)) \approx X \tag{Cycle Consistency}
$$

Then, we get an intuitive loss term:

$$
\mathcal{L}\_{\text{cyc}}(G, F) = \mathbb{E}\_{x \sim p_{\text{data}}(x)}\big[ \lVert F(G(x)) - x \Vert_1  \big] + \mathbb{E}\_{x \sim p_{\text{data}}(y)}\big[ \lVert G(F(y)) - y \Vert_1  \big]
$$

The full loss is 

$$
\mathcal{L}(G, F, D_X, D_Y) = \mathcal{L}_{\text{GAN}}(G, D_Y, X, Y) + \mathcal{L}_{\text{GAN}}(F, D_X, Y, X) + \lambda \mathcal{L}_{\text{cyc}}(G,F)
$$

---