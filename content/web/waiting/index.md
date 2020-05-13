---
title: "Waiting Games"
summary: "A series of fun experiments on the timing of self-initiated actions. With animations."
author: admin
weight: 3
date_string: ""
---


Experiments used to study self-initiated action are,
by tradition, very bad.
The standard paradigm is to just put participants in a room,
connected to the EEG,
and tell them to press a button *whenever they feel like it*.

To avoid this, I designed a number of *waiting games*:
tasks where participants had to decide how long to wait
before performing an action in a meaningful context.

> I've embedded the main section of each task within this webpage.
> These tasks weren't designed to be used this way, so for the full experience
> please follow the links to the original pages.

## Soufflé Task

In this task,
participants had to bake a soufflé on each trial.
If you open the oven before soufflé is ready,
it collapses and you need to start again.
Participants had to learn, in different conditions,
how long they needed to wait before opening the oven.

The EEG version of this task is described in
[Travers, Friedmann & Haggard (2020; bioRxiv)](https://www.biorxiv.org/content/10.1101/2020.04.16.045344v1)

<a target="_blank"
   href="http://eointravers.com/web/portfolio/souffle/">
    Click here to open this task in a new window</a>.

<div id="frame1"></div>


## Vegetable Task

<img alt="" src="veg.png"/>

This was an alternative version of the soufflé task.
You get 5 points if you wait long enough for your vegetable to grow,
but only one point for digging it up too soon.
In ways it's nicer aesthetically,
but it would have been more difficult to adapt for EEG,
so never went ahead.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/veg/">
    Click here to open this task in a new window</a>.

<div id="frame2"></div>

## Flower Task

<img alt="" src="flowers.png"/>

This was a slightly different paradigm
that we pilotted before developing the tasks above.
Most of the seeds eventually grow into flowers.
Some never do, and participants had to decide how long to wait before
throwing out those bad seeds and moving on to the next one.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/flower/">
    Click here to open this task in a new window</a>.

<div id="frame3"></div>


<style>
iframe {
    margin-left: auto;
    margin-right: auto;
    display: block;
}
img {
    max-width: 200px;
}
</style>

<script>
prevent_scroll = function(e){
    console.log(e)
    if(e.keyCode == 32) {
        e.preventDefault();
    }
}
// window.addEventListener('keydown', function(e) {
//   if(e.keyCode == 32 && e.target == document.body) {
//     e.preventDefault();
//   }
// });

// Populate the iframes only if the screen is wide enough
// (i.e. we're not on mobile)
populate = function(){
    let urls = ['http://eointravers.com/web/portfolio/souffle/index.html',
                'http://eointravers.com/web/portfolio/veg/index.html',
                'http://eointravers.com/web/portfolio/flowers/index.html'
               ];
    let widths = [600, 400, 400];
    let heights = [400, 400, 400];
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
            iframe.addEventListener('keydown', prevent_scroll);
        }

    }
}
console.log(populate);
document.addEventListener('DOMContentLoaded',
                          x => setTimeout(populate, 1));
</script>
