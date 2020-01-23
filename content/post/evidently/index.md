---
title: "Evidently: Simulate Evidence Accumulation Models in Python"
date: "2020-01-23"
source: "jupyter"
---


I've just put the finishing touches on version 0.0.1 of `Evidently` 
is a python package for working with evidence accumulation models.

In short, it lets you do things like this:

![](schurger.gif)

Since I spent all that time writing a Read Me page for the 
[GitHub repository](https://github.com/EoinTravers/Evidently),
I've reproduced it below.

## Evidently 

Evidently  provides

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

## Installation

Evidently isn't on PyPI yet, but you can install it directly from GitHub:

`pip install git+https://github.com/EoinTravers/Evidently`

## Basic Use


```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import evidently
```

## Set up a model and provide parameters


```python
model = evidently.models.Diffusion(pars=[1., .5, -.25, .8, .4], max_time=5., dt=.001)
model
```




    Classic Drift Diffusion Model
    Parameters: [t0 = 1.00, v = 0.50, z = -0.25, a = 0.80, c = 0.40]




```python
model.describe_parameters()
```

    Parameters for Classic Drift Diffusion Model:
    - t0   : 1.00  ~ Non-decision time
    - v    : 0.50  ~ Drift rate
    - z    : -0.25 ~ Starting point
    - a    : 0.80  ~ Threshold (±)
    - c    : 0.40  ~ Noise SD


## Simulate data


```python
X, responses, rts = model.do_dataset(n=1000)
```


```python
X.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0.000</th>
      <th>0.001</th>
      <th>0.002</th>
      <th>0.003</th>
      <th>0.004</th>
      <th>0.005</th>
      <th>0.006</th>
      <th>0.007</th>
      <th>0.008</th>
      <th>0.009</th>
      <th>...</th>
      <th>4.990</th>
      <th>4.991</th>
      <th>4.992</th>
      <th>4.993</th>
      <th>4.994</th>
      <th>4.995</th>
      <th>4.996</th>
      <th>4.997</th>
      <th>4.998</th>
      <th>4.999</th>
    </tr>
    <tr>
      <th>sim</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>-0.192354</td>
      <td>-0.201143</td>
      <td>-0.208836</td>
      <td>-0.204320</td>
      <td>-0.207231</td>
      <td>-0.199757</td>
      <td>-0.219533</td>
      <td>-0.219124</td>
      <td>-0.199652</td>
      <td>-0.207805</td>
      <td>...</td>
      <td>2.763691</td>
      <td>2.741891</td>
      <td>2.733881</td>
      <td>2.742700</td>
      <td>2.737895</td>
      <td>2.729598</td>
      <td>2.725174</td>
      <td>2.725671</td>
      <td>2.718402</td>
      <td>2.707531</td>
    </tr>
    <tr>
      <th>1</th>
      <td>-0.212889</td>
      <td>-0.205668</td>
      <td>-0.205660</td>
      <td>-0.216364</td>
      <td>-0.200576</td>
      <td>-0.201968</td>
      <td>-0.199373</td>
      <td>-0.209540</td>
      <td>-0.223108</td>
      <td>-0.197078</td>
      <td>...</td>
      <td>1.503411</td>
      <td>1.486841</td>
      <td>1.520451</td>
      <td>1.521432</td>
      <td>1.515549</td>
      <td>1.527282</td>
      <td>1.517151</td>
      <td>1.514873</td>
      <td>1.517109</td>
      <td>1.519113</td>
    </tr>
    <tr>
      <th>2</th>
      <td>-0.204728</td>
      <td>-0.210587</td>
      <td>-0.226247</td>
      <td>-0.235183</td>
      <td>-0.213923</td>
      <td>-0.214985</td>
      <td>-0.213774</td>
      <td>-0.223074</td>
      <td>-0.216801</td>
      <td>-0.193571</td>
      <td>...</td>
      <td>1.924126</td>
      <td>1.919724</td>
      <td>1.935780</td>
      <td>1.940911</td>
      <td>1.944310</td>
      <td>1.927224</td>
      <td>1.922971</td>
      <td>1.922948</td>
      <td>1.930961</td>
      <td>1.926075</td>
    </tr>
    <tr>
      <th>3</th>
      <td>-0.198248</td>
      <td>-0.201550</td>
      <td>-0.204297</td>
      <td>-0.206705</td>
      <td>-0.191778</td>
      <td>-0.192469</td>
      <td>-0.177285</td>
      <td>-0.166366</td>
      <td>-0.185312</td>
      <td>-0.202457</td>
      <td>...</td>
      <td>1.616028</td>
      <td>1.620048</td>
      <td>1.620442</td>
      <td>1.620271</td>
      <td>1.612564</td>
      <td>1.607041</td>
      <td>1.602230</td>
      <td>1.591795</td>
      <td>1.583361</td>
      <td>1.576891</td>
    </tr>
    <tr>
      <th>4</th>
      <td>-0.205766</td>
      <td>-0.210107</td>
      <td>-0.212783</td>
      <td>-0.199880</td>
      <td>-0.181656</td>
      <td>-0.168949</td>
      <td>-0.157304</td>
      <td>-0.148307</td>
      <td>-0.150816</td>
      <td>-0.164290</td>
      <td>...</td>
      <td>1.822556</td>
      <td>1.796974</td>
      <td>1.802952</td>
      <td>1.801410</td>
      <td>1.770130</td>
      <td>1.780916</td>
      <td>1.782387</td>
      <td>1.793086</td>
      <td>1.773440</td>
      <td>1.776159</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 5000 columns</p>
</div>




```python
print(responses[:5]) 
print(rts[:5])
```

    [ 1. -1.  1.  1.  1.]
    [2.906 0.653 3.199 3.443 1.629]


## Visualise

The `evidently.viz` submodule contains a collection of `matplotlib`-based functions for visualising model simulations. Here are a few examples.


```python
ax = evidently.viz.setup_ddm_plot(model) # Uses model info to draw bounds.
evidently.viz.plot_trace_mean(model, X, ax=ax); # Plots simulations
```


![png](./index_13_0.png)



```python
ax = evidently.viz.setup_ddm_plot(model)
evidently.viz.plot_traces(model, X, responses, rts, ax=ax, 
                          terminate=True, show_mean=True); # Show raw data
```

    /home/eoin/miniconda3/lib/python3.7/site-packages/evidently/viz.py:162: RuntimeWarning: invalid value encountered in greater
      X.iloc[i, t > rt] = np.nan



![png](./index_14_1.png)



```python
ax = evidently.viz.setup_ddm_plot(model)
for resp in [1, -1]:
    mask = (responses == resp) # Split by response
    evidently.viz.plot_trace_mean(model, X[mask], ax=ax, label='Response: %i' % resp)
plt.legend();
```


![png](./index_15_0.png)



```python
mX = evidently.utils.lock_to_movement(X, rts, duration=2) # Time-lock to threshold crossing
ax = evidently.viz.setup_ddm_plot(model, time_range=(-2, 0))
evidently.viz.plot_traces(model, mX, responses, rts, ax=ax, show_mean=True);
```


![png](./index_16_0.png)



```python
ax = evidently.viz.setup_ddm_plot(model, time_range=(-2, 0))
for resp in [1, -1]:
    mask = responses == resp
    resp_mX = evidently.utils.lock_to_movement(X[mask], rts[mask])
    evidently.viz.plot_trace_mean(model, resp_mX, ax=ax, label='Response: %i' % resp)
plt.legend();
```


![png](./index_17_0.png)


There high-level functions can create multi-axis figures.


```python
evidently.viz.visualise_model(model, model_type='ddm', measure='means');
```


![png](./index_19_0.png)


## Interactive Visualisation

Using the `ipywidgets` package, we can wrap high level visualisation functions like `accum.viz.visualise_ddm` in a call to `ipywidgets` to make them interactive.

To try the interactive plots, download this repository to your own computer,
or run the code in the cloud by visiting [this Binder notebook](https://mybinder.org/v2/gh/EoinTravers/Evidently/master?filepath=dashboards%2FInteractive%20Models.ipynb).

[![Launch Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/EoinTravers/Evidently/master?filepath=dashboards%2FInteractive%20Models.ipynb)


```python
from ipywidgets import interact, FloatSlider
def fs(v, low, high, step, desc=''):
    return FloatSlider(value=v, min=low, max=high, step=step, description=desc, continuous_update=False)

def ddm_simulation_plot(t0=1., v=.5, z=0., a=.5, c=.1):
    model = evidently.Diffusion(pars=[t0, v, z, a, c])
    evidently.viz.visualise_model(model)
    title = 't0 = %.1f, Drift = %.1f, Bias = %.1f, Threshold = %.1f; Noise SD = %.1f' % (t0, v, z, a, c)
    plt.suptitle(title, y=1.01)

interact(ddm_simulation_plot,
         t0  = fs(1., 0, 2., .1,   't0'),
         v   = fs(.5, 0, 2., .1,   'Drift'),
         z   = fs(0., -1., 1., .1,  'Bias'),
         a     = fs(.5, 0., 2., .1,   'Threshold'),
         c   = fs(.1, 0., 1., .1,   'Noise SD'));
```


![png](./index_21_0.png)


<!-- This will work once we run gen_readme.sh -->

Here's the interactive output in GIF form:

![](ddm.gif)

# Other Models

The following model classes are currently available:

- Diffusion
- Wald
- HDiffision (Hierarchical Diffusion)
- HWald (Hierarchical Wald)
- Race

See the [API](http://eointravers.com/code/evidently/api.html) for more details.

# Road Map


## More Models!

I have already implemented several of these models, but have to integrate them with the rest of the package.

- Leaky Competing Accumulator model.
- LCA/Race models with > 2 options.
- Leaky/unstable Diffusion.
- Time-varying parameters, including
    - Collapsing decision bounds
    - Time-varying evidence
- Hierarchical models with regressors that differ across trials.

## Reparameterisation

Ideally, parameterisation with other packages used for fitting accumulator models 
such as [HDDM](http://ski.clps.brown.edu/hddm_docs/) and
[PyDDM](https://pyddm.readthedocs.io/en/latest/), (for Python) 
and [rtdists](https://github.com/rtdists/rtdists) and 
[DMC](http://www.tascl.org/dmc.html) (for R). 
This would make it possible to efficiently fit models using those packages, 
then explore their dynamics here.

Model probably should also specify default parameters.

##  Visualisation

There's no shortage of ways to visualise accumulator models. 
Future versions will include both more low-level plotting functions
and high-level wrappers.

I'll also be implementing vector field plots, e.g. Figure 2 of 
[Bogacz et al. (2007)](https://people.socsci.tau.ac.il/mu/usherlab/files/2014/03/m2.pdf).

## Likelihood


The `evidently.likelihood` model contains functions for estimating 
the likelihood of data $x$ under parameters $\theta$ and model $M$,
based on the "likelihood-free" technique introduced by 
[Turner and Sederberg (2007)](https://link.springer.com/article/10.3758/s13423-013-0530-0).
These functions aren't properly tested yet,
and haven't been documented.


