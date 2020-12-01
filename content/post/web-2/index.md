---
title: "Online Experiments #2: Choosing the Right Tool for the Job"
date: 2020-07-15
category:
tags:
author: admin
summary: "Simplicity vs Flexibility"
draft: False
---



---

It's always been useful to be able to run experiments online.
Post COVID-19, it's essential.
In this series of posts, I cover what you need to know
to move your research online.
The posts will be (roughly) as follows:

1. [How the Web Works](../web-1/)
2. **Choosing the Right Tools for the Job**
3. [The Web Developer's Toolbox](../web-3)
4. [Setting the Scene: HTML and CSS](../web-4)
5. Making it Move: JavaScript and jQuery [coming soon]
6. Saving Data [coming later]
7. The Fancy Stuff: Animation, Canvas Rendering, Multimedia, and More [coming later]

> Working through lockdown, you don't get a lot of feedback on what you write.
> If you have any comments on anything in these posts, including critical ones,
> I want to hear from you!
> Let me know what you think in the comments below, on twitter,
> or by email (`eoin.travers@gmail.com`).

---

# Part 2: Choosing the Right Tools for the Job

In [Part 1](,,/web-1/), I covered the basics of how the web works.
In this post, I survey some of the ways we can go about building online experiments.
This review should make it easier for you, the researcher,
do choose the tool that's right for you.

I spoke about a lot of the contents of this post
at the [BeOnline 2020](https://beonline.research.sc/2020) conference.
You can find my slides [here](https://docs.google.com/presentation/d/16TjOxASYlgw7rd5znQHXWiuGStOXhn67mZg2npKlRj8/edit?usp=sharing).

## Simplicity vs Flexibility

When choosing tools for any task,
we face a trade-off between simplicity and flexibility.
Some tools are simple to learn and use,
but are limited in what they can do.
Some tools are flexible enough to be used for many tasks,
but learning to use them is harder.

This applies to software tools just as much as it does to hardware like hammers and screwdrivers.
Let's take data analysis as an example.
Microsoft Excel is a fairly simple tool for working with financial spreadsheets.
If you're doing book-keeping - the task it was designed for -
it's probably the ideal tool for the job.
However, it isn't really designed for other kinds of data analysis.
You *can* use Excel for scientific data analysis,
but the design of the program doesn't make this easy.
For instance, in some cases Excel may decide to interpret some columns as dates,
something that would have been helpful if you were managing your finances,
but has [disastrous consequences](https://www.sciencemag.org/news/2016/08/one-five-genetics-papers-contains-errors-thanks-microsoft-excel)
if you were actually working with gene data.

Continuing the data analysis example, you might consider python.
Anything you can do in Excel, you can do in Python,
and many things that would be difficult or impossible in Excel
-- machine learning, interactive visualisation, etc. --
are straightforward enough in python.
However, if all you want to do is manage your finances,
you'll find that writing a new python program for the job
is a whole lot harder than just opening up a new Excel spreadsheet.

Taking this example to it's logical extreme, let's consider the C programming language.
Anything you can do in Python, and by extension anything you can do in Excel, can be done in C
(indeed, python itself is written in C!).
You can also do things that just aren't feasible in python.
However, it's probably a mistake to try to do your statistical modelling
-- let alone manage your finances -- in C.

## The Pareto Principle

Before moving on to experiment-building tools,
I want to talk briefly about the
[**Pareto Principle**](https://en.wikipedia.org/wiki/Pareto_principle),
also known as the **80:20 rule**.
In economics, this refers to the fact that
around 80% of wealth is held by
around 20% of the people,
while the remaining 80% of the people
have to share the remaining 20% of the wealth.
In project management, a very similar rule applies:
the first 80% of a project, including building an online experiment,
takes up 20% of your time,
while the last 20% of the project - the hard bits -
takes up 80% of your time.
In other words, most of any task is easy and can be done quickly.
It's the hard bits that take time!

This has important implications for the tools we should use.
Often, we end up choosing the simple tools that are best for
the initial, easy 80% of the project,
and then struggle with the tricky final 20%.
What we should do instead is choose the right tool
for the hard bits, that are going to take up most of our time,
even if this means it takes us a little longer to do the initial easy stuff.

## Easy to Learn ≠ Easy to Use

I'll mostly be focusing on how easy or difficult a tool is to learn.
This is not the same as how easy it is to use once you've learned it.
In many cases, it's opposite:
once you've mastered a powerful, flexible tool,
it's much easier to use efficiently
than the simpler alternative.
A chainsaw isn't easy to use at first,
but once you get the hang of it
it's a lot quicker than chopping down trees with an axe.
Similarly, it's harder to learn to use the command line or write code
than a user interface,
but once you get the hang of it,
you can get a whole lot more work done
(see also: R vs SPSS).


## Time vs Money

Some of the tools covered below are free to use, some are not.
I think free and open-source software is great,
and often the best tool for the job is free.
However, sometimes paid tools are worth considering.
The key question is whether the money you save by avoiding the paid service
is worth the extra time you spend trying to do the same things yourself.
Some services may also be already paid for by your department or institution.
Below, I'll try to be clear about which tools and services costs money (££) and which don't.

With that out of the way, let's look at the tools available.

> In Part 1 [(How the Web Works)](../web-1/)
> I introduced some of the important technologies that make a website work.
> Refer back if any of the terms below are unfamiliar.

# Front End

Unless you're doing complicated multiplayer or multimedia experiments,
you're going to spend most of your time worrying about the front end:
presenting stimuli in the browser, and collecting responses.

## Simple Surveys

If all you want to do is have some people fill in a survey,
you really don't have to look very far.
You can create a and launch a survey in [Google Forms](https://www.google.co.uk/forms/about/)
in a few minutes, so long as the format of your questions are included in what Google provides.
Google also take care of data storage for you.
As far as I know, Google Forms is GDPR compliant,
but of course you'll need to confirm this yourself.
You might also want to look into paying for a Google business
[G Suite](https://gsuite.google.com/intl/en_uk/) account (££).

There are other simple tools for surveys such as
[SurveyMonkey](https://www.surveymonkey.co.uk/)  (££)
and [Qualtrics](https://www.qualtrics.com/)  (££).
I have used neither of these, so that's all I can say on the topic.

## Graphical Interfaces

For more flexibility, you can use a GUI (graphical user interface) program
to build your own experiment.
These tools are simpler than writing your own code,
and make it possible to implement many standard experimental paradigms.
If you're running studies in the lab,
[OpenSesame](https://osdoc.cogsci.nl/)
and [PsychoPy](https://www.psychopy.org/)
are two excellent python-based GUIs for building studies.

For online studies, you have a few options.
PsychoPy now includes a tool that allows you to [export experiments](https://www.psychopy.org/online/)
built using the GUI (*"Builder"*) as web pages.
You can then host these pages on your own server
or use [Pavlovia](https://pavlovia.org/) (££),
an online service provided by the people behind PsychoPy.
Both of these options are discussed below.
I don't have much experience using PsychoPy for online studies myself,
but I have a lot of faith in the PsychoPy team,
and their python library is (was) my go-to tool for lab studies,
so I have no problem recommending them!

[Gorilla](https://gorilla.sc/?utm_medium=referral&utm_source=eointravers.com) (££) provide a similar service.
Gorilla provides a Task Builder GUI for building standard experiments,
a Questionnaire Builder for forms and questionnaires,
and an Experiment Builder for putting forms, tasks, and logic
(randomisation, counterbalancing, etc.) together.
They provide a Code Editor that lets you include
paradigms built using other tools as part of your experiment.
Experiments built using Gorilla can only be hosted on their server (££),
and unless your department has a site license you'll have to pay per participant.

> A Disclaimer.
> I have a good working relationship Gorilla.
> As a UCL employee, I've had free access to their service for some time now,
> they've given me sneak previews of some of their new services,
> and I spoke recently at a
> [conference on online experiments](https://beonline.research.sc/2020)
> they were involved in organising.
> All of this means that I have no problem with recommending Gorilla,
> but also that I'm likely a little biased, and this should be acknowledged.

[Lab.js](https://lab.js.org/) is another GUI tool for building online experiments.
I haven't used it much, but what I've seen has been impressive.
Lab.js is an open source project, and is totally free to use.
You'll still have to find a way of hosting your experiment though, as discussed below.

## jsPsych

If you need more flexibility that provided by a GUI,
you're going to have to start working with JavaScript.
[jsPsych](https://www.jspsych.org/) is the simplest and the most popular JavaScript tool
coding online experiments.
It folllows a modular design.
Experiments are built up using a series of [*plug-ins*](https://www.jspsych.org/plugins/overview/):
JavaScript routines that present stimuli, collect responses,
or run a specific version of particular kind of task.
This means that you can build an experiment in jsPsych
without having the know much about HTML and CSS,
so long as you know enough JavaScript to string together a series of these plug-ins.
This is what makes jsPsych so simple to use.

There range of plug-ins available is impressive,
and most experiments can be built using a combination of existing plugin-ins.
However, problems arise when you need to do something that isn't
covered by any of the plugin-ins available.
If this happens, you'll need to either
modify (that is, hack) the code for an existing plug-in,
or make a new one from scratch.
Unfortunately, doing this requires a sophisticated knowledge
of JavaScript, HTML, and CSS,
and of the inner workings of jsPsych itself,
since your new plug-in has to integrate with the rest of jsPsych.
The kicker is that
hacking jsPsych in this way
is often far harder than just building your experiment from scratch
using JavaScript, HTML, and CSS.
The simplicity-flexibility trade-off strikes again.

## JavaScript, HTML, and CSS

The next three posts in this series will teach you
how to *hand code* experiments from scratch
using these web technologies.
Stay tuned!

# Back End

It's not as interesting, but you still need to serve your experiment, and save the data.
Several of the front end tools described above,
particularly the paid-for ones,
come with a back end already set up and ready to go.
Google Forms, Qualtrics, and the like all take care of hosting for you,
so you can just build your experiment or survey, click launch,
and then download the data when it's done.

## Specialist services

There are a few services that will serve your experiment
and save the data for you.
In some cases, this just means uploading JavaScript, HTML, and CSS
files you've written yourself (from scratch or using jsPsych),
or that were generated using a GUI like PsyhoPy or lab.js.
Other services are linked to a particular front-end tool, like Gorilla,
but also let you upload your own code if you prefer.

[Pavlovia](https://pavlovia.org/) (££),
run by the people behind PsychoPy, is one such service.
They let you upload your own experiment files,
however they're generated,
but the Pavlovia is mainly geared towards running experiments
built and exported using PsycoPy (discussed above).

[Gorilla](https://gorilla.sc/?utm_medium=referral&utm_source=eointravers.com) (££) provide something similar.
Experiments built using the Gorilla Builder tools (see above)
can only be hosted on the Gorilla server.
Gorilla also provide a [Code Editor](https://gorilla.sc/info/code-editor?utm_medium=referral&utm_source=eointravers.com) tool,
which allows you to code your own experiments.
These can be coded using the Gorilla JavaScript framework
(which I haven't tried),
using jsPsych (which is [well-documented](https://gorilla.sc/support/articles/jspsych?utm_medium=referral&utm_source=eointravers.com) on their website),
or coded from scratch.
There are a few quirks to uploading your own JavaScript to Gorilla,
which I'll cover in a later post.

## General Purpose Services

An online experiment is just another kind of *web app*,
and there are plenty of back end tools for web apps
that can be used to serve experiments and save data.

The most popular service is [Google Firebase](https://firebase.google.com/).
Firebase provides a huge range of services,
including web hosting, databases, machine learning,
analytics, and advertising,
so it's definitely flexible, and not simple.
I haven't really looked into using Firebase seriously,
so I can't say any more at this point.
However, [this blog post](https://tobywise.com/blog/firebase-for-online-testing) looks interesting.

## Your Own Server (The Hard Way)

If you want complete control, you can always manage your own web server.
There are a couple of ways this can be done.
Chances are, your university already has it's own LAMP server ([see Part 1](../web-1/)),
for instance to host staff research homepages.
If you ask nicely, tech support can set you up with access to a folder on this server,
e.g. `/var/www/pages/your-name/`,
and a corresponding URL, e.g. `www.your-univerisity.ac.uk/your-name/`.
You can then upload the files that make up your website
(HTML, CSS, JavaScript, PHP, etc., more on this below) to the server,
do some configuration (which I'll cover in Part 6),
send participants the link, and away you go.
However, this control comes at a price.
Web servers are complicated, and you'll need to learn how the work
in order to properly manage your experiment,
and to avoid accidentally losing data,
or worse, sharing personal data.
This is particularly difficult on a university server,
where you don't have full administrative rights yourself.

A second option is to rent your own server.
I pay around £20 a month to a company called [VPS Dime](https://vpsdime.com/)
(there may be better services available,
but I haven't shopped around in a while)
to rent my own LAMP server,
over which I have full administrative permissions.
I use this to try out new code,
to host several websites (including [eointravers.com](www.eointravers.com)),
and to run various web apps.
This is a great way to learn how to use a server.
Unfortunately, it may be harder to get your university to allow you
to collect some kinds of data this way,
since the data will be physically stored
on a computer that you don't own.
For this reason, I mostly use my personal server
for pilotting experiments on friends and colleagues,
and then upload to the university server for proper testing.

I'm not convinced that using an external server is really any riskier
than running on the university server.
Generally, data breaches are caused by mistakes.
The restrictions placed on university servers
prevent you from doing anything
that will interfere with other people's websites on the same server,
but they also make it easier to make mistakes in managing your own data,
for instance by setting the wrong permissions.
Good luck arguing with your administration about this though.
An intermediate option, which you might want to talk to your local tech support about,
is to set up your own server, running on a computer located in your office.
This gives you full control over the server,
while also ensuring that participants' data is stored on site.

Finally, up until this point we've assumed we're going to run
a fairly conventional online experiment,
where participants go to a web page,
press some buttons for a while,
and their data gets saved to the server.
What if you want to do something more complicated (like [this](http://eointravers.com/web/social-tasting/))?
In my experience, university servers use the LAMP stack
(described in [Part 1](../web-1/)),
and trying to get them to install fancier tools like nodejs or Python
is a losing battle,
unless you can get tech support in your department to set something up for you specially.
Running your own server allows you to run whatever software you like,
and the only limit on the kind of complicated, interactive experiments
you can run is whether or not you have the time and energy to code them.
In my own research, any complicated interactive experiments
hosted on a private server have been covered by separate ad hoc ethical approvals.

## Your Own Server (The Easier Way)

If you want to use a university or private server,
but you don't want to go through the hassle of learning how LAMP works in detail,
help is at hand in the form of software that runs on your server and does some of the hard work for you.

> I haven't used either of the tools described in this section
> very much in my own research, mostly because I learned how to
> manage a LAMP server myself before they were developed.
> I can only give a brief overview of each.

One such tool is [JATOS](https://www.jatos.org/Whats-JATOS.html)
(Just Another Tool for Online Studies).
JATOS is a program that, when installed on your server,
provides a nice graphical user interface that simplifies
the process of uploading studies, and saving data.
Clearly, there is still a learning curve to using JATOS,
but it's a lot shorter than the curve for running a LAMP server yourself.
As I understand it, it should also be possible to
[install](https://www.jatos.org/Bring-your-JATOS-online.html) JATOS
on your university server without administrative permissions.

An alternative is [PsiTurk](https://psiturk.org/),
a python command line tool with a particular focus on interacting with
Amazon Mechanical Turk.
However, since this requires that you have python installed on the server,
and familiarity with the command line,
I don't think it's as beginner-friendly as JATOS.

# Conclusions

These are some of the options, but what should you actually use?
For my own research, I would normally hand code the front end
(as I'll be covering in the next few posts).
For a simple experiment, I would use the university server
to host the files and to log the data
using a simple PHP script and a SQLite database (more on these in the later posts).
For experiments that require more processing on the server,
for instance where we need to share information across participants in real time,
I would use a node back end, running on my own server.
This setup works well for me, since I've already put in the time learning to use these tools,
so I can get things done more quickly this way.

However, online experiments have suddenly become a lot more important,
and the purpose of these posts is to help beginners get their research online.
That's why I'm advocating a simpler setup:
a hand-coded front end (for flexibility),
with a professionally-hosted back end (for simplicity).
I'm leaning towards Gorilla for the back end,
but this advice is a work in progress,
and I may switch to Pavlovia or even Firebase before I'm done.

## Next Steps

The next few posts in this series will cover how we go about
hand-coding experiments in JavaScript, HTML, and CSS,
and launching them on Gorilla or on your own server.

## Addenda

I'm sure there are plenty of relevant tools I've missed or forgotten.
If there's anything else I should be mentioning or at least linking to,
get in touch and I can add it here.
