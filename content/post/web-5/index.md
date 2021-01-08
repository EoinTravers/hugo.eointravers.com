---
title: "Online Experiments #5: Hello, JavaScript"
date: 2021-01-08
category:
tags:
author: admin
summary: "Introducing JavaScript, jQuery, and the things they can do."
draft: False
---


So we've created a HTML web page, filled it with all of the elements we're going to present in our experiment, and used CSS to style them. Our next step is to make things a little more dynamic. To do this, we'll use JavaScript, and in particular the [jQuery](http://jquery.com) JavaScript library.

This post is not an introduction to JavaScript, because like HTML and CSS, there are already plenty of excellent JavaScript  tutorials out there. If you’re not already familiar with the language, I suggest reading through MDN’s [JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) tutorials, in particular the first two:  [What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) and  [A first splash into JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash). Once you're comfortable with the basics of JavaScript, in particular the different kinds of variables, and how functions work, read on.

This post is, however, quite long and quite abstract. Together with the MDN tutorials, it should cover all the prerequisites you need to actually create your website, which we'll be doing in the next post.

## JavaScript Basics: A Recap

I'm assuming you've worked through the tutorials, or know the basics of JavaScript. Just to sure, this section goes quickly through some of the syntax you'll need to be familiar with to understand what follows. If you see some code here you don't understand, go back to the basics.

> All of the code below can be run directly in the JavaScript console. The first few bits of code will run on any page. Lines  starting with `//` are comments, but lines starting with `//>` show the output of the command on the previous line. When you run these commands  yourself, also try clicking on the outputs or hovering the mouse over them to see what happens.

You should know all about variables, types, and operators.

```js
// Numeric variables
1 + 2
//> 3
var x = 1;
var y = 2;
x + y
//> 3

// Strings
var s = 'Hello';
s + ' world!'
//> "Hello world!"

// Booleans
true == false
//> false
// Booleans
true == true
//> true
false == false
//> true
if(x < 100){
  alert('x is small');
} else {
  alert('x is large');    
}

// Compound variables: Arrays and Objects
var my_list = [1, 2, 3];
my_list
//> Array(3) [ 1, 2, 3 ]
my_list[0] // List indices start from 0 and go up.
//> 1

var my_obj = {foo: 1, boo: 2};
my_obj
//> Object { foo: 1, boo: 2 }
my_obj.foo
//> 1
```

You should also know your way around functions.

```js
// Functions
function multiply(a, b){
   return a * b;
};
multiply(5, 4)
//> 20

function multiply2(a, b=2){
   // `b` defaults to 2 (silly example)
   return a * b;
}
multiply(5)
//> 10

```

We'll be [using `map`](https://en.wikipedia.org/wiki/Map_(higher-order_function)) with functions a lot, so make sure you know what that means.

```js
function square(x){
    return x * x;
}
[1, 2, 3].map(square)
//> [1, 4, 9]

// Same thing using an 'anonymous' function
[1, 2, 3].map( function(x){ return x * x } );
//> [1, 4, 9]

// Same thing using an anonymous 'arrow function'
[1, 2, 3].map( x => x * x );
//> [1, 4, 9]
```

Don't forget about properties and methods. Different kinds of variables in JavaScript come with different  properties (information about the variable) and methods (things that they can do, a special kind of function).

```js
var msg = "hello world";
msg.length // A property 
//> 11
msg.toUpperCase() // A method
//> "HELLO WORLD"

let seq = ['a', 'b', 'c'];
seq.length
//> 3
seq.indexOf('c')
//> 2
// Complicated example: .map() is also a method
seq.map( v => 'Value ' + v.toUpperCase());
//> [ "Value A", "Value B", "Value C" ]
```

It's also important to understand the difference between `var`, `let`, and `const` in JavaScript. `var` creates a new variable (but if you create two variables with the same name, the old one is deleted). `let` is the same, except that it throws an error if you try to use a name that's already taken. `const` is even stricter, and is used to create *constants*: variables with values that don't change. An error occurs if you try to change the value of a variable created with `const`. Although we could just use `var` all the time, doing so makes it easier to make mistakes, so it's a good idea to use `let` for values you want to change, and `const` for those you don't.

