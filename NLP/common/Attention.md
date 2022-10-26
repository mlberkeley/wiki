**Attention**. It's the mechanism used in the [[Transformer]] architecture.

Imagine a [[Seq2Seq]] task such as converting a string "I am a student" to upper case "I AM A STUDENT" or lower case "i am a student." We might use an RNN with an encoder, whereby the final hidden state is handed to a decoder. But this means that we're putting a lot of burden on this final hidden state to compress the entire sentence.

What if we allowed the decoder to look back at an embeddeding of the input sequence? We could imagine a memory structure like an array, but we'll use something more like a hash table here. The hash table has keys and values, but we don't use the exact key to retrieve, rather a query.

$$
\text{Attention} = \sum_{i=1}^n \mathsf{similarity}(\mathsf{query}, \mathsf{key}_i)\mathsf{value}_i
$$

Attention selectively stores the information. Query the encoder hidden states with a query vector, use the weights to compute a sum of the hidden states. This is the input for the layer that outputs tokens.

The input sequence $x$ is projected by three matrices $W_Q \in \RR^{F \times D}, W_K \in \RR^{F \times D}, W_V \in \RR^{F \times M}$.

$$
Q = x W_Q \\\\ K = x W_K \\\\ V = x W_V
$$

$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\mathsf{T}}{\sqrt{d_k}} \right)V,
$$

where softmax is applied row-wise.


$$
V_i' = \frac{\sum_{j=1}^N \mathsf{sim}(Q_i, K_j)V_j  }{\sum_{j=1}^N \mathsf{sim}(Q_i , K_j) }
$$