# Intro Pretraining

# Dependencies

Storng Dependencies:

- [[Deep-Learning-1-Module]]

Weak Dependencies

- [[Deep-Learning-2-Module]]

# Module Overview

Explains pretraining, transfer learning and some techniques

# Slide Outline

- Representation learning intro?
    - Neural network layers are learned representations
- Transfer learning
    - Representations can be transferred
    - Frozen feature extractors vs finetuning
    - Embeddings (latent space)
- Unsupervised methods
    - Supervised vs unsupervised learning
        - Self-supervised learning
        - Self-supervised representation learning
    - Rotnet
        - [https://arxiv.org/pdf/1803.07728.pdf](https://arxiv.org/pdf/1803.07728.pdf)
    - Jigsaw
        - [https://arxiv.org/pdf/1603.09246.pdf](https://arxiv.org/pdf/1603.09246.pdf)
    - Word2Vec
        - From cs 288 lecture
    - Wave2Vec
        - SSL for audio tasks
    - Masked LMs
    - BERT
        - Inspiration for MAE (covered in advanced pretraining)

# Assignment Outline

### Pre Lecture Content

- None

### Post Lecture Content

- Maybe a gradescope mcq (otherwise, nothing)

# Module Links

### Slide Deck Link

- [https://docs.google.com/presentation/d/1N2BAjqFkgdTvzTsiiqzV2ABdHFtTwr3_TkWyitmgaUY/edit#slide=id.p](https://docs.google.com/presentation/d/1PZKq7ohGHX01Gu6OmtTCS5B5uOOQ0CBVzt8AFmuehiY/edit?usp=sharing)

### Pre Lecture Links

- **Put links to all documents, articles, videos, etc here

### Post Lecture Links

- **Put links to all documents, articles, videos, etc here

# Author Concern List

- (Post-Decal jake comments): Cut bert, wavenet and replace with more explanations elsewhere. Phrase RotNet using MNIST not CIFAR/imagenet, but other than that, perfect in every way
- A little unclear about how the pretraining cluster is supposed to play out
- Some of the nlp stuff might not be very in depth unless the models/architectures are discussed as well, but would that be in a different lec?
- Did not include any classical techniques(assuming those go into the classical cluster)
- Dunno if this is long enough, if there are more things that could be covered, pls add.