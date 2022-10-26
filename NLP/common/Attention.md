**Attention**. It's the mechanism used in the [[Transformer]] architecture that, intuitively speaking, tells the model what part of the input to focus on. Take a [[Seq2Seq]] task such as translating an English sentence into French. 

![](https://lilianweng.github.io/posts/2018-06-24-attention/sentence-example-attention.png)

Given a sequence, we want an attention vector to tell us which words need our attention, i.e. go together. As we read a sentence, word by word, different parts of the sentence will demand our attention. In the image below, the red word is the one we're reading and the size of the blue shade indicates attention.

![](https://lilianweng.github.io/posts/2018-06-24-attention/cheng2016-fig1.png)

What if we allowed the decoder to look back at an embedding of the input sequence? We could imagine a memory structure like an array, but we'll use something more like a hash table here. The hash table has keys and values, but we don't use the exact key to retrieve, rather a query.

$$
\text{Attention} = \sum_{i=1}^n \mathsf{similarity}(\mathsf{query}, \mathsf{key}_i)\mathsf{value}_i
$$

Attention selectively stores the information. Query the encoder hidden states with a query vector, use the weights to compute a sum of the hidden states. This is the input for the layer that outputs tokens.

The input sequence $x \in \RR^{N \times F}$ is projected by three matrices $W_Q \in \RR^{F \times D}, W_K \in \RR^{F \times D}, W_V \in \RR^{F \times M}$.

$$
Q = x W_Q \in \RR^{N \times D} \\\\
K = x W_K \in \RR^{N \times D} \\\\
V = x W_V \in \RR^{N \times M}
$$

The matrix $QK^\mathsf{T} \in \RR^{N \times N}$ contains the similarity scores.

$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\mathsf{T}}{\sqrt{d_k}} \right)V,
$$

where softmax is applied row-wise.


$$
V_i' = \frac{\sum_{j=1}^N \mathsf{sim}(Q_i, K_j)V_j  }{\sum_{j=1}^N \mathsf{sim}(Q_i , K_j) }
$$

# Advantages

Compare to RNN with an encoder, whereby the final hidden state is handed to a decoder, therefore lot of burden on this final hidden state to compress the entire sentence.

- Parallelizable
- No hidden state