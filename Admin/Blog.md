# Blog

The ML@B blog is part of the [mlab-site](https://github.com/mlberkeley/mlab-site) repo at  [`src/blog`](https://github.com/mlberkeley/mlab-site/tree/master/src/blog). Posts go in [`content`](https://github.com/mlberkeley/mlab-site/tree/master/src/blog/content/posts).

To update the [website](http://ml.berkeley.edu/blog), follow these steps.

1. Clone the repo on your local machine.
2. Add or edit the post in `content`.
3. Run `gatsby build`.
4. Push your changes.
5. SSH into `mlab@apphost.ocf.berkeley.edu`
6. `cd myapp`
7. Pull from the repo.
8. That's it!

# Debugging

If you find that the blog page is blank, and especially if you see `Uncaught SyntaxError: Unexpected token '<'` in the console, you need to `gatsby clean` before you `gatsby build`.