---
title: "The Rest"
summary: "Some other experiments that don't get a post of their own"
author: admin
weight: 99
date_string: ""
---

These experiments didn't get a post of their own.

> I've embedded each in this page, but they weren't designed to be
> viewed this way, and don't look quite right. To see them in their
> full glory, follow the links to open each in a new window.

## Animated Flanker

I built this for a workshop I ran on coding experiments for the web.
It's a classic flanker task, plus a Simon effect,
plus some unnecessary animation of the target stimuli.
It also includes a full consent form, and an attention check for the instructions.


<a target="_blank"
   href="http://eointravers.com/web/portfolio/animated-flanker/">
    Click here to open this task in a new window</a>.

<div id="frame1"></div>

## Dots

This task features some complicated random dot motion.

> This instructions are quite long.
> Press `F` for coherent leftward motion, `J` for rightward motion.
> Press `F` and `J` together if the coherent motion never starts,
> and to start the experiment.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/dots/">
    Click here to open this task in a new window</a>.

<div id="frame2"></div>

## Roulette

This is a go/no-go value-based decision-making task.
The online version features some nice animations
that we had to remove for the EEG.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/roulette/">
    Click here to open this task in a new window</a>.

<div id="frame3"></div>


## Urn Task

This is a version of the classic urn sampling task
(except that instead of black and white marbles, we have black and white tiles).
Participants have to decide is tiles are being sampled
from a box that has more black than white,
or a box that has more white than black.
They can see as many samples as they like before making a decision.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/tiles/experiment.html">
    Click here to open this task in a new window</a>.

<div id="frame4"></div>

## Sniff Test

This is a simple visual-analogue scale for tablets
which we used when asking people to evaluate different sets of perfumes.

> Some buttons look a little odd on the embedded version of this task and the next one.
> This is because I tweaked them to look better - and be hard to miss -
> on an iPad.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/sniff-test/">
    Click here to open this task in a new window</a>.

<div id="frame5"></div>

## Gandhi Quiz

I built this interactive quiz to run on iPads at a
Mahatma Gandhi event at UCL a few years ago.
I did not pick the colour scheme.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/gandhi-quiz/">
    Click here to open this task in a new window</a>.

<div id="frame6"></div>


<style>
iframe {
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.featured-image {
    display: none;
}

</style>

<script>
// Populate the iframes only if the screen is wide enough
// (i.e. we're not on mobile)
populate = function(){
    let pages = ['animated-flanker/experiment.html',
                 'dots/',
                 'roulette/',
                 'tiles/experiment.html',
                 'sniff-test/',
                 'gandhi-quiz/']
    let urls = pages.map(p => 'http://eointravers.com/web/portfolio/' + p);
    let widths =  [800, 600, 800, 800, 600, 1000];
    let heights = [400, 600, 600, 600, 500, 700];
    let W = window.innerWidth;
    console.log(W);
    if(W > 1000){
        // Not mobile
        for(let i=0; i<urls.length; i++){
            console.log(i)
            let iframe = document.createElement('iframe');
            iframe.setAttribute('src', urls[i])
            iframe.setAttribute('width', widths[i])
            iframe.setAttribute('height', heights[i])
            document.getElementById('frame' + (i+1)).append(iframe)
        }

    }
}
console.log(populate);
document.addEventListener('DOMContentLoaded',
                          x => setTimeout(populate, 1));
</script>
