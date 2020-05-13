---
title: "Social Tasting"
summary: "A big one. Tablet-based interactive social wine-tasting experiment. Tate Modern, 2017."
slug: social-tasting
author: admin
weight: 1
date_string: ""
---

This is one of the fanciest things I've done,
as part of my work with Ophelia Deroy and Barry Smith
at the University of London Institute of Philosophy.

As part of an event we ran at Tate Modern,
we ran an interactive social wine-tasting experiment.
We were interested in how people described their sensory experiences,
and whether a pair of people working together are better able
to communicate what they perceive than someone working alone.

To test this, designed this experiment, outlined above.
The sender(s) had four glasses of wine
(not five, as in the diagram - we thought that was a bit much),
labelled `1 2 3 4`. The receiver, sitting at a different table,
had the same glasses, in a mixed-up order, labelled `A B C D`.
The sender(s) job was to send voice messages describing each wine,
so that the receiver could figure out which one was which.

I implemented this using a local `Node` web server,
which participants interacted with using tablets left on their tables.
The video below shows the sender and receiver pages running side by side
(the video is from a later, less fun version of the experiment,
where we replaced the wines with perfumes).

<video width="320" height="240" controls>
  <source src="tate2017.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

What were the results?
Well, describing flavours is hard,
and it turns out when you bring people into
an exciting, stimulating environment like Tate Modern,
give them wine, and ask them to concentrate on this task,
they don't pay all that much attention.
Interestingly, people performed even worse when working in groups,
since people were having so much fun.

Although the server for this experiment can be run over the web,
it isn't currently available online.
I'll be posting the code to GitHub some time in the near future.
If you're interested in seeing it sooner, get in touch.