```js
var x = 1;
x = 2;     // Changing value of x (good)
var x = 2; // Creating a new variable with the same name
           // (Bad idea, but no error)

let y = 1;
y = 2;     // Still works
let y = 2; // Error!
//> Uncaught SyntaxError: redeclaration of let y 
//> note: Previously declared at line 1, column 4

const z = 1;
z = 2; // Not allowed!
//> Uncaught TypeError: invalid assignment to const 'z'
```

## DOM Manipulation

Back to experiments. In the [last post](../web-4/), we discussed how the browser parses the HTML and CSS code sent from the server to create a *model* of how the page should be: the *Document Object Model* (DOM). The most important thing we can do with JavaScript is manipulate this model in order to change the appearance of the page. We saw how to do this manually using the developer tools in [post #3](../web-3/), so all we're learning now is how to do the same thing with code.

At the end of the [last post](../web-4/), we had built a full page for the Flanker task. Let's look at that again. 

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link href="style/flanker4.css" rel="stylesheet"/>
        <script src="libs/jquery.min.js"></script>
    </head>
    <body>

        <p id="fix">+</p>
        <div id="instructions">
            <h1>Flanker Task</h1>
            <p>Instructions go here</p>
            <button id="start-btn">Start</button>
        </div>
        <p id="scoreboard">
            Correct:   <span id="n-correct">0</span>
            <br/>
            Incorrect: <span id="n-incorrect">0</span>
        </p>
        <p id="feedback" class="green">Correct!</p>
        <div id="stimuli">
            <img class="flanker" alt="" src="stimuli/left.svg"/>
            <img class="flanker" alt="" src="stimuli/left.svg"/>
            <img class="target"  alt="" src="stimuli/right.svg"/>
            <img class="flanker" alt="" src="stimuli/left.svg"/>
            <img class="flanker" alt="" src="stimuli/left.svg"/>
        </div>

    </body>
</html>
```

<iframe src="./examples/flanker5.html" width="100%" height="500px"></iframe>

I've made one addition to this page. On line six, I've inserted `<script src="libs/jquery.min.js"></script>`, so that the jQuery JavaScript file (saved to `libs/jquery.min.js`) is loaded with the page[^minify]. We'll be using this later.

[^minify]: Bandwidth is money, so it's common practice to write a nicely-formatted, well-commented JavaScript file, e.g. `jquery.js`, and then run it through a *minifier* that makes the file as small as possible, but also completely unreadable by humans. Minified files are usually saved as `.min.js`, although they're still just JavaScript. 

Now, before we go on, click the button below to open this experiment page in a new tab, and open up the [JavaScript console](../web-3/). If you have a second monitor, this would be a good time to use it. I won't be showing the results of every JavaScript command I go through, so you should use the console to try them out yourself on the Flanker page and see what happens. 

<a class="btn btn-primary" href="./examples/flanker5.html" target="_blank">Open in new tab</a>

## Handcrafted JavaScript

There's a lot we can do using just JavaScript, without any libraries or packages. We'll be using the jQuery library soon, which lets us do all the same things in fewer lines of code, but let's do things the purists' way for now.

Whenever you load a page, JavaScript creates a new variable, `document`, which is a reference to the current web page (or, more precisely, to the DOM of the page). Enter the code below into the console on the example page.

```js
document
//> HTMLDocument http://eointravers.com/post/web-5/examples/flanker5.html
```

Most of the elements in our page have an `id` attribute, a `class` attribute, or both. The `document` variable has methods, such as `.getElementById()`, that allow us to pick out specific parts of the page using these attributes...

```js
var fb = document.getElementById('feedback');
fb
//> <p id="feedback" class="green">
```

...and then manipulate them, using their own methods and properties:

```js
fb.innerHTML = 'Wrong!';          // Change the contents
fb.style.fontFamily = 'webdings'; // Change the CSS
fb.setAttribute('class', 'red');  // Change class
```

We often want to hide or show elements, which is also done by manipulating the CSS:

```js	
fb.style.display = 'none';  // Hide
fb.style.display = 'block'; // Show
```

We can also select elements by class name (e.g. `flanker`) or tag name (e.g. all `<p>` tags):

```js	
var flankers = document.getElementsByClassName('flanker');
var paragraphs = document.getElementsByTagName('p');
```

Since we can have multiple elements with the same class or tag name, these functions return `HTMLCollection`s. Don't worry too much about this, as we're about to move to jQuery in a moment anyway.

```js
flankers
//> HTMLCollection { 0: img.flanker, 1: img.flanker, 2: img.flanker, 3: img.flanker, length: 4 }

// Loop through flankers and change image `src`
for(let flanker of flankers){
	flanker.setAttribute('src', 'stimuli/right.svg');
}
```

## jQuery

[jQuery](http://jquery.com) is a JavaScript library that makes all the things you've seen (and some other stuff we haven't covered) easier and more concise. Anything you can do in jQuery you can do in plain JavaScript, but it takes more lines of code. I won't be providing an in-depth introduction to jQuery in this post, but it should be enough to get started, and enough to make sense of the code examples in later posts. For a proper introduction, go to [learn.jquery.com](https://learn.jquery.com/) and start with their [About jQuery](https://learn.jquery.com/about-jquery/) page (although this goes through things in a different order than I do).

### Selecting and Manipulating

Let's start with some examples.

```js
// Plain JavaScript
let fb_el = document.getElementById('feedback');
fb_el.innerHTML = 'New feedback';
fb_el.style.color = 'blue';

// Same thing in jQuery
let fb_jquery = $('#feedback');
fb_jquery
//> Object { 0: h1#feedback, length: 1 }
fb_jquery.text('New feedback');
fb_jquery.css('color', 'blue');
// or
$('#feedback').text('New feedback');
$('#feedback').css('color', 'blue');

```

What's going on here? As the name suggests, jQuery is built around a [*query function*](https://learn.jquery.com/using-jquery-core/selecting-elements/), `$(query)`. This functions picks out a different element or elements of the page depending on the value of `query`. `$('#feedback')` selects the element with the ID `feedback`. `$('.flanker')` selects all elements with class `flanker`. `$('p')` selects all `<p>` tags. Note that this is the same syntax as we used when writing our [CSS](../web-4/). `query` can also be a regular JavaScript reference an element of the page. For instance, `$(document)` selects the whole page. More complicated queries are possible, but we'll come back to these later.

Once you've used the query function to select one or more elements on the page, the next step is to do something with them. This is done using jQuery's [methods](https://learn.jquery.com/using-jquery-core/manipulating-elements/). Working through the code above, `$('#feedback')` returns the element with ID `feedback` as a jQuery object. Calling `var feedback_el = $('#feedback')` creates a new variable, `feedback_el`, which stores this element. This element has various methods, or things it can do, accessed by typing `feedback_el.method_name()`. For example, `feedback_el.text()` will return the current text of the element, while `feedback_el.text('New feedback')` will set the text to `'New feedback'`. As you might have guessed, `feedback_el.css('color', 'blue')` sets the CSS attribute `color` to `blue`. Note that we don't need to create a new variable to store the element. `$('#feedback').txt('New feedback')` works just as well.

If we want to do multiple changes to the same element, we can chain the methods together one after another.

```js
// Method chaining
$('#feedback').text('My new feedback').css('color', 'blue');
// or (since line breaks don't matter)
$('#feedback')                // Query selector
   .text('My new feedback')   // Method
   .css('color', 'blue');  // Another (chained) method

```

There are[ plenty of other jQuery methods](https://api.jquery.com/category/manipulation/) available for manipulating the DOM, but for online experiments you'll only need a few. Here's an annotated list of the one I use most.

```js
// Manipulate the DOM
$('#my-element')
   .text('Some text')           // Set text in element
   .html('Some raw<b>HTML</b>') // Set raw HTML contents
   .css('color', 'red')         // Modify CSS for this element
   .addClass('important')       // Change element class (use to apply multiple css rules)
   .removeClass('important') 
   .show()
   .hide()
   .attr('src', 'path/to/new_image.jpg') // Change any attribute
   .remove();                            // Delete the element
```

### Events

The other thing we'll use jQuery for is [dealing with events](https://learn.jquery.com/events/). These let us set up our page so that particular JavaScript functions will be run when particular conditions are met, for instance when the page finishes loading, when the participant clicks on something, or when a certain amount of time has elapsed. The thing that waits for a particular event to occur and triggers the appropriate function is called an *event listener*. The function it triggers is called an *event handler*.

The primary way of dealing with events in jQuery by using the [`.on()` method](https://api.jquery.com/on/). This usually takes two arguments: the name of the event you want to listen for (see [here](https://www.w3schools.com/jquery/jquery_events.asp) for a list of possibilities), and the function you want to call when the event occurs (the event handler):

```js
$('#my-element').on('click', do_something); // Where do_something is a function
```

For most events, the name of the event is also a method, which does the same thing, e.g.

```js
$('#my-element').click(do_something); // Same thing
```

The code above will call the function `do_something()` every time the element is clicked. If you only want to call it the first time it's clicked, you can use `.one()` instead of `.on()`

```js
$('#my-element').one('click', do_something);
```

Alternatively, you can remove an event listener using the `.off()` method. 

```js
$('#my-element').off('click'); // Remove click events for this element
$('#my-element').off();        // Remove all events
```

An element can have more than one event listener attached. This can cause problems if you're not careful. Let's say you have two response buttons on your page, both with the class `respone-btn`. You run `$('.response-btn').one('click', do_something)`. You then click the first button, `do_something()` happens, and that button is deactivated. On the next trial, you run `$('.response-btn').one('click', do_something)` again. The second button now has two event listeners, so clicking it will trigger `do_something()` twice. Whoops. This is avoided by explicitly turning off both buttons, for instance at the start of the `do_something()` function: `$('.response-btn').off('click')`.

#### .ready()

Most sites need to wait for the page to be fully loaded before they start calling JavaScript functions. This is done using the `'ready'` event listener. You'll see this a lot.

```js
// Call function when page loads.
function FirstFunction(){
   console.log('Page has loaded');
}
$(document).on('ready', FirstFunction);
// Or (same thing)
$(document).ready(FirstFunction);
```

> The [`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) function prints information to the JavaScript console. It's very useful for debugging your experiments.

