---
bibliography: "./NLP/nlp-papers.bib"
---


# Transformers

**Transformer.** Make sure you understand [[Attention]] first.

Transformers are an architecture first described by @https://doi.org/10.48550/arxiv.1706.03762 that overtaken RNNs, LSTMs and similar.

![](https://miro.medium.com/max/1400/1*BHzGVskWGS_3jEcYYi6miQ.png)

# Analysis

A transformer is a function $T: \RR^{N \times F} \to \RR^{N \times F}$ that takes $x \in \RR^{N \times F}$, a sequence of $N$ features vectors of dimension $F$ defined by the composition of $L$ layers $T_1, \dots, T_L$

$$
T_\ell(x) = f_\ell(A_\ell(x) + x)
$$

- $f_\ell$ transforms each feature independently of the others
- $A_\ell$ is the self-[[attention]] function, the only part of transformer that acts across sequences.


---