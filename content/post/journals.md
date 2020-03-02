---
title: "Journals and What they Charge You (and a paper someone should write)"
date: 2020-03-02
category:
tags:
slug: journal-charges
author: admin
summary: It's a lot (and prestige costs more)
---

A few weeks back, I put together a Google Sheets document
listing the [various fees charged by a few popular journals in our field](https://docs.google.com/spreadsheets/d/1E67ONXzXib5i6JeR9ushlE5VL8NtA4vHnomubs64I1M/edit?usp=sharing).

<p><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPFrMZsmz22yL823lqbLAQ6mCygqxHw67FKD7x4LEfRATOh_N72tp-ap2wu6nb8zFz3uBasWpRHXiw" frameborder="0" width="800" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></p>

The document is editable, so it has grown well beyond the handful of journals I looked up myself.
Hopefully, this will be a useful resource for other researchers
trying to navigate this minefield.

There's also some discussion around this topic here:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Cognitive Neuroscience Journals and What They Charge You.<br> I&#39;ve been navigating the horrible world of article processing charges so you don&#39;t have to. <a href="https://t.co/AsTrSFaW01">https://t.co/AsTrSFaW01</a></p>&mdash; Eoin Travers (@TraversEoin) <a href="https://twitter.com/TraversEoin/status/1227615797729808385?ref_src=twsrc%5Etfw">February 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The main conclusion we can draw from all of this is publication costs **a lot**
(special mention goes to current Biology, at $5,200 per article; [source](https://www.cell.com/current-biology/authors)).

## A paper **Someone** should write

This leads to an obvious question:
*what is the price of prestige*?
In other words, do journals with higher impact factors
exploit this position by charging disproportionate fees?
I strongly suspect the answer to this is "yes",
but to my knowledge no-one has systematically explored this.

The issue here is that almost every journal uses it's own pricing system.
Some charge a flat fee for publication.
Others charge for colour figures (in some cases even for online colour figures).
Others still make their money through Gold Open Access charges,
or even through submission fees.
This means we can't say how much it costs, in general, to publish in any particular journal.

We could calculate how much it would hypothetically cost to publish
a single prototypical paper across different journals,
but that's not quite right either.
Clearly different types of paper get published in different journals,
and a 30-page Psych Review manuscript is never going to be submitted to PNAS,
so we don't want to compare the price of that manuscript across journals.

The best approach is as follows:

- Identify a set of journals of interest;
- Take a sample of K papers published in each journal last year,
  and estimate the total publication costs for each paper based on length,
  colour figures, open access policy, etc.
- Test whether total publication cost is predicted by journal impact factor,
  without controlling for number of figures, etc.
  This tells you the cost, in £, of writing "high-impact" papers.
- Repeat while controlling for colour figures, number of pages, etc.
  This tells you
    - Whether papers in high impact journals are shorter/longer, more colourful, etc.
    - How much of the relationship between expense and impact factor is due to,
      for instance, manuscripts in high-impact journals having more colour figures.
    - How much of the expense can be attribute to prestige alone,
      after these publishing considerations have been controlled for.

Of course, this approach still isn't perfect, and causal inference is hard here.
For example, none of this data can rule out the possibility that
differences in price **cause** differences in impact factors,
as researchers choose to only submit their most citeable work
to expensive journals like Current Biology
(although this seems pretty unlikely a-priori).

### But not me (right now)

Unfortunately, I'm at the tail end of a post-doc contract,
and have my hands too full finishing other manuscripts,
to do any of this.
I definitely don't have time for the kind of manual coding of papers
that doing this analysis properly would require.
For this reason, I'm going to settle for shouting my idea into the ether,
in the form of this blog, and hoping someone will run with it.

If that person is you, great!
If you want to include me on the work, that's even better.
If you don't, that's still great, I don't really mind,
I'm just the guy who started a Google Doc.
