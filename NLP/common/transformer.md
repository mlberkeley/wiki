---
bibliography: "./NLP/nlp-papers.bib"
---


# Transformers

**Transformers** are an architecture first described by @https://doi.org/10.48550/arxiv.1706.03762 that overtaken RNNs, LSTMs and similar.

$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\mathsf{T}}{\sqrt{d_k}} \right)V
$$

---