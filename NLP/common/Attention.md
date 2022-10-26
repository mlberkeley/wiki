**Attention**. [[Transformer]]

Imagine a [[Seq2Seq]] task such as converting a string "I am a student" to upper case "I AM A STUDENT" or lower case "i am a student." We might use an RNN with an encoder, whereby the final hidden state is handed to a decoder. But this means that final hidden state will need to capture the entire sequence information in one state.

Attention selectively stores the information. Query the encoder hidden states with a query vector, use the weights to compute a sum of the hidden states. This is the input for the layer that outputs tokens.

$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\mathsf{T}}{\sqrt{d_k}} \right)V
$$