#### User Input

If you're running an experiment, you need to process your participants' responses, for instance using the `'click'` or `'keydown'` events. You'll also want to access information about these events; if a key was pressed, or a button clicked, you'll want to know which one. To allow this, event handlers can accept an argument, `event`, from which this information can be extracted. This all sounds quite abstract, but will hopefully make more sense from the examples below, which can be copied and pasted into the JavaScript console for the example experiment.

```js
// Example #1
// Event listener for clicks, which accepts `event` as an argument
function HandleClick(event){
    let clicked = event.target; // What element was clicked?
    console.log('Clicked the following element:');
    console.log(clicked);
}
// Bind this event listener to `document`,
// so the handler is triggered whenever ANYTHING
// is clicked
$(document).on('click', HandleClick);  // Do every time
$(document).one('click', HandleClick); // Do once
```

```js
// Example #2
// A similar listener, but only for <img> tags,
// which prints the `src` attribute of the clicked image.
$(document).off('click'); // Remove the previous listener
function FindSRC(event){
    let clicked = event.target; // What element was clicked?
    let src = clicked.getAttribute('src');
    console.log('Clicked <img> with src=' + src);
}
// Bind to all <img> tags
$('img').on('click', FindSRC);
```

```js
// Example #3: Keyboard
function HandleKey(event){
   let k = event.key;
   console.log('Pressed key ' + k);
}
$(document).on('keydown', HandleKey);
```

