**Imitation learning** is training a neural network to imitate an expert performing a complex control task.


## Strategy
Imitation learning requires gathering state-action pairs from expert demonstration $\left\\{\left(s\_t^{(i)}, a\_t\^{(i)}\right)\_{t=1}^T\right\\}_{i=1}^N$

where 

- $s_t^{(i)}$ is the state in step $t$ of the $i$th trajectory, 
- $a_t^{(i)}$ is the action in step $t$ of the $i$th trajectory, 
- $T$ is the max number of timesteps per demonstration, and 
- $N$ is the number of demonstration.

## Use Cases
Imitation learning works in
- discrete and continuous state spaces
- discrete and continuous action spaces

## Algorithm

Imitation Learning
**Parameters**: 

- Number of total steps $T$
- Replay Buffer capacity $N$
- Learning rate

**Algorithm**:

> Initialize expert dataset $\mathcal{D} = \left\\{\left(s\_t^{(i)}, a\_t\^{(i)}\right)\_{t=1}^T\right\\}_{i=1}\^N$

> Initialize policy NN $\pi_\theta:S\to A$ with random weights $\theta$\
> **for** $\left(s_t^{(i)}, a_t^{(i)}\right)\in \mathcal{D}$ **do**:\
> $\qquad$ Set our loss to $L(\theta) = \sum_{j} \left(a_t^{(i)} - \pi_\theta\left(s_t^{(i)}\right)\right)^2$\
> $\qquad$ Perform gradient descent on $L$ to update $\theta$

