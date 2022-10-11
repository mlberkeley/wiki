The **entropy** of a random variable tells us how many bits we'd use in the optimal encoding. 

For example, say I'm trying to encode strings where each character is independently sampled from the English alphabet. I look up the distribution and calculate that since _e_ shows up 11% of the time, it would take ~3.2 bits and _v_ shows up 1% of the time, so it takes ~6.6 bits. The entropy of a letter, then, is the average, which comes out to 4.11 bits.

# Analysis

The entropy of $X$ is defined as the expected [[surprise]] of $X$.

$$
\mathbb{E}
$$