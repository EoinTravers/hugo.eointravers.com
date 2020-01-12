---
title: Linear Mixed Models Resources
date: "2019-04-16"
category:
tags:
slug: lmm-links
author: admin
summary: Some barely curated links to modelling resources.
share: true  # Show social sharing links?
profile: false  # Show author profile?
comments: true  # Show comments?

# Optional header image (relative to `static/img/` folder).
header:
  caption: ""
  image: ""
---


Next month, I'll be travelling back to Queen's University Belfast, my
old department, to give a two-day workshop on linear mixed models.
I spent some time this morning putting together some pre-workshop material for attendees.
Afterwards I realised some of these links might come in useful for others at some point along the way, so here they are!

The workshop will be based around a handful of commonly used resources.

We'll be using the statistical language R
(<https://www.r-project.org/),> with the RStudio editor
(<https://www.rstudio.com/)> throughout. In R, we'll mostly be using the
dplyr package for data manipulation, ggplot2 for visualisation, and
lme4 for model fitting. Most of the packages needed are part of the
'tidyverse' (<https://www.tidyverse.org/)> which, I suggest you check
out before the workshop. If time allows, we'll also look at using the
brms package (<https://github.com/paul-buerkner/brms)> to fit Bayesian
multilevel models. brms can be a little tricky to install on Windows
computers, and Bayesian models are slow to fit, so we won't try to
actually fit these models during the workshop. However, this is one of
the most powerful statistical tools to come out in recent years, and
is well worth checking out.

I don't know yet whether computers will be provided, or if it will be
necessary to bring your own. In any case, you'll want to install R,
RStudio, and the packages mentioned above on your own computer. All of
these tools are free and open source, and can be installed on
university computers without administrative access.

Most of the workshop content will be based around the book Advanced
Regression Modelling, by Andrew Gelman and Jennifer Hill (ARM;
<http://www.stat.columbia.edu/~gelman/arm/).> This is a fairly
substantial text, and is one of the most useful statistics resources
around. It's also possible to find electronic copies of this book
through the library, or through Google. ARM is a little old, but it is
possible to find draft content from the updated version, Regression
and Other Stories, at <http://www.stat.columbia.edu/~gelman/regression/>

ARM is not aimed specifically at psychologists or cognitive
scientists, although it does include a few good examples from our
field. For this reason, I'll be going through some additional material
from my own experience, or from other sources. Jake Westfall has saved
me quite a lot of effort by putting together a list of some of these
resources back in 2015, at
<http://jakewestfall.org/blog/index.php/2015/06/20/reading-list-introduction-to-linear-mixed-models-for-cognitive-scientists/.>
Some of these resources are a little out of date, but it still makes
for a useful starting point. Westfall's blog itself is also excellent,
and worth reading.

Other useful resources include

- The introduction for the lme4 package
  (<https://cran.r-project.org/web/packages/lme4/vignettes/lmer.pdf)>
- Matti Vuorre's excellent tutorials on advanced multilevel models,
  with a focus on Bayesian methods
  (<https://vuorre.netlify.com/tags/tutorial/)>
- Bodo Winter's introduction to mixed models
  (<http://www.bodowinter.com/tutorials.html)>
- Henrik Sigmann and David Kellen's excellent tutorial chapter
  (<https://cran.r-project.org/web/packages/afex/vignettes/introduction-mixed-models.pdf).>
  Sigmann is also the author of the afex (Analysis of Factorial
  EXperiments; <https://afex.singmann.science/)> package for R, which is
  also extremely useful. I've just discovered that the afex website
  also has a forum on mixed models, which could be of use. He has also
  posted materials from a recent workshop on a similar topic to this
  one, which look useful!
  (<https://github.com/singmann/mixed_model_workshop_2day)>

Also

- This twitter thread:
  <https://twitter.com/JohnSakaluk/status/1101639130050486272>
- Andrew Gelman's blog: <https://statmodeling.stat.columbia.edu/>
- Sanjay Srivastava's blog (<https://thehardestscience.com/),> starting
  with
  <https://thehardestscience.com/2016/08/11/everything-is-fucked-the-syllabus/>
- <https://rpsychologist.com/tag/linear-mixed-effects-models>
- <https://neuropsychology.github.io/psycho.R/2018/05/10/interpret_mixed_models.html>
- Some twitter accounts I've found useful:
  [@dataandme](https://twitter.com/dataandme) [@paulbuerkner](https://twitter.com/paulbuerkner)
  [@robinson_es](https://twitter.com/robinson_es) [@HenrikSingmann](https://twitter.com/HenrikSingmann)
  [@vuorre](https://twitter.com/vuorre) [@CookieSci](https://twitter.com/CookieSci)
  [#rstats](https://twitter.com/hashtag/rstats)
