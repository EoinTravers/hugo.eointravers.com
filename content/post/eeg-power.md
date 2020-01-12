---
title: "EEG Power Calculations: The State of the Art (According to Twitter)"
date: 2019-07-25
category:
tags:
slug: eeg-power
author: admin
summary: It's not great...
---

Last week, I asked:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Researchers: has anyone ever *ever* seen power calculations reported for an EEG experiment? I&#39;m not asking for a friend. (Tagging <a href="https://twitter.com/hashtag/rstats?src=hash&amp;ref_src=twsrc%5Etfw">#rstats</a> <a href="https://twitter.com/hashtag/sips2019?src=hash&amp;ref_src=twsrc%5Etfw">#sips2019</a> for visibility)</p>&mdash; Eoin Travers (@TraversEoin) <a href="https://twitter.com/TraversEoin/status/1148609348270284802?ref_src=twsrc%5Etfw">July 9, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I'm not just curious.
This is something we're trying to deal with in my own work,
and it turns out it's a big problem in general.

Here's what I learned.

## I'm not the only one with this problem

This tweet got some mileage. People agreed.
EEG studies rarely report power calculations, and we don't always know how to go about doing them.
This conclusion is also backed up by conversations with real people, in real life,
and by a cursory search through the literature.
EEG studies, by and large, do not report power calculations.
In fact, [Larson and Carbine (2017)](https://www.ncbi.nlm.nih.gov/pubmed/27373837)
checked 100 recent ERP studies in the literature,
and found that none (none!) included power calculations.

## Preregistration is changing things

A good proportion of papers that do  have a priori power calculations
also have preregistered analyses.
In preregistration, researchers have to pin down their design,
sampling plan, and analyses before they run their experiment.
I needn't go into all the pros and cons (mostly pros) of preregistration here,
but this is clearly a huge plus.
Not coincidentally, it also seems that you're much more likely
to see power calculations for papers published in Cortex than elsewhere.
Draw your own conclusions from this.

> ### Don't calculate post-hoc power
>
> This is probably a good time to mention that, despite what your reviewers might say,
> you should not do a post-hoc power calculation for the effect you did find in your data
> (see the bottom of the page for links to reasons why)

## But only for simple designs

Here, though, is where the big problems lie.
First, in almost
[ref]I'm hedging - I think it's all of them.[/ref]
every case of EEG power calculations I've seen,
the analysis has been fairly old-fashioned:
typically a mean ERP at some electrode is calculated for each participant in each cell of the design,
the amplitude of this ERP at a specified time is calculated
(or power at a given frequency, etc.),
and ANOVA or t test is run on these summary statistics.
Power calculations in these cases are straightforward.
It doesn't particularly matter if your data comes averaging EEG,
from mean response times, or from a single self-report question:
if you can reduce things down to a single value per participant per cell,
you can use all of the classical measures of effect size (Cohen's D, $\eta^2_p$, etc.),
and do a power calculation just like you were taught as a study (that is, with G-Power).
Unfortunately, this breaks down for more complicated analyses,
and while simple analyses are all alike, each complicated analyses is complicated in its own way.[ref]Sorry.[/ref]

### Single-trial analyses

First, there are the cases where we want to use (G)LMMs to analyse
how single-trial ERP amplitudes change as a function of some trial-by-trial predictors.
As above, once you've extracted the amplitudes on each trial,
it's no longer relevant that you're analysing EEG here.
The problem is that power analyses for complex multilevel designs is difficult in general.
On the bright side, it isn't impossible, and there are more and more tools and resources for doing this
(I've put together links to a few at the bottom of the page).

### Beyond peak amplitude: Cluster-based approaches

The second set of cases are those were we want to analyse the whole ERP over time, not just some peak amplitude.
This is particularly important in our work, where we're interested in slow components like the Readiness Potential.
This is most commonly done using non-parameteric cluster correction methods
(e.g. [Maris & Oostenveld, 2007](https://www.sciencedirect.com/science/article/pii/S0165027007001707))[ref]
I've recently found out about
[threshold free cluster enhancement](https://benediktehinger.de/blog/science/threshold-free-cluster-enhancement-explained/),
which looks very cool.
[/ref].
Here, as far as I can tell, we're in uncharted territory,
in that no one has come up with a general way of calculating effect sizes here, let along power.

> ### Lessons from fMRI
>
> As a side note, it looks like fMRI researchers face a similar problem.
> If you have a predefined ROI, and a simple design (e.g. 2x2 ANOVA),
> you can calculate $\beta$ maps for each participant and go ahead with classical effect size measures.
> [Mumford and Nichols (2008)](https://www.sciencedirect.com/science/article/pii/S1053811907007100)
> provide a way of dealing with more complicated designs when you have an ROI that looks interesting.
> What if you're using cluster correction (e.g. in SPM) to look for effects over the whole brain?
> Excitingly, [Burnez et al (BioRxiv)](https://www.biorxiv.org/content/10.1101/049429v1)
> seem to have come up with a solution, based on random field theory,
> and even provide a [toolbox](http://neuropowertools.org/neuropower/tutorial/) with a GUI
> to estimate power from pilot data.[ref]
>     Source code is on [github](https://github.com/neuropower).
>     Interestingly, the toolbox itself seems to be written in vanilla scientific python
>     (that is, numpy and scipy, but without depending on other neuroimaging tools like nipy),
>     and the [GUI](https://github.com/neuropower/neuropower-web) is written using python web tools.
>     [/ref]
> In principle, if something works for cluster-based fMRI analyses,
> where clusters are defined over three spatial dimensions (x, y, z),
> it should be possible to make it work for cluster-based EEG,
> where clusters are defined either in two spatial dimensions and over time (x, y, t),
> or over 2D space, time, and frequency band (x, y, t, f).
> I look forward to someone more intelligent than me working out how to make this work for EEG,
> or to someone pointing out that this already exists and I've missed it.
> I'm sure there's plenty more work on fMRI power calculation,
> but this isn't the place for it.

Back to what does exist for EEG.
One promising approach, highlighted by [Manuela Ruzzoli](https://twitter.com/MRuzzoli)
(twitter thread [here](https://twitter.com/MRuzzoli/status/1148713235325038592),
paper [here](https://www.sciencedirect.com/science/article/pii/S0010945219302205)),
is to estimate power by subsampling data from a previous experiment and counting how many times
you find a significant effect looking at a subset of the data.
In other words, if Jane Doe et al (2019) found a significant effect with 90 participants,
you can estimate the power to find the same effect with only 45 participants by
repeatedly selecting data from half their participants and running the analysis,
and counting how many times the effect was still significant.

However, I there are a few problems with this.
First, obviously, you can only do this if you're directly replicating a previous study, and have access to the raw data.
Second, as I understand it, since you're subsampling the original data set,
you can only estimate what power would be for a smaller sample size;
you have no way of knowing what power would be with more participants without extrapolating.
As a result, you can only estimate power if you're going to test fewer people
-- have lower power -- than the study you're replicating.
Third, and this is a more general point,
sampling and simulating are quite a lot more complicated than classical power analyses,
and we don't yet have standardised ways of doing and reporting them.
Therefore, not only is it hard to do these calculations correctly,
it's also extremely difficult to verify other people's calculations,
unless they go into great detail in the manuscript,
or we have access to their data and code and time and energy to dig into it.

### Generalized additive models (AKA Wiggly lines)

Another approach I'm working on myself is to use of generalised additive models with regression splines
(in other words, wiggly regression lines) in LMMs to model the whole ERP over time.
In short, this means fitting two models:
one that fits a single wiggly line to your ERP,
and one that fits a wiggly line that depends on your independent variable,
and comparing the two.
By including trial-wise random effects for spline terms,
you can allow the actual shape of line to vary a little from trial to trial.
[This poster](https://sites.lsa.umich.edu/karenen/wp-content/uploads/sites/222/2015/03/mssiss2015a0.pdf)
from Karen Nielsen and Rich Gonzalez outlines a pretty similar idea,
and [Dan Miriman](http://www.danmirman.org/gca) has a lot of resources
on using a related approach, growth curve models, for eye-tracking data.
He also wrote a [book](https://www.crcpress.com/Growth-Curve-Analysis-and-Visualization-Using-R/Mirman/p/book/9781466584327)
on the topic, which I can recommend.
An advantage of this approach is that all of these analyses are ultimately just linear mixed models,
and as mentioned above, power calculation is possible for LMMs (it just isn't very easy).
A disadvantage is that it's not clear whether this approach will generalise to short, sharp ERPs like N1-P2,
where it's more difficult to fit a good wiggly line to the data.

## Take Home Message

So, to summarise:

- EEG researchers are bad at reporting power calculations.
- Preregistration and the spread of open science practices are improving things...
- ...but this only helps in simple designs where we even can calculate power.
- Otherwise, although a few techniques show promise, we're a long way
  from having a well understood, commonly accepted approach.
- Hopefully, the fMRI people will eventually get us out of this jam.

# Discussion

I haven't set up comments on this blog,
but I'm very keen to hear what people have to say.
If you have anything to add,
please either comment on the twitter post below,
or get in touch at `e.travers[AT]ucl.ac.uk`.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Earlier this month, I asked a question about power calculations for EEG experiments. The good people of twitter gave me a lot to think about, and I&#39;ve been pondering the question since then. Here&#39;s a summary of what I&#39;ve come up with: <a href="https://t.co/6vm6HyhWeC">https://t.co/6vm6HyhWeC</a> <a href="https://t.co/V6UJF6jTB3">https://t.co/V6UJF6jTB3</a></p>&mdash; Eoin Travers (@TraversEoin) <a href="https://twitter.com/TraversEoin/status/1154731075781967873?ref_src=twsrc%5Etfw">July 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# References and Links

This list includes any interesting browser tabs I had open after writing this post.

- Papers with power calculations (from Twitter)
  - [Ruzzoli, M., Torralba, M., Fernández, L. M., & Soto-Faraco, S. (2019). The relevance of alpha phase in human perception. Cortex.](https://www.sciencedirect.com/science/article/pii/S0010945219302205)
      - [OSF repository](https://osf.io/fq3h7/)
  - [Hobson, H. M., & Bishop, D. V. (2016). Mu suppression–a good measure of the human mirror neuron system? Cortex, 82, 290-310.](https://www.sciencedirect.com/science/article/pii/S0010945216300570)
- Linear mixed model power analysis
    - [Introducing 'powerlmm' an R package for power calculations for longitudinal multilevel models](https://rpsychologist.com/introducing-powerlmm)
    - [SIMR: an R package for power analysis of generalized linear mixed models by simulation ](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.12504)
    - StackOverflow (6 years ago): [Sample size calculation for mixed models](https://stats.stackexchange.com/q/48374/42952)
    - Online calculator: [Power Analysis with Crossed Random Effects](https://jakewestfall.shinyapps.io/crossedpower/)
        - Based on [Westfall et al (2014)](https://pdfs.semanticscholar.org/8c42/84f32d87e48235b8abe13d9cb91e34bbe1fc.pdf)
- fMRI power analysis
    - [Mumford, J. A., & Nichols, T. E. (2008). Power calculation for group fMRI studies accounting for arbitrary design and temporal autocorrelation. Neuroimage, 39(1), 261-268.](https://www.sciencedirect.com/science/article/pii/S1053811907007100)
    - [NeuroPower tools](http://neuropowertools.org/), including NeuroPower, and NeuroDesign, a cool project for optimising fMRI designs.
        - [Some useful slides](https://www.samsi.info/wp-content/uploads/2016/03/Durnez.pdf) by Joke Durnez, NeuroPower author.
    - [Cremers HR, Wager TD, Yarkoni T (2017) The relation between statistical power and inference in fMRI. PLOS ONE 12(11): e0184923.](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0184923)
- Post-hoc power
    - [Hoenig, John M., and Dennis M. Heisey. "The abuse of power: the pervasive fallacy of power calculations for data analysis." The American Statistician 55.1 (2001): 19-24.](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.337.451&rep=rep1&type=pdf)
    - Andrew Gelman (2018): [Don't calculate post-hoc power using observed estimate of effect size](http://www.stat.columbia.edu/~gelman/research/unpublished/power_surgery.pdf)
    - Daniel Lakens (2014): [Observed power, and what to do if your editor asks for post-hoc power analyses ](http://daniellakens.blogspot.com/2014/12/observed-power-and-what-to-do-if-your.HTML)
- Other:
    - Dan Miriman's [website](http://www.danmirman.org/gca) on growth curves.
    - [Regression Spline Mixed Models for Analyzing EEG Data and Event-Related Potentials](https://sites.lsa.umich.edu/karenen/wp-content/uploads/sites/222/2015/03/mssiss2015a0.pdf)
    - [Threshold Free Cluster Enhancement explained](https://benediktehinger.de/blog/science/threshold-free-cluster-enhancement-explained/)

# Notes
