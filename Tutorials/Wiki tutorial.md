# Markdown

Pages should be written in markdown, which is the default setting. Markdown is a human-readable (i.e. close to plain text) format and all popular editors and wiki tools can render it out of the box.

# Editing a page

Make sure you know [[Best practices]] and [[How to write a wiki article]] before changing anything.

Go to a page and try to edit it. What you see in the editor is the whole source for the file. To see how your changes will appear to the reader, go to the preview tab above. Feel free to put a more descriptive commit message in the box if you like. Then click 'Save' or just press Cmd+S.

# Math

You can use LaTeX on any page. If you want the math to appear inline, wrap it in single dollar signs like `$1+1$`. For longer equations, use double dollar signs like `$$1+1$$`. Here's an example you can look at by inspecting this page's source:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

# Linking

You can link to another page in the wiki by writing `[[Name of article]]`.

# CriticMarkup

CriticMarkup lets us mark editing changes in case we're unsure about something. Peek into this file's source to see the notation.

- This is {--is --}a test.
- This {++is ++}a test.
- This {~~isn't~>is~~} a test.

# Pro Tips

- [Keyboard shortcuts](https://github.com/gollum/gollum/wiki#hotkeys)