---
title: "Fun Facts about Variance"
author: "admin"
date: '2020-02-20'
output:
  html_document:
    keep_md: yes
summary: "Some useful bits of information to make statistics make sense."
source: jupyter
toggle: "true"
---

You can't understand statistics without understanding variance.
Unfortunately, there are some important bits of information
about variance that I don't remember ever being taught as a whole.
I've put these tidbits together in one place
so you don't have to piece them together from textbooks and
[wikipedia](https://en.wikipedia.org/wiki/Variance).



# 1. Definitions

First, the basics.
These are thing you are taught as a student,
but it's worth saying them again.

## 1a. Variance, Standard Deviation, and Precision

Say $x$ is a sample of $n$ values,
where $x_i$ is the $i$th value:
$x = [x_1, x_2, ..., x_n]$.
The sample mean is $\mu = \frac{\sum_i^n x_i}{n}$
(that is, the sum of all the values, divided by the number of values).
We can also call this the **expectation** or **expected value** of $x$, $E(x)$,
but don't confuse this with expected value in decision-making, which is slightly different.

The sample variance, $\sigma^2$, 
is the average squared distance between each value and the sample mean.

$$
\sigma^2_x = \frac{\sum_i^n (x_i - \mu)^2}{n}
$$


Sample **standard deviation**, $\sigma$ is the square root of the sample variance.
This is simple, but also easy to say the wrong way around, 
so let's write it down.

$$
\begin{align} 
                   \sigma =& \sqrt{\sigma^2};\\\\
\text{Standard deviation} =& \sqrt{\text{Variance}};
\end{align}
$$

We can also talk about the *precision*, $\lambda$, which is just 1 divided by the variance.

$$\lambda = \frac{1}{\sigma^2}$$

This is particularly useful in Bayesian statistics, and we'll come back to it later.

## 1b. Sample vs Population Variance

For reasons that I won't fully explain here
(but see [wikipedia](https://en.wikipedia.org/wiki/Variance#Sample_variance)),
our best estimate of the variance of the population that $x$ was sampled from 
isn't actually $\frac{\sum_i^n (x_i - \mu)^2}{n}$
but $\frac{\sum_i^n (x_i - \mu)^2}{n-1}$.
The corresponding population standard deviation is
$\sqrt{\frac{\sum_i^n (x_i - \mu)^2}{n-1}}$.

Software like R and numpy will give you the population estimate, using $n-1$,
rather than the sample estimate by default.
This is usually what you want, but make sure it doesn't catch you out!


```r
suppressPackageStartupMessages( library(tidyverse))
suppressPackageStartupMessages( library(glue)     )
theme_set(cowplot::theme_cowplot(font_size=18))
x = c(1,2,3,4,5)
pop.var    = function(x) sum((x - mean(x))^2) / (length(x)-1) # Replicates built-in var(x)
sample.var = function(x) sum((x - mean(x))^2) /  length(x)    # Our function
pop.sd     = function(x) sqrt(pop.var(x))
sample.sd  = function(x) sqrt(sample.var(x))
var(x) # Built-in function
## [1] 2.5
pop.var(x)
## [1] 2.5
sample.var(x)
## [1] 2
sd(x)
## [1] 1.581139
pop.sd(x)
## [1] 1.581139
sample.sd(x)
## [1] 1.414214
```



## 1c. Covariance and Correlation

Covariance measures the relationship between two variables,
which we'll call $x$ and $y$.
First, note that we can write the variance of $x$ as

$$
\sigma_x^2 = \frac{\sum_i^n (x_i - E(x))^2}{n}
= \frac{\sum_i^n [(x_i - E(x))(x_i - E(x))]}{n}
$$

The **covariance** between $x$ and $y$ is very similar

$$
cov(x, y) = \sigma_{x,y} 
= \frac{\sum_i^n [(x_i - E(x))(y_i - E(y))]}{n}
$$

In word:
*for each pair of points $[x_i, y_i]$ in $[x, y]$, 
find the distance of each point from the mean, multiply them together,
and then take the average of this across all points*.
This works because
if both $x_i$ and $y_i$ are both higher or both lower than average,
$(x_i - E(x))(y_i - E(y))$ will be positive
If one is higher and one lower, it will be negative.

Since covariance depends on the variance of $x$ and $y$, it's useful to standardise it
by dividing by $sd(x) \times sd(y)$.
This is the **correlation coefficient**.

$$
cor(x, y) = \rho_{xy} = \frac{cov(x, y)}{sd(x)sd(y)} 
= \frac{\sigma_{x,y}}{\sigma_x \sigma_y}
$$

Here's an example:


```r
n = 5
x = c(-2, -1, 0, 1, 2)
y = x
mx = mean(x)
my = mean(y)
(xy.products = (x - mx)*(y - my))
## [1] 4 1 0 1 4
(xy.covariance = mean(xy.products))
## [1] 2
# Note we use the sample SD, not the population SD estimate (see above)
(xy.correlation = (xy.covariance / (sample.sd(x) * sample.sd(y))))
## [1] 1
```

We can flip this around to show that 

$$
\begin{align} 
cov(x, y) =& cor(x, y) \times sd(x) \times sd(y);\\\\
\sigma_{x,y} =& \rho_{xy}\sigma_x\sigma_y;
\end{align}
$$

## Covariance Matrices

If we have a collection of variables, $D = [x, y, z]$,
we can put all this together to calculate the *covariance matrix*, $\bf{\Sigma}$.
In this, the diagonal elements are just the variances of each variable,
$\bf{\Sigma_{i,i}} = \sigma^2_i$

$$
\begin{bmatrix}
\sigma^2_x, -, - \\\\
-, \sigma^2_y, - \\\\
-, -, \sigma^2_z \\\\
\end{bmatrix}
$$

while the off-diagonal elements are the covariances between different variables,
$\bf{\Sigma_{i,j}} = \sigma_{ij} = \rho_{ij}\sigma_i\sigma_j$

$$
\begin{bmatrix}
-, \sigma_{xy}, \sigma_{xz} \\\\
\sigma_{yx}, -, \sigma_{yz} \\\\
\sigma_{zx}, \sigma_{zy}, - \\\\
\end{bmatrix}
$$

Putting this together, you get

$$
\bf{\Sigma} = 
\begin{bmatrix}
\sigma^2_x, \sigma_{xy}, \sigma_{xz} \\\\
\sigma_{yx}, \sigma^2_y, \sigma_{yz} \\\\
\sigma_{zx}, \sigma_{zy}, \sigma^2_z  \\\\
\end{bmatrix}
$$

Phew.

You can use a covariance matrix to do stuff,
but that's beyond the scope of this post.

# 2. Fun Facts

# 2a. Variance is Additive

This one is useful.
If the variance of $x$ is $\sigma^2_x$
and the variance of $y$ is $\sigma^2_y$,
and $x$ and $y$ are uncorrelated,
the variance of $x+y$ and of $x-y$ is $\sigma^2_x + \sigma^2_y$.

$$\sigma^2_{x+y} = \sigma^2_{x} + \sigma^2_{y}$$

Note that $x + y = [x_1 + y_1, x_2 + y_2, ..., x_n + y_n]$, etc.

Here's a demonstration.


```r
sample.with.variance = function(v, n=100){
  x =   MASS::mvrnorm(n=1000, mu=c(0), Sigma=matrix(v), empirical=T)
  return(c(x))
}
sample.with.correlation = function(var1, var2, corr=0, n=100){
  # Draw random 2D samples with given variances and correlation
  sd1 = sqrt(var1)
  sd2 = sqrt(var2)
  cov.matrix = matrix(c(var1, corr*sd1*sd2, corr*sd2*sd1, var2), nrow = 2)
  res = MASS::mvrnorm(n=n, mu=c(0, 0), Sigma=cov.matrix, empirical = T) %>% data.frame()
  names(res) = c('x', 'y')
  res
}

do.example = function(var1, var2, corr){
  xy = sample.with.correlation(var1=5, var2=6, corr=corr)
  x = xy$x
  y = xy$y
  glue::glue('Var(x) = {var(x)}') %>% print()
  glue::glue('Var(y) = {var(y)}') %>% print()
  glue::glue('cor(x, y) = {cor(x, y) %>% round(2)}') %>% print()
  glue::glue('Var(x + y) = {var(x + y) %>% round(2) }') %>% print()
  glue::glue('Var(x - y) = {var(x - y) %>% round(2)}') %>% print()
  cat('\n')
}

do.example(var1=5, var2=6, corr=0)
## Var(x) = 5
## Var(y) = 6
## cor(x, y) = 0
## Var(x + y) = 11
## Var(x - y) = 11
```

If the two samples are correlated, the formula is a little more complicated.
If $x$ and $y$ are positively correlated, 
so that large values of $x$ tend to be paired with large values of $y$,
adding them together makes the variance even greater:

$$
\sigma^2_{x+y} = \sigma^2_{x} + \sigma^2_{y} + 2\sigma_{x, y};\\\\
$$
(remember, $\sigma_{x, y} = covariance(x, y)$).



```r
do.example(var1=5, var2=6, corr=+.5)
## Var(x) = 5
## Var(y) = 6
## cor(x, y) = 0.5
## Var(x + y) = 16.48
## Var(x - y) = 5.52
```

If they are negatively correlated,
so large values of $x$ tend to be paired with small values of $y$,
they tend to cancel out when you add them together, and the variance shrinks:


```r
do.example(var1=5, var2=6, corr=-.5)
## Var(x) = 5
## Var(y) = 6
## cor(x, y) = -0.5
## Var(x + y) = 5.52
## Var(x - y) = 16.48
```

If you're subtracting rather than adding, the rule is the other way around

$$
\sigma^2_{x-y} = \sigma^2_{x} + \sigma^2_{y} - 2 \times cov(x, y);
$$

## 2b. Adding Standard Deviations

All of this means that the standard deviation of $x+y$ is

$$
\begin{align} 
SD(x+y)
=& \sigma_{x+y}\\\\
=& \sqrt{\sigma^2_{x+y}}\\\\
=& \sqrt{\sigma^2_{x} + \sigma^2_{y} + 2 \times cov(x, y)};
\end{align}
$$

When $x$ and $y$ are uncorrelated, this is just

$$
\sigma_{x+y} = \sqrt{\sigma^2_{x+y}} = \sqrt{\sigma^2_{x} + \sigma^2_{y}};
$$

This looks familiar. Remember Pythagoras' theorem?

<img src="http://www.mathsisfun.com/geometry/images/pythagoras-abc.svg"/>

$$
c = \sqrt{a^2 + b^2}
$$

It turns out the reasons for this are kind of cool,
but beyond the scope of this post.
See [this paper](https://onlinelibrary.wiley.com/doi/full/10.1002/ets2.12018)
and [this stackexchange post](https://stats.stackexchange.com/questions/71620/law-of-total-variance-as-pythagorean-theorem) for more.



# 2c. Standard Deviations Multiply and Divide

The standard deviation of $x \times k$ is $k$ times the standard deviation of $x$:

$$
sd(k \times x) = \sigma_{kx} = k\times \sigma_x
$$

This means that the variance is

$$
var(k \times x) = \sigma^2_{kx} = (k\times \sigma_x)^2 = k^2 \times \sigma_x^2
$$

*If we multiply $x$ by $k$, we multiply its standard deviation by $k$, and it's variance by $k^2$*.

Division works in the same way:

$$
\begin{align}
sd(\frac{x}{k}) =& \sigma_{\frac{x}{k}} = \frac{\sigma_x}{k};\\\\
var(\frac{x}{k}) =& (\sigma_{\frac{x}{k}})^2 = (\frac{\sigma_x}{k})^2 = \frac{\sigma^2_x}{k^2};
\end{align}
$$

Here's the proof.


```r
x = sample.with.variance(9)
k = 4
# Standard deviations
sd(x)
## [1] 3
sd(x * k)
## [1] 12
k * sd(x)
## [1] 12
sd(x / k)
## [1] 0.75
sd(x) / k
## [1] 0.75
# Variances
var(x)
## [1] 9
var(k * x)
## [1] 144
k^2 * var(x)
## [1] 144
var(x / k)
## [1] 0.5625
var(x) / k^2
## [1] 0.5625
```

# 2d. Averaging reduces Variance

The average of $x$ and $y$ is $\frac{x+y}{2}$.
If $x$ and $y$ are uncorrelated, the variance of the average is 

$$
\sigma^2_{Mean(x,y)} = \sigma^2_{\frac{x+y}{2}} = \dfrac{\sigma^2_x + \sigma^2_y}{2^2}
$$

and the standard deviation is

$$
\sigma_{Mean(x,y)}
= \sigma_{\frac{x+y}{2}}
= \sqrt{\sigma^2_{\frac{x+y}{2}}}
= \dfrac{\sqrt{\sigma^2_x + \sigma^2_y}}{2}
$$


If $\sigma^2 = \sigma^2_x = \sigma^2_y$, this simplifies to

$$
\begin{align}
\sigma^2_{Mean(x,y)} =& \dfrac{2\sigma^2_x}{2^2} = \frac{1}{2}\sigma^2_x; \\\\
\sigma_{Mean(x,y)}   =& \sqrt{\frac{1}{2}\sigma^2_x} = \frac{1}{\sqrt{2}}\sigma_x; \\\\
\end{align}
$$

In other words, 
*when you average two variables together, you half the variance, or divide the standard deviation by*
$\sqrt{2}$.

If $x$ and $y$ are correlated, as before
$\sigma^2_{\frac{x+y}{2}} = \frac{\sigma^2_x + \sigma^2_y + 2\times \sigma_{x,y}}{2^2}$
and
$\sigma_{\frac{x+y}{2}} = \frac{\sqrt{\sigma^2_x + \sigma^2_y + 2\times \sigma_{x,y}}}{2}$,
but let's not worry about that too much.



```r
xy = sample.with.correlation(16, 16, 0)
x = xy$x
y = xy$y
mean.xy = (x+y)/2

var(x)
## [1] 16
var(y)
## [1] 16
var(mean.xy)
## [1] 8
sd(x)
## [1] 4
sd(y)
## [1] 4
sd(mean.xy)
## [1] 2.828427
sd(x) / sqrt(2)
## [1] 2.828427
```

# 3. Variance and Uncertainty

Variance is also used as a measure of uncertainty.
In classical statistics, we can talk about the *variance of an estimate*,
which is the squared *standard error*.
In Bayesian statistics, we can talk about the *variance of a posterior distribution*
for a parameter.
In both cases, the higher the variance, the more uncertain we are.
It's often easier to use the precision, $\lambda = \frac{1}{\sigma^2}$:
the higher the precision, the more certain we are.
There is a lot we can do with these values, 
but I'm going to talk about how we combine estimates.

## 3a. Precision is Additive

If we average two estimates, $x$ and $y$,
the precision of the mean is the sum of the precision of the individual estimates:

$$
\lambda_{Mean(x, y)} = \lambda_x + \lambda_y
$$


```r
precision = function(x) 1 / var(x)
xy = sample.with.correlation(16, 16, 0)
x = xy$x
y = xy$y
mean.xy = (x+y)/2

precision(x)
## [1] 0.0625
precision(y)
## [1] 0.0625
precision(mean.xy)
## [1] 0.125
1 / var(mean.xy)
## [1] 0.125
```

## 3b. Precision-Weighting

If one estimate is more certain (has higher precision ) than the other,
you can do better than just averaging them together.
A better idea is to calculate a weighted-average,
giving more weight to the more certain estimate.
This **precision-weighting** is an important part of Bayesian inference.

If estimate $\hat\theta_1$ has variance $\lambda_1$,
and estimate $\hat\theta_2$ has variance $\lambda_2$,
their precision-weighted average is

$$
\hat\theta_{1\\&2} = \frac{\lambda_1\hat\theta_1 + \lambda_2\hat\theta_2}{\lambda_1 + \lambda_2}
$$

and the precision of this combined estimate is, as above, 

$$
\lambda_{1\\&2} = \lambda_1 + \lambda_2
$$

Neato.

# 4. Conclusions

So, at this point hopefully you know some useful things about variance you didn't know before now.
Otherwise, you've wasted about 10 minutes, and you'll never get them back.
There are a few other relevant topics I considered covering, but thought better of. 
I might cover these in a future post:

- ANOVA (Analysis of Variance): $\sigma^2_{Total} = \sigma^2_{Explained} + \sigma^2_{Unexplained}$.
- Variance and uncertainty of frequentist estimates.
- Working with samples from posterior distributions.
- Comparing and combining regression parameters (F-Contrasts).

