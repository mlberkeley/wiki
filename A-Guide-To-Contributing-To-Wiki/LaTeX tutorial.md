One reason we use gollum is that it supports $\LaTeX$, a popular math typesetting software. In this tutorial, we will show off some features of LaTeX and MathJax, the library that renders LaTeX in the browser. In any file in the wiki, you can use LaTeX to include nicely rendered math. If you need a quickstart, you can look at this [page](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference). 

If you want the math to appear inline like $1+1=2$, then you should put it in single dollar signs: `$1+1=2$`. On the other hand, if you want it to appear as its own line, then put it in double dollar signs `$$1+1=2$$`: $$1+1=2.$$

By the way, it's common practice to punctuate equations with commas or periods at the end, depending on how it's used in a sentence. If you want to refer to the equation, wrap it like so `\begin{equation}1+1=2\end{equation}` to get it numbered.

\begin{equation}
a^2 + b^2 = c^2. 
\end{equation}

You can even change the label with `\tag{}`

$$
a^2 + b^2 = c^2. \tag{Pythagorean Theorem}
$$

If you want a sequence of equations together, use a gather environment

\begin{gather}
1 + 1 = 2 \\\\
2 + 2 = 4 \\\\
4 + 4 = 8.
\end{gather}

Sometimes you want to use an aligned environment

\begin{align}
f(x) &= (x + a)^2 \\\\
&= (x+a)(x+a) \\\\
&= x^2 + 2ax + a^2
\end{align}

<<Warn("If your LaTeX code includes more than one underscore (_) or caret (^) or slash (/), you may need to escape the character by inserting a slash before it.")>>