**Attention**. 

Imagine a [[Seq2Seq]] task such as converting a string "I am a student" to upper case "I AM A STUDENT" or lower case "i am a student."

$$
\mathsf{Attention}(Q, K, V) = \operatorname{softmax}\left( \frac{QK^\mathsf{T}}{\sqrt{d_k}} \right)V
$$