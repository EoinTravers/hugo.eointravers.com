---
title: "Mouse-Tracking"
summary: "Using cursor-tracking to study the dynamics of conflict during decision-making"
author: admin
weight: 4
date_string: ""
---

For my PhD,
I used mouse-tracking to study
conflict during judgement and reasoning.
Tracking participants' cursor movements as they choose
betweeen competing response options
lets us infer how drawn they are towards each option over time.

This experiment applies this technique
to a classic base-rate neglect paradigm.
To show what mouse-tracking captures,
I've set it to plot the cursor trajectory on screen after each trial,
which is fun.

<a target="_blank"
   href="http://eointravers.com/web/portfolio/mousetracking/">
    Click here to open this task in a new window</a>.

<div id="frame1"></div>


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
// Populate the iframes only if the screen is wide enough
// (i.e. we're not on mobile)
populate = function(){
    let urls = ['http://eointravers.com/web/portfolio/mousetracking/index.html'];
    let widths = [600];
    let heights = [400];
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
