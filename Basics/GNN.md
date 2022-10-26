---
bibliography: "./Basics/basics.bib"
---

**Graph neural networks (GNN)**. Make sure you understand [[CNN]] first. 

A graph neural network operates on graphs as inputs. For a good introduction, check out @sanchez-lengeling2021a. At a high level, a GNN will output a graph of the same topology, and use that output to

- predict a property of the whole graph
- predict a property for each node
- predict a property for each edge

[[https://distill.pub/2021/gnn-intro/Overall.e3af58ab.png]]

The layers of a GNN take in a graph and output a graph of the same topology but with potentially different values in the nodes and edges. The graph embedding can then be used for a downstream task.

In the simplest architecture, we learn embeddings for each of these three attributes (we'll leave aside connectivity for now).

![](https://distill.pub/2021/gnn-intro/arch_independent.0efb8ae7.png)

If you want to do node prediction, then apply a classifier to each node embedding.

# Pooling

Pooling gives information from the edges to the nodes. That involves gathering the embeddings, then aggregating them.

---