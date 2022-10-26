---
bibliography: "./Basics/basics.bib"
---

**Graph neural network (GNN)** is a kind of extension to [[CNN]] that works on graphs as inputs. For a good introduction, check out @sanchez-lengeling2021a.

Given a graph, there are three kinds of tasks we may want to perform: predict a property for the whole graph, or for each node, or for each edge. In the simplest architecture, we learn embeddings for each of these three attributes (we'll leave aside connectivity for now).

![](https://distill.pub/2021/gnn-intro/arch_independent.0efb8ae7.png)

---