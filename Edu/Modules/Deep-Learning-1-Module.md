# Deep Learning 1

# Module Dependencies

Strong Dependencies:

- [[Intro-ML-Module]]test

Weak Dependencies:

- None

# Module Overview

This is the intro to deep learning module, where we teach the forward pass of a neural network basically and an intro to gradient descent where we give a non-rigorous notion of taking partial derivatives of the loss with respect to parameters individually (don’t immediately introduce any notion of backpropagation as that may confuse people learning about gradient descent and give a notion that you update the network from back to front, when in reality, all parameters get updated at once)
The way we make this idea of partial derivatives w.r.t parameters clear is by reiterating that a neural network is just like any other vector function of a vector x, and scalar parameters, that can be written in a notation you’ve already seen before in vector calc.
We will teach all of this by slowly interleaving in the matrix notation as opposed to jumping straight to it.

# Slide Outline

- Math review (3 slides at most... 5 minutes) (remove if math prerequisites are hard enforced):
    - The purpose of these slides would be to prevent students from panicking when they see neural networks
    - Review vector function notation f(vector_x, parameter)=scalar
        - Give an example of a vector function
    - Talk about partial derivatives of f(x, params) w.r.t. parameter
        - Try and emphasize that with a scalar function, you can always take partial derivatives of the output with respect to any portion of the input
    - review matrix multiplication with a vector as a bunch of stacked dot products with the input vector
- Universal function approximator (really short)
    - Note: We won’t be citing any proofs here for that neural networks can approximate any function with arbitrary closeness, this isn’t a technical slide in any way, just a motivating slide on that we want some sort of class of model that can do all kinds of things
    - We have all kinds of problems: classification, regression, and often times the kinds of boundaries, the kinds of lines we regress on are complex and nonlinear
    - What if there was some kind of form of function that could be used to do all of these things almost straight out of the box?
- **Easiest to do an L2 regression / classification problem going forward... probably MNIST from here on out**
    - Could also go with housing prices, since L2 regression is even simpler to write out
    - I’d like to be able to write out the entire loss function (including the matrix multiplication that gets us to our predictions) all on one equation on one slide
- Motivate the graph view with biological connection (make sure to asterisk the connection and say that what we’re about to do isn’t the way the brain totally works, so don’t get baited into taking a semester of cogsci) (one slide)
    - Talk about inspiration from human brain / neurons
    - Brain is able to do a ton of different things, tons of tasks despite being all one function
- Graph view of a neural network (10-15 min)
    - Show one neuron’s output of one layer of a neural network, with the activation function
    - Cascade and show a bunch of layers of a neural network all stacked, for one hidden layer
    - Show a bunch of layers all after each other
    - Do a basic classification example, to help motivate softmax
- Talk about matrix representation (10 min)
    - Go through the same process as with the graph view of the neural network, just to make sure that the rhythm is the same and people feel more comfortable
    - Show one neuron’s output as a vector dot product
    - Show a bunch of stacked vector dot products
    - Show as matrix multiplication, with the ReLU
    - Write the whole thing out as a function on one massive slide, loss function included (helps that it will be L2 loss)
    - Show a GIF of the 3B1B (I think in the first video) video where this is explained, just to reiterate the idea
    - Make sure to ask the question of why we need activation functions here
- Case study: neural networks for classification (5 min)
    - We want to bring back the idea of decision boundaries and show that a neural network is capable of doing nonlinear decision boundaries
    - Brian had a good video he wanted to use to illustrate this point
- Talking about gradient w.r.t parameters (10 min)
    - Talk about what a gradient is: basically just a list of the partial derivatives w.r.t each component of an input
        - Note: when moving in each direction by the amount specified by each partial derivative in the list (scaled by some constant), we descend the quickest down a hill
            - Intuition for the proof is in the works
        - Ask how changing step size matters
        - Ask about local minima here
    - We can take this list of partials of loss w.r.t parameters and do the same thing for our network... taking steps down the hill that is our loss function
    - Ask about local minima
    - Batching / SGD with minibatches
    - [This](https://playground.tensorflow.org/#activation=tanh&batchSize=10&dataset=circle&regDataset=reg-plane&learningRate=0.03&regularizationRate=0&noise=0&networkShape=4,2&seed=0.94112&showTestData=false&discretize=false&percTrainData=50&x=true&y=true&xTimesY=false&xSquared=false&ySquared=false&cosX=false&sinX=false&cosY=false&sinY=false&collectStats=false&problem=classification&initZero=false&hideText=false) link has a good playground for people to see this in action
- Probably talk about overtraining (one slide)
    - Neural networks hard black boxes... we have no guarantees of generalization or that generalization will continue to improve with epochs
        - In some cases, the network may begin to try and memorize training examples, and in other cases, it might not
    - Checkpoint your models frequently to save progress and be able to go back to earlier epochs
- Whirlwind tour of the following (10 min):
    - Activation functions (since by now we’ve already talked about why we need them)
    - Loss functions (brought up in the first lecture, we just need to motivate why maybe choice of loss function is important to what we learn)
        - Maybe we can use this to introduce regularization for neural networks
            - Used to combat overfitting/memorization by constraining the weights a little bit
            - If we have the choice between memorizing a single example and getting a lower weight score for multiple examples, we will choose the latter
    - [Deep double descent](https://openai.com/blog/deep-double-descent/#:~:text=Many%20classes%20of%20modern%20deep,to%20fit%20the%20training%20set.)
        - Lots of theory, it’s a hard problem
        - Happens with more data, more parameters, more time

# Assignment Outline

### Pre Lecture Content

- Probably the first (and only first) [3B1B lecture](https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=1&t=846s) on deep learning, with the intent that they come to class with some confusion still
- Basic math review in addition to general pre-requisites?
    - Either this OR 3B1B lecture 1 for sure

### Post Lecture Content

- 3B1B lectures 1-2
- MCQ / written questions on deep learning basics like gradient descent, etc

# Module Links

### Slide Deck Link

- [https://docs.google.com/presentation/d/1Wt8J0cELjdxOdnzTaqRs4kECB1fKD6y84jB4jfd89BI/edit#slide=id.g11d5135d05e_0_251](https://docs.google.com/presentation/d/1Wt8J0cELjdxOdnzTaqRs4kECB1fKD6y84jB4jfd89BI/edit#slide=id.g11d5135d05e_0_251)

### Pre Lecture Links

- 

### Post Lecture Links

- [https://playground.tensorflow.org/](https://playground.tensorflow.org/)
    - Make students upload a picture of their best training on a certain dataset
- 

# Author Concern List

- **Math review**
    - If people aren’t comfortable with vector functions or matrix multiplication or vector dot product, they will panic when they see the slides where we talk about each layer being a matrix multiplication operation... so if we don’t have these slides, we need to hard enforce the Math for ML prerequisites listed here with an assignment or guided readings and a chance for students to connect with course staff before this lecture on the content:
        
        [General ML Prerequisites](https://www.notion.so/General-ML-Prerequisites-9149b138091840378a21c224bc5f3f08)
        
    - Using GIFs from the 3B1B video to show matrix multiplication as the same as the graph view will get us far, but it still isn’t a help if people don’t understand that matrix multiplication is just stacked vector dot products / inner products
    - I’d rather cut the math review slides down to a bare minimum just to jog people’s memory AND hard enforce pre-requisites, creating a gradescope assignment for the math for ML pre-requisites to be done before the course starts, due like right after the first lecture