---
title: "Stability is not Reliability"
summary: "Why Generative Modelling does not solve the Psychometric Reliability Paradox"
author: admin
date: 2022-04-24
---

In recent years, psychologists and cognitive neuroscientists have turned their attention to the *reliability* of participant-level parameters estimated from behavioural tasks, such as the Stroop or Iowa Gambling tasks. [Hedges, Powell & Sumner (2018)](https://publications.aston.ac.uk/id/eprint/42724/1/Hedge2018_Article_TheReliabilityParadoxWhyRobust.pdf) have shown that test-retest intraclass correlations for these tasks - the correlation between participants’ original scores and scores obtained when they repeat the experiment after a few weeks - were pretty poor, averaging around ICC = .5 (also check out [Rouder & Haaf, 2018](https://www.researchgate.net/profile/Julia-Haaf-2/publication/331993441_A_psychometrics_of_individual_differences_in_experimental_tasks/links/5c9b4e4c45851506d72dd944/A-psychometrics-of-individual-differences-in-experimental-tasks.pdf), and [Dang, King, & Inzlicht, 2020](https://pdf.sciencedirectassets.com/271877/1-s2.0-S1364661319X00054/1-s2.0-S1364661320300255/main.pdf)).

This pessimistic conclusion has been challenged by work from [Nathaniel Haines](https://psyarxiv.com/xr7y3/) (also this preprint from [Sullivan-Toole, Haines, et al](https://psyarxiv.com/yxbjz)), who argues that when test-retest data from the Implicit Association Test, and Stroop, Flanker, Posner, and Delay Discounting tasks are properly analysed using hierarchical generative models, it turns out that their reliability is actually quite impressive. (At this point I should also acknowledge a preprint from [Snijder et al (2022)](https://psyarxiv.com/z7ury/), which I haven’t read yet.)

The key issue with this claim is that the model parameter that Haines and colleagues interpret as a measure of the *reliability* of participant-level parameter estimates means something quite different. In fact, this parameter reflects the *stability* of those estimates - the degree to which inhibitory control, reward sensitivity, or whatever, are stable over time.

<aside>
🧮 In a previous draft of this post, I went way too far into details of how these various statistics work. In this revised version, I’ve tried to stick to the key points, since most people who care about the maths will already know the maths.

</aside>

We can flesh this idea out with some (necessarily informal) definitions.

- A **true value** is the quantity we’re trying to measure.
- An **estimate** is our best guess as to what the true value is, given the data we have. This is also referred to as the **observed score**, and I’ll use this term to avoid confusion.
- If we had perfect unbiased measurement, observed scores and true values would be the same. Unfortunately, because of measurement error, they are not. The ***reliability*** of an estimate indicates the strength of the relationship between observed scores and true values.
- True values are not necessarily stable over time. For instance, participants’ level of inhibitory control might fluctuate from day to day. The ***stability*** of a true value indicates the degree to which it stays the same over time, e.g. between two testing sessions. The word “stability” is sometimes used to mean other things, but this is the definition we’ll use here.
- The ***test-retest consistency*** of an estimate indicates the degree to which observed scores are the same over time. Again, there are other kinds of consistency we might care about, but let’s focus on the case of two separate testing sessions for now. Consistency is estimated by calculating the correlation between participants’ observed scores across sessions, for instance with an intraclass correlation coefficient (ICC).
- If observed scores are inconsistent across testing sessions, it means that either true values are not stable over time (low stability), observed scores are not strongly related to true values (low reliability), or both. This will be important.

## Working with Data

In practice, we don’t know participants’ true scores, and we have to figure all of this out from the data we have. Often, observed scores are calculated by taking the average or total of individual data points, for instance averaging several survey questions. In this case, we can estimate the reliability of the observed scores from the *internal consistency* of the data (this is different from test-retest consistency): the more consistent the individual answers are, the more reliable the total score. For surveys,  a statistic called **Cronbach’s α (alpha)** is most-often used for this purpose. For behavioural data, observed scores are often also calculated as an average across trials (something Haines and colleagues rightful critique), and so Cronbach’s α can also be calculated in the same way. There are other more general ways of estimating reliability based on internal consistency, using maximum likelihood estimation, that I’ll discuss in a later post.

Another approach to estimating reliability is to look at the consistency of observed scores over time. As mentioned above, if we assume that true scores don’t change over time (they’re *stable*), any inconsistency in observed scores must be because of unreliability. In other words...

$$
\text{Consistency} = \text{Stability} \times \text{Reliability} \\ \text{If Stability} = 1 \implies \text{Consistency} = \text{Reliability}
$$

We can also reverse this idea to estimate stability if we know consistency over time (test-retest correlations between observed scores) and reliability (estimated, for instance, using Cronbach’s α), since...

$$
\text{Stability} = \frac{\text{Consistency}}{\text{Reliability}}
$$

Less formally, if reliability is high, low test-retest consistency implies that true scores are not stable over time. If reliability is low, low test-retest consistency might still reflect stable true scores. In fact, cases where $\text{Consistency} = \text{Reliability}$
 indicate that stability is likely to be perfect. In practice, we would usually estimate stability by calculating the correlation between observed scores and adjusting them upwards - [disattenuating the correlations](https://www.rasch.org/rmt/rmt101g.htm) - to account for the less-than-perfect reliability (Nate Haines has a [nice blog post](http://haines-lab.com/post/2020-06-13-on-curbing-your-measurement-error/) on this). Disattenuation is more commonly used when we want to estimate the correlation between true values on two different measures, based on correlations between observed values, but the same logic applies to repeated applications of the same measure.

It also follows that $\text{Reliability} = \frac{\text{Consistency}}{\text{Stability}}$.

## Stability is not Reliability

Why is all this relevant? In the computational approach advocated for by Haines and colleagues, a lot of emphasis is placed on the model parameter that captures the *correlation between participants’ true scores at two different testing sessions -* what we’re calling *stability* here - and the fact that this parameter is estimated to be pretty close to $1$ for several tasks, suggesting perfect stability.

The issue is that while I don’t doubt that Haines and colleagues know intimately everything I’ve discussed above, and they never claim explicitly that this model parameter does reflect reliability, this is nevertheless the conclusions many people seem to have taken from their preprint, a situation not helped by their subtitle, “*Lessons from the Reliability Paradox*”, or the fact that their manuscript is 48+ pages long. So, to be clear, Haines and colleagues show that underlying traits measured by the Implicit Association Test, and Stroop, Flanker, Posner, and Delay Discounting tasks are stable over time, but they do not show that these traits can be reliably estimated for individual participants using data from these tasks. In fact, although they do not report this analysis, their results suggest that since true scores are stable over time, but test-retest consistency of observed scores are low, reliability must be low (remember, $\text{Reliability} = \frac{\text{Consistency}}{\text{Stability}}$). All that said though, their paper remains an exemplary work of computational modelling, and I remain a big fan of what they’re doing.

## Who Cares?

Finally, why should anyone really care about this? Of course, we should always care about the psychometric properties of the estimates we use, even if it’s often the case that people don’t (see this delightful post on *[Measurement Schmeasurement](https://eiko-fried.com/measurement-schmeasurement/)*, and Flake & Fried’s (2020) [associated paper](https://journals.sagepub.com/doi/full/10.1177/2515245920952393)).

However, this has become particularly important for implicit task- or game-based estimates of psychological traits as more and more startups pop up that promise to provide “objective” measures based on this kind of data, on the basis that this is better than self-report questionnaires for whatever reason. These companies most commonly purport to measure mental health (e.g. [alena,](https://alena.com/) [thymia](https://thymia.ai/)), but we’ve also seen similar claims about racial bias, employee engagement, and emotions (I can’t remember the names of most of these companies, unforunately). The fact that these implicit measures have unacceptably poor reliability should be a huge concern for anyone trying to commercialise them, especially when it comes to mental health, and especially when they’re being used instead of simple, reliable self-report measures. I’ve seen Haines and colleagues’ work cited in defence of these behavioural measures by people who believe it shows that they are highly reliable.

# Addendum: Nate’s Response

Nate Haines was kind enough to read and comment on a draft version of this post. Here’s what he had to say:

> I just read through, and I mostly agree with your claims, although (perhaps as you might expect), not necessarily with the conclusion. Specifically, I don't necessarily agree that Reliability cannot == Stability. In my experience, the meaning of "reliability" is always contextual, depending on the level of analysis being investigated and who is defining it. e.g., the reliability paradox itself was at the level of assessing stability of measures across weeks ("test-retest reliability"), which is why our paper focused on that level (in which case, I don't see anything wrong with saying "test-retest reliability"  instead of "stability" in the context). But there are other uses of the term "reliability" (as you describe in your post, something like alpha) that have to do with the precision of a measure within a single administration, and more. I view our reliability paradox paper as estimating stability while accounting for measurement error/lack of precision/unreliability within each administration. Overall, I think the original Hedge paper was a bit underspecified in terms of what they meant by test-retest (e.g., did they think that the construct was changing over time, plus there was unreliability/lack of consistency within administrations? That was my assumption)

> That being said, if one is instead more interested only in consistency (and not stability), this can also be done with generative models. Specifically, the hierarchical shrinkage factor is equivalent to average score reliability (Donald [[Williams](https://twitter.com/wdonald_1985)] describes in very well in his paper here: [https://psyarxiv.com/2ux7t/](https://t.co/eXPXwLwnMn)), so extracting that value from the model will give you something akin to consistency in the traditional sense. This could then be used to do some correction for disattentuation to obtain better estimates of individual difference correlations, or alternatively one could fit a joint model as in our paper.

> So, I guess in summary, it seems like an argument of semantics to me to say that reliability != stability.I think it is true in some cases, but not all cases, where some authors tend to not use the words "consistency" or "stability", instead saying "reliability" or "test-retest reliability", etc.

> But I also recognize your more general point about (this is me paraphrasing ha) "just because generative model estimates are 'more reliable' than observed scores does not mean that people can simply use observed scores as they always have been". That is something I agree with—e.g., if someone wants to estimate correlations between behavioral and trait measures, they need to fit a joint model across both to gain the benefits of generative modeling. The fact that we show that "things look good with generative models" does not mean that business should proceed as normal. Instead, people need to think about how to deal with uncertainty in their measures. This is something that I thought was made clear in the paper, but of course many people have misinterpreted it.. We have since added a paragraph in the discussion to make this point clearer, although I still need to update the pre-print.

There are a few great points here, and I don’t think there’s any need for me to respond to most of it, but I think a key idea that’s worth reiterating is that **it depends on what we mean by “reliability”**, so let’s spend a minute on that.

The idea of reliability originates in [Classical Test Theory](https://en.wikipedia.org/wiki/Classical_test_theory) (CTT). In this, we think of observed scores as reflecting both true values and measurement error: $\text{Observed} = \text{True} + \text{Error}$, or $O = T + \epsilon$. Reliability is simply the proportion of the variance of the observed scores that is explained by the true scores, i.e. the squared correlation between true and observed scores, $\text{Reliability} = \frac{\sigma^2_T}{\sigma^2_T + \sigma^2_{\epsilon}}$, where, e.g. $\sigma^2_T$ is variance of the true scores $T$.

What are the *true scores* here though? Are they participants’ psychological states averaged over time? Or their underlying states on a particular day? And if we’re using multiple tasks to measure, e.g., inhibitory control, are true scores the level of inhibitory control averaged across all tasks, or just the scores for one particular task? [Generalisability Theory](https://en.wikipedia.org/wiki/Generalizability_theory) is an extension of CTT that takes these kinds of consideration into account. The core idea, without going into the equations, is that the variance we see in observed scores reflects lots of sources of variation, for instance variation between participants’ “overall” true scores (e.g. their general level of inhibitory control), day-to-day variation true scores (e.g. their level of inhibitory control on a specific day), variation between tasks in multi-task analyses, and variation due to measurement error. *Reliability* always refers to the strength of the relationship between the estimates you have and the true scores you’re trying to infer, but as Nate says, there are situations where what I’m calling “stability” is part of that. For example, if we’re trying to estimate participants’ overall level of inhibitory control - not just their level of inhibitory control on the day of testing - and we only have data from a single testing session, our estimates will be less reliable if inhibitory control isn’t stable over time.