```js
// Example #4: Using an anonymous function
$(document).off('keydown'); // Remove previous
$(document).on('keydown', function(event){
   let k = event.key;
   console.log('Pressed key ' + k);
});

```

## Timeouts and Intervals

The final tool we need to cover are the `setTimeout()` and `setInterval()` functions, used to make a function run after a certain amount of time has elapsed. These functions are actually standard JavaScript, not jQuery. I guess that they were simple enough to use as they were, so there was no need to create a simplified version for jQuery.

`setTimeout()` sets a function to run after a specified number of milliseconds have passed.

```jsp
function say_hello(){
    console.log('Hello')
}
setTimeout(say_hello, 2000);
// ...2 seconds later...
//> "Hello"
```

It also works with anonymous functions, including arrow functions.

```js
setTimeout(function(){console.log('Hello')}, 2000);
// ...2 seconds later...
//> "Hello"

// Same thing
setTimeout(() => console.log('Hello'), 2000);
```

The first argument must be a function name or an anonymous function though. If you pass it anything else, it will be executed immediately. This is a common mistake.

```js
// Bad Code
setTimeout(console.log('Hello'), 2000); // Not a function
// Executes immediately:
//> "Hello"


// More Bad Code
function say_hi(name){
    console.log('Hi, ' + name);
}
//  `say_hi` is the function name. 
// `say_hi()` is a call to that function.
setTimeout(say_hi('you'));
// Executes immediately:
//> "Hi, you"

// Instead, you can wrap `say_hi('you')` in another function
setTimeout(function(){say_hi('you')}, 2000);
// ...2 seconds later...
//> "Hi, you"
// Or, using arrow function (same outcome)
setTimeout(() => say_hi('you'), 2000);
```

