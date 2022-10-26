**Attention**. 

Imagine a [[Seq2Seq]] task such as converting a string "I am a student" to upper case "I AM A STUDENT" or lower case "i am a student." We might use an RNN with an encoder, whereby the final hidden state is handed to a decoder. But this means that final hidden state will need to capture the entire sequence information in one state.

$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\mathsf{T}}{\sqrt{d_k}} \right)V
$$