---
title: "Online Experiments #1: How the Web Works"
date: 2020-07-13
category:
tags:
slug: web-1
author: admin
summary: "It's always been useful to be able to run experiments online. Post COVID-19, it's essential."
---

It's always been useful to be able to run experiments online.
Post COVID-19, it's essential.
In this series of posts, I cover what you need to know
to move your research online.
The posts will be (roughly) as follows:

1. **How the Web Works** [this post]
2. [Choosing the Right Tools for the Job](../web-2/)
3. Setting the Scene: HTML and CSS [coming later]
4. Making it Move: JavaScript and jQuery [coming later]
5. Saving Data [coming later]
6. The Fancy Stuff: Animation, Canvas Rendering, Multimedia, and More [coming later]

# Part 1: How the Web Works

To run experiments online, you'll need to know a little about how the web works.
This will be a very bare-bones introduction to a complex topic.
To learn more, check the links at the bottom of the page.

> Point on terminology:
> [The internet and the web are not the same thing](https://computer.howstuffworks.com/internet/basics/internet-versus-world-wide-web1.htm).
> However, like most people, I'm going to use these terms largely interchangeably,
> mostly depending on which one alliterates nicely.

The web has two ends.
The **back end** is what happens on the *server*,
a dedicated computer which *serves* websites to anyone who asks to see them,
stores data, and sometimes does some number crunching.
The **front end** is what happens in the *browser*,
an application running on the user's computer which
displays the contents sent by the server.
Web developers will often specialise in either
front end or back end development,
but everyone needs to know at least the basics of both ends.
People who write both front and back end code
are call *full stack developers*.

When you browse the web, messages are sent back and forth
between your browser and the server.
Whenever you visit a site (e.g. `http://www.google.com`), usually by typing in the URL or clicking a link,
your browser requests the page from a server
(let's skip over how it decides what server to ask).
The server then sends back the page,
along with any other files (images, videos, scripts)
that come with it.
When you submit certain kinds of information,
for instance when filling in a form or placing an order,
this information is sent to the server, where it might be saved to a *database*.


## The Front End

When running experiments online,
you'll mostly need to worry about the front end.
A couple of coding languages are needed for
the front end of a website look and act the way it does.
The process, performed by the browser,
of parsing and running this code to create what you see on screen
is known as *rendering*.

**HTML** (*HyperText Markup Language*)
is the language used to define the *structure* and *contents* of a page,
based on a system of nested *tags*.
There's a basic example below. We'll cover HTML in detail in a later post.


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Page Title</title>
    <link href="style.css" rel="stylesheet"/>
    <script src="script.js"></script>
  </head>
  <body>
    <div id="contents">
      <h1>Main Heading</h1>
      <p>
        Paragraph contents.
        Includes <a href="page2.html">a link to another page</a>.
      </p>
      <img alt="Image description" src="picture.jpg"/>
    </div>
  </body>
</html>
```

This HTML alone is not enough to produce a website.
Notice that in the code above,
we've included a `<link>` tag,
a `<script>` tag, and an `<img>` tag.
These instruct the server to also send the *stylesheet* file called `style.css`,
the *JavaScript* file called `script.js`,
and the JPEG image `picture.jpg`,
and specify where these files should be included in the page.

**Stylesheets** control how the contents of the HTML file appear.
They are written in a language called **CSS** (*Cascading Style Sheets*),
and define a set of rules that are applied by the browser when rendering the page.
For example,

```css
p {
    font-size: 14pt;
}
h1 {
    color: red;
}
img {
    max-width: 200px;
}
```

defines three rules:

- Set the font size for all text within `<p>` (paragraph) tags to 14 points.
- Make the contents of all `<h1>` (main heading) tags red.
- Don't let any `<img>` (image) tags be more than 200 pixels wide.


**JavaScript** is the *scripting language* used to
dynamically alter the contents of the page.
It allows us to build interactive pages,
and to interact with the server in more complicated ways.
As a simple example, this script adds a new `<p>` tag to the page above,
showing the current date and time.

```js
let current_date = Date(Date.now());
let new_p = document.createElement('p');
new_p.innerHTML = 'Page loaded at ' + current_date;
document.getElementById('contents').append(new_p);
```

Often, instead of writing pure JavaScript, we'll use JavaScript *libraries*,
which are basically collections of code that other people have already written
that make our life easier.
I'll be focusing on [`jQuery`](https://jquery.com/),
the most popular library by some margin.
More on this later.


Finally, we can include all kinds of **multimedia** files on a web page,
including images, audio, and video.

Put together,
the HTML, CSS, and JavaScript described above produce the page below
<a href="./example.html" target="_blank">(click here to see it in a new tab)</a>.

 <iframe src="./example.html" width="100%" height="500px"></iframe>


## The Back End

The back end is anything that runs on the server.
There are many different ways a server could be set up,
and for most experiments you don't need to know a lot about this,
but it's worth covering the basics here.

The vast majority of websites
(I've seen 80% mentioned, although don't cite me on this)
run on what's called a **LAMP** server.
This is actually a combination of four compatible tools:

- **Linux** operating system (rather than Windows or OSX)
- **Apache** server
- **MySQL** database
- **PHP** scripting language

*Linux* is the operating system used by the overwhelming majority of web servers.
It's free, secure, and loved by programmers,
and the versions that run on servers --- usually [Debian](https://www.debian.org/) --- almost never crashes.
To work with Linux effectively, you need some familiarity with the
command line, or
[*terminal*](https://maker.pro/linux/tutorial/basic-linux-commands-for-beginners).


[**Apache**](https://httpd.apache.org/) is a
**HTTP** (Hyper Text Transfer Protocol) server.
It's mostly responsible for sending out HTML pages and other files
(JavaScript, CSS, images, etc.) to whatever browsers ask for them.


[**MySQL**](https://www.mysql.com/) is a kind of database,
which makes it easy(ish) to store data sent to the server,
and retrieve it when needed by other web services.
MySQL uses a language called **SQL** ("sequel")
to interact with the database.
It looks like this:

```sql
/* Add data to database */
INSERT INTO my_table (response, rt) VALUES ('left', 123);
/* Retrieve data */
SELECT response, rt FROM my_table WHERE rt < 200;
```


[**PHP**](https://www.php.net/) is the programming language used to do anything more sophisticated
than sending out files whenever the browser asks for them.
PHP stands for *PHP HyperText Processor*
(this kind of recursive acronym is what web developers call a "joke").
As researchers, we'll mostly use PHP to
receive, process, and save data as it's sent back from the participants browser.
This might involve interfacing between PHP and MySQL,
although there are simpler ways to do this if we're not going to need
to do anything with the data in real time.

The other common use of PHP is to dynamically build tailored HTML pages
on the fly before sending them to the browser.
For example, the HTML you receive when you visit `www.twitter.com`
is different for every user (assuming you're logged in).
Twitter don't keep a different version of the website on their server
for each individual user.
Instead, code running on their server retrieves
the contents of your timeline from the databases,
bundles it together on the fly into a HTML page,
and sends that page to your browser.
Many of the big sites don't use PHP for this any more for various reasons,
but they used to.

PHP is not a pretty language
(see [here](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)
for a strongly-worded discussion).
Here's a simple example of a script that receives data
and logs it to a database.

```php
<?php
$db = new SQLite3('./database.db');
$data = json_decode(file_get_contents('php://input'), true);
$data = array_filter($data, function($value) {
  return ($value !== null && $value !== '');
});
$keys = '`' . implode('`, `', array_keys($data)) . '`';
$values = "'" . implode("', '", array_values($data)) . "'";
$insert_query = "INSERT INTO responses ($keys) VALUES ($values);";
$res = $db->exec($insert_query);
if(!$res){
  echo $db->lastErrorMsg();
}
?>
```

### Alternatives to LAMP

LAMP is the most commonly-used kind of server,
but there are plenty of alternatives.
`NGINX` ("engine X") is a popular alternative to `apache`.
which is compatible with the rest of the LAMP setup.
`node.js` is a whole different system,
which runs JavaScript code on the server
to serve pages and process data.
This makes it possible to use similar code
for the front and back end,
and makes life easy for full stack developers.
`Rails` is a similar framework for the `Ruby` language.
Python users can create servers using
`django` (for large, complicated sites, including, I think, YouTube)
or `flask` (for simpler pages).




## Next Steps

At this point, you should have a reasonable idea of how
some of the various tools that make up the web fit together.
For most people, doing most kinds of psychology experiments,
you can get by without needing to learn more than this.
There are now plenty of tools that make it possible design and run many kinds of online studies
without having to write code in any of these languages.
If your experiment is a good fit for these tools,
and your goal is to get good data as quickly as possible,
then these are the right tools for the job.
However, some experiments require more flexibility
than these tools can easily provide.
In these cases, it's easier in the long run
to put in the time to learn how to build your own experiments online.
In the next post, I'll discuss just when
you should rely on the tools on the market,
and when you should do things the hard way, and build your own web page.


# Further Reading

> You can find plenty of information on the topics covered here on Wikipedia.
> I'll leave finding the appropriate Wikipedia page as an exercise.
> The links below are an non-systematic collection of things that you may find useful or fun.

- [What's the Difference Between the Internet and the World Wide Web?](https://computer.howstuffworks.com/internet/basics/internet-versus-world-wide-web1.htm)
- [History of LAMP](https://tedium.co/2019/10/01/lamp-stack-php-mysql-apache-history/)
- [W3 Schools](https://www.w3schools.com/) is a very useful set of tutorials on everything covered above, and is where I started out all those years ago.
- [Hakim el Hattab](https://hakim.se/) is a front end developer who uses the tools described above to create some outstanding effects.
- https://developers.google.com/web
- [Mozilla](https://www.mozilla.org/en-GB/), creators of the Firefox browser,
  are a non-profit who promote free and open web tools.
  The [Mozilla Web docs](https://developer.mozilla.org/en-US/) are also worth a look.