`setInterval()` is similar, except that the function will keep repeating until it's cancelled (or the page is refreshed).

```js
function check_time(){
    console.log('Time is ' + Date());
}
setInterval(check_time, 2000);
//> Time is Fri Jan 08 2021 11:15:49 GMT+0000 (Greenwich Mean Time)
//> Time is Fri Jan 08 2021 11:15:51 GMT+0000 (Greenwich Mean Time)
//> Time is Fri Jan 08 2021 11:15:53 GMT+0000 (Greenwich Mean Time)
// (and so on)
```

Finally, `clearTimeout()` and `clearInterval()` cancel their respective timers. To use them, you must save the identification number for the timeout or interval you want to cancel when you create it, and pass this to the `clearTimeout()` function.

```js
function say_hello(){ console.log('Hello') }
let hello_timeout = setTimeout(say_hello, 2000);
console.log('Set timeout with ID ' + hello_timeout);
//> "Set timeout with ID 2"
clearTimeout(hello_timeout);
// Nothing happens.
```

Try to figure out what this example does.

```js
let n_checks = 0;
function check_time2(){
    console.log('Time is ' + Date());
    n_checks = n_checks + 1;
    if(n_checks == 5){
        console.log('Cancelling checks')
        clearInterval(time_check_interval);
    }
}
let time_check_interval = setInterval(check_time2, 1000);
```

## Any Other Business

There are a few things I need to mention briefly before we're ready to finally make our experiment work. 

### Bootstrap

