# Deep Learning 2

# Dependencies

Strong Dependencies:

- [[Deep-Learning-1-Module]]

Weak Dependencies:

- None

# Module Overview

This is supposed to take a second more advanced pass at deep learning (specifically the backward) from a more applied programming perspective, relative to deep learning 1 which was more textbook and about concepts and the forward pass. We also throw in some more modern deep learning techniques like batchnorm and ADAM. At the end there will be an intro to pytorch demo which begins motivating the homework assignment on pytorch so it isn’t unfamiliar

# Slide Outline

- Warning about today’s lecture
    - For the first half of lecture, we are going to discuss the backpropagation algorithm for calculating all our partial derivatives in one swoop, something you won’t ever need to actually implement or have anything to do with
    - If you are lost, that’s totally fine, we just need you to takeaway a broad idea of what backprop is, what backprop is doing and why we do it
    - The last half of the lecture, however will be critical to modern deep learning systems
- Deep learning revisited (5 min)
    - Revisit gradient descent, the idea of partial derivatives, and the concept of a loss function
- Math (5-10 min)
    - Bring up the chain rule for some graph of operations
    - Basic ideas of chain rule through this graph. [This](https://colah.github.io/posts/2015-08-Backprop/) article is fantastic for demonstrating calculus on computational graphs and would make a good pre-lecture reading, as it gets at the core of what I want to talk about
- Backpropagation (10-15 min)
    - Emphasize before anything else, that backprop is simply an algorithm for calculating all our partial derivatives in one go. This doesn’t change how we modify the weights after we calculate the partial derivatives whatsoever. We will still (once we have all the partial derivatives of the loss w.r.t our weights) make the same gradient steps. This algorithm is simply the efficient way that we calculate all our partial derivatives all in one swoop
        - The thing that always irks me about the way people teach backpropagation is that it makes it sound like we’re going to change the way we modify weights... as if we are going to start to modify the weights at the end, then run the same forward pass again, then modify the next layer of weights, and so on
        - Emphasize strongly that this is simply a computational trick for calculating all the partial derivatives we need to SGD in an efficient manner
    - Show scalar computational graph
        - Show chain rule
        - Show idea of backprop about saving computation
    - Show the graph of operations for a one hidden layer neural network
        - L = MSE(y - (W2 @ RELU( W1 @ x + b) + b)
        - Make sure to label each node
        - Don’t go through the chain rule for this!!!
    - Computational effectiveness of the backpropagation algorithm
    - Mention that the only real takeaway is the conceptual understanding of how backprop speeds up computation for gradient descent
    - Talk about what you can and can’t backprop thru... show computational graphs
- Optimization other than SGD (5 min)
    - Momentum revisited
    - RMS-Prop?
    - Adam for certain and how it relates to momentum mentioned in the previous lecture
- Batchnorm (5 min)
    - Normalized gaussian is easier to navigate through gradient descent than wider gaussians with weird covariances
- Weight decay
    - Adding in for regularization
- Intro to PyTorch (15 min)
    - Teach numpy comparison to pytorch, autodifferentiation, and intro to nn.module components as wrappers for basic nn functions
        - This has an assignment attached to it at the end of this, so I don’t think it’s critical that we teach everything, but even like a quick demo showing the numpy comparison to torch is probably good

# Assignment Outline

### Pre Lecture Content

- Possibly some question on [this](https://colah.github.io/posts/2015-08-Backprop/) article which has great explanations of computational graphs and how we do calculus on them
    - Chain rule gradescope questions

### Post Lecture Content

- Interactive pytorch notebook to learn pytorch from the ground up (even if you weren’t paying attention during last part of lecture)
    - We want to first teach that 1) pytorch is just like numpy with tensors instead of ndarrays 2) that these tensors keep track of dependencies for us so we can evaluate derivatives of scalar tensors w.r.t tensors evaluated at the tensor’s value 3) build neural networks with this understanding of pytorch 4) teach torch nn.module which is basically a wrapper for this 5) teach torch sequential as an even higher level abstraction
    - We will also teach dataset basics
    - Idea: grade this by hiding ~5 truly random words that stick out, and have gradescope autograder questions where students simply input the words that were randomly scattered... forces people to hang on every word since you can’t cmd-f search for the words
    - Also mention that if they don’t pay attention to this assignment, they won’t understand any assignments after this and if they do pay attention, assignments after this will be a breeze
- Gradescope MCQ on more advanced deep learning
- Possible 3B1B lectures 3-4

# Module Links

### Slide Deck Link

- [https://docs.google.com/presentation/d/1efe0OQSw7phIkdf2hzRKbCvl3PbYJJQMbJK9V25AYt8/edit#slide=id.p](https://docs.google.com/presentation/d/1efe0OQSw7phIkdf2hzRKbCvl3PbYJJQMbJK9V25AYt8/edit#slide=id.p)
- Resources for slide deck

[Google Docs - create and edit documents online, for free.](https://docs.google.com/document/d/1i09fNrb7hzSG_IyAgC_BFOqwtF2ikSVkJS-Q5CsMDXY/edit)

### Pre Lecture Links

- 3B1B videos with backprop (video 3)

### Post Lecture Links

- **Put links to all documents, articles, videos, etc here

# Author Concern List

- Pop off at least momentum for the new proposed gradient descent module between deep learning 1 and deep learning 2 (couple with 3b1b video 2)
- Math requirements / chain rule (post decal: this is valid, but not gonna change anything tbh)