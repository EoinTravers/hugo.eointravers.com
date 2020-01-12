---
title: Comment on Kloosterman et al (2019)
date: 2019-03-04
category:
tags:
slug: kloosterman2019
author: admin
summary: Some thoughts on some exciting work on intentions, alpha waves, and perceptual biases.
---

> Kloosterman, N. A., de Gee, J. W., Werkle-Bergner, M., Lindenberger,
> U., Garrett, D. D., & Fahrenfort, J. J. (2019). [Humans strategically
> shift decision bias by flexibly adjusting sensory evidence
> accumulation](https://elifesciences.org/articles/37321). eLife, 8, e37321.

> This is an extended version of a report for [F1000 Prime](https://f1000.com/prime).

> The work discussed here is published in eLife, an open access
> journal, so rather than me copying the figures, please go ahead and
> have a look over [the originals](https://elifesciences.org/articles/37321).

> <div style="color:red">
> TLDR: Kloosterman and co. show that people can voluntary modulate
> how much their visual cortices are excited by incoming stimuli, by
> turning alpha oscillations up or down. This made me excited.
> </div>

What is the relationship between the mind and the brain?
We know that conscious mental states are reflected in the physical state of the brain.
Exactly how this is achieved is one of the key questions in cognitive neuroscience.
A little while ago, I came across this work by Kloosterman and colleagues
that takes a particularly clever approach to this question.
I'd like to take a while to talk about what I liked about this work,
and some of the exciting possibilities it suggests.

The task was simple.
Participants completed a standard signal detection paradigm:
look out for a target, and respond when you see it.
By explicitly changing the payoff structure, participants were incentivised
to either be liberal -- to respond if they even think they've seen something --
or conservative -- to only respond if they're certain.
Unsurprisingly, people were more likely to respond when told to be more liberal.
In signal detection theory terms, this was mostly due to a change in bias.
So far, so good.

<!-- <img src="{filename}/images/kloosterman/ddm.jpg" -->
<!--     style="float:right; max-width:20em;"></img> -->

This kind of bias is usually captured in drift diffusion models (DDMs)
as a change in the starting point of the decision process:
if participants are more likely to say "I see it",
it's because they're leaning towards this response before they even process any evidence.
The authors showed that the pattern of responses and RTs was better fit by
a DDM with *drift bias* -- the evidence itself is biased
so that participants perceive more positive evidence when instructed to be liberal.
<!-- This is illustrated below. -->

<!-- <img src="{filename}/images/kloosterman/ddm.jpg" -->
<!--     style="max-width:20em;"></img> -->

Then, the looked at the brains.

There's quite a lot of EEG analysis here, and I'm not going to even try
to go through every detail. The big picture, though, looks like this.
Asking participants to be more liberal reduced alpha power over the primary visual cortex
before the stimulus was presented.
[Alpha waves](https://en.wikipedia.org/wiki/Alpha_wave) are usually thought of as
what the brain does when it has nothing better to do -
they reflect either idling or inhibition of incoming signals.
This in turn led to greater gamma-band excitability when the stimulus arrived.
Asking them to be more conservative had the opposite effect.
In other words, participants had the ability to make visual cortex
more or less receptive to sensory signals, at will.

I find this exciting for a couple of reasons.
First, it seems to be a particularly nice case of what's been called
[*downward causation*](https://en.wikipedia.org/wiki/Downward_causation):
mental states influencing physical events.
Here, the mental state is the participant's intention, induced by the experimenter --
they *want* to spot all of the targets.
This is physically realised by the reduction of alpha power over the visual cortex,
which in turn modulates the relationship between the environment
-- the stimuli shown on the screen --
and the participant's actions
-- whether or not they press the button.
In other words,
<u>the mind changes how the brain directs the body to respond to the environment</u>.
Of course, this is a conceptually tricky area
and it's easy to slip into a Dualist way of thinking,
where the mind is some disembodied thing separate from the brain.
For now, let's just say that say that mental and the physical events
are phenomena at different levels of explanation,
interactions between levels of explanation is interesting,
and leave it at that.

Here's where I got really excited.
I'm interested in voluntary actions,
where we do things not in response to some stimulus,
but because we've decided we want to do them.
There are two main schools of thought as to how
these self-generated actions are triggered.
The classical view (e.g.
[work](https://www.sciencedirect.com/science/article/pii/S136466130900240X)
by Richard Passingham)
is that some kind of *volitional signal*
is sent from the control cent er in the prefrontal cortex
that makes the body do whatever we want it to do,
whenever we want it to do it.
On the other hand, recent work,
most notably by [Aaron Schurger](https://www.pnas.org/content/109/42/E2904),
has suggested that these actions are actually triggered by random fluctuations
in the supplementary motor cortex:
when there are no external signals telling us what to do,
we rely on random noise in the brain to tell us instead.
Both of these ideas can account for the *readiness potential* we see in EEG recordings:
a slow ramping negative component over the premotor cortex
beginning a second or more before voluntary actions
and peaking at the time of the action itself.

Meanwhile, we know that in the seconds prior to these voluntary actions
there is a reduction alpha-band oscillations over the motor cortex
(where, for some reason, they're referred to as mu-band oscillations).
Not much has been done to explain the relationship between these two phenomena.
This is where the current work could come in.
What if, just like the intention to detect a target
makes visual cortex more easily excited by perceptual evidence,
the intention to act makes supplementary motor cortex more easily excited
by random neural fluctuations?
<u>In other words, maybe when we intend to act
we don't send a volitional *go* signal to the motor cortex.
Maybe we just relax the mechanism that had
up until that point prevented us from acting,</u>
and let things take their course.

This dovetails nicely with the idea that
most of our complicated prefrontal circuits are for inhibition action,
rather than triggering it.
We know that presenting someone with an object
[automatically triggers its affordances](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.211.6311&rep=rep1&type=pdf).
Similarly, while Parkinsonian patients struggle to initiate actions in the absence of stimuli,
patients with utilisation disorders have the opposite problem,
and are unable to prevent themselves from executing actions that they don't intend.
Elsewhere, think about the children taking part in Mischel's
[marshmallow experiment](https://en.wikipedia.org/wiki/Stanford_marshmallow_experiment),
who had to refrain from eating a marshmallow on the table in front of them
so that they could have two marshmallows later.
We don't think of the children who reached out and took the marshmallow there and then
as exercising *willpower*, and those who waited as being passive.
We see it the other way around.

At this point, I'm extrapolating wildly, so it's probably best I wrap things up.
I look forward to seeing more work along these lines, and may get to doing some myself along the way.
