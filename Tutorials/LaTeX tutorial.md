One reason we use gollum is that it supports $\LaTeX$, a popular math typesetting software. In any file in the wiki, you can use LaTeX to include nicely rendered math.

If you want the math to appear inline like $1+1=2$, then you should put it in single dollar signs: `$1+1=2$`. On the other hand, if you want it to appear as its own line, then put it in double dollar signs `$$1+1=2$$`: $$1+1=2.$$

By the way, it's common practice to punctuate equations with commas or periods at the end, depending on how it's used in a sentence.

If you want to refer to the equation, you can have it numbered

\begin{equation}
a^2 + b^2 = c^2. \tag{Pythagorean Theorem}
\end{equation}

If your LaTeX code includes more than one underscore (_) or caret (^) or slash (/), you may need to escape the character by inserting a slash before it.