[Bootstrap](https://getbootstrap.com/) “*is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web*”.

In other words, Bootstrap is a big CSS file, some accompanying JavaScript, and a set of HTML templates that make it easy to create modern-looking websites, quickly. Bootstrap is very popular, and Bootstrap websites are easily recognisable (it was originally developed at Twitter). Bootstrap is automatically loaded for all Gorilla experiments, so we’ll use it for all our experiments too. I mostly use it for it’s nice [buttons](https://getbootstrap.com/docs/4.5/components/buttons/).

If you're already using jQuery, including Bootstrap on your page is just a matter of adding links to the `bootstrap.js` (JavaScript) and `bootstrap.css` (CSS) files, which I've saved in the `libs/` folder.

```html
<script src="libs/bootstrap.js"></script>
<link  href="libs/bootstrap.css" rel="stylesheet"/>
```

Bootstrap doesn't do anything until we add the appropriate classes to the elements of our page. For example, a regular HTML button, `<button>Boring!</button>`, looks like this

<button>Boring!</button>

Adding `class="btn btn-primary"` turns it into a pretty Bootstrap button:

<button class="btn btn-primary">Better!</button>



### Modules

Certain JavaScript functions can be found as methods of the built-in objects, e.g.

```js
Math.round(3.1234);    // -> 3
Math.random();       // -> 0.08821077220506635
JSON.parse('{foo: "boo"}') // -> {foo: 'boo'}
performance.now();     // -> (the current timestamp)
```

[See here for a full list.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

### Lodash

[**Lodash**](https://lodash.com/docs/4.17.15) is a package that creates a new object, `_` (hence the name) which provides a whole load of handy functions, such as `_.mean()` and `_.shuffle()`. You’ll come across the more useful ones as we go through code for an experiment.

### For Loops

[**For loops**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) are kind of weird in JavaScript.

```js
let my_list = ['Fee', 'Fi', 'Foe', 'Fum'];
// This used to be the common way (it's not pretty)
for (let ix = 0; ix < my_list.length; ix++) {
  console.log(my_list[ix]);
};
//> "Fee"
//> "Fi"
//> "Foe"
//> "Fum"

// This is a little nicer
for (let val of my_list) {
  console.log(val);
};
// (Same output)

// Often, we'll use the `.map()` method instead.
my_list.map(console.log);
// (Same output)

// With anonymous arrow function
my_list.map( val => console.log('Say ' + val));
//> "Say Fee"
//> "Say Fi"
//> "Say Foe"
//> "Say Fum"
```

### Cross-Browser Compatibility

Possibly the most annoying thing about web development is that your code is going to be run on all kinds of computers, using different operating systems, different web browsers (and different versions of each browser), with different settings, keyboard layouts, screen sizes, languages, and so on. Because different browsers do things in slightly different ways (particularly when it comes to JavaScript), it's important to ensure that your experiment works on all of the setups your participants are likely to be using, not just on your own computer. This is done by a) testing your code in multiple setups (or asking your friends and colleagues to do it for you), b) checking the *browser compatibility* section in the MDN documentation (e.g. [here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key#browser_compatibility)), and c) preventing participants using incompatible browsers (such as old versions of Internet Explorer) from completing your experiment.

For much more on this, check the MDN tutorial on [**Cross-Browser Compatibility** ](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing).

### Advanced topics

These are things you don't need at all, but might want to check out just for fun, now that you know so much about JavaScript.

- [D3.js](https://d3js.org/) (*Data Driven Documents*) is "a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers  without tying yourself to a proprietary framework, combining powerful  visualization components and a data-driven approach to DOM manipulation." D3 powers a lot of the cool interactive visualisations you see online.
- [Observable](https://observablehq.com/) is a sophisticated platform for data analysis and visualisation using JavaScript. It's created by the guy responsible for D3.js. I don't fully understand it, but it looks very cool.
- [Reveal.js](https://revealjs.com/) is "an open source HTML presentation framework. It's a tool that  enables anyone with a web browser to create fully-featured and beautiful presentations for free. Presentations made with reveal.js are  built on open web technologies. That means anything you can do on the  web, you can do in your presentation. Change styles with CSS, include an external web page using an `<iframe>` or add your own custom behavior using our [JavaScript API](https://revealjs.com/api)." 
- You might want to look into newer JavaScript *frameworks*, such as [React](https://reactjs.org/) (*"A JavaScript library for building user interfaces"*). However, be warned. Web developers have a *weird* professional culture, where everyone has to be constantly moving to the coolest, newest tool, and abandoning the old ones. By contrast, the approach we're using, where we put together some hand-written HTML and CSS, plus enough JavaScript and jQuery to get it moving, is old as the hills (well, 2012, when I did my first online experiment), and desperately unfashionable. The endless churn of JavaScript tools is discussed seriously [here](https://stackoverflow.blog/2018/01/11/brutal-lifecycle-javascript-frameworks/), and frivolously [here](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f).

## Conclusion

At this point, you should know the basics of how JavaScript and jQuery work, and have a good idea of how we can use these tools to a) manipulate the contents of a web page, and b) handle user inputs, and delay things where necessary. Although I've barely mentioned online experiments in this post, these are the fundamentals you'll need, alongside with a working knowledge of HTML and CSS, to get your online experiments -- even fairly complex experiments -- up and running. In the next post, we'll apply these methods to the Flanker example, turning it from a static web page to to a finish online experiment. 