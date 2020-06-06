---
title: "Evidently"
summary: "Simulate Evidence Accumulation Models in Python"
tags:
- Python
- Computational modelling
slug: evidently
author: admin
weight: 1
date_string: ""
---

`Evidently` is a python package for working with evidence accumulation models.

In short, it lets you do things like this:

![](/post/evidently/schurger.gif)

You can [get the code on GitHub](https://github.com/EoinTravers/Evidently),
or see [this post](/post/evidently/) for more information.


It  provides

- Efficient functions for simulating data from a range of models.
- Classes that make it easier to tweak model parameters and manage simulated data.
- A consistent way to implement new models.
- Visualisation, including interactive widgets for Jupyter.
- Kernel density-based methods for estimating
  the likelihood of real data under a given model/set of parameters,
  allowing parameter estimation and model comparision.

To see some of the features of Evidently in action,
click the link below to launch a notebook packed full of interactive visualisations.

[![Launch Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/EoinTravers/Evidently/master?filepath=dashboards%2FInteractive%20Models.ipynb)
