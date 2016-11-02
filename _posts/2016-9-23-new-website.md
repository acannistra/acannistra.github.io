---
layout: post
title:  The New Website is Here!
tags: website
description: I just rebuilt my website, and I'm really excited about it. Here's a short look into some of my design and engineering decisions.
---

Hello all! I'm Tony, and you're on my brand-new website! I just redesigned it, and I wanted to write a brief post explaining some of the design and engineering process that went into it.

The old website looked something like this: 

![old_site](https://dl.dropboxusercontent.com/s/50o3z5m68rc7xby/Screenshot%202016-09-23%2011.50.21.png?dl=0)

Nice enough, but I wanted a layout that was a little more flexible. I knew I wanted to write a blog, and I didn't really like the sidebar layout of the old site. I also wanted the site to be mobile-friendly, and I needed it to not be a total pain to update or change. Basically: I was looking for a mobile-friendly, modular, blog-enabled site that was beautifully designed. With that in mind, I started designing. 

### The Design

When I began to look for design inspiration for this site, I started by examining the personal pages of some scientists, both at UW and elsewhere. I found that many of them included information about themselves, their research, and some had a blog. Others included information about other pursuits they had, like art or mountaineering. However, the downside to many of these sites was that they were, well...uninspiring. 

To remedy the rather suffering æsthetic of the scientific researchers' pages, I started looking at news outlets for inspiration, specifically those oriented toward science news. I found the jackpot on [Science Friday's](http//www.sciencefriday.org) website––a weekly science podcast. It looks like this: 

![science friday site](https://dl.dropboxusercontent.com/s/p6pd62fz9pxkcbi/Screenshot%202016-09-23%2012.08.48.png?dl=0)

I really liked how the page was bordered by a nice bright color, and I particularly liked the way that the blog format of the site was set up. The use of rectangles and negative space was nice too, so I decided to model the site off of this idea, using some of my own touches.

### The Implementation

Because my interests in this site were to make it 1) mobile-friendly, 2) blog-enabled, and 3) beautiful, I knew I was going to need a little help if I didn't want to spend a full month starting from scratch on this project. 

#### Foundation 

Previous experience has shown that the [Foundation](http://foundation.zurb.com) [S]CSS framework is a really awesome way to implement a mobile-first design and have it expertly extrapolated to larger screens. I like that approach, so I chose to use it as the CSS portion of the implementation. I also like that Foundation is built on a grid system, which makes organization of content very easy. 

#### Jekyll

I really didn't want to have to manage a server for this website, I wanted someone else to do that for me. I've been using [Github Pages](https://pages.github.com/) for years now, and I feel like I have a good handle on the systems therein. Github Pages uses the static website generation software [Jekyll](http://jekyllrb.com) to build a statically-servable site using a very adaptable and flexible framework of directories and files. It is a little too much for this post to explain the details of how Jekyll works, but here's the short version: given a folder of Javascript, CSS, and Markdown files that are organized in a certain way, Jekyll will follow instructions that you designate regarding how to put the files together into a website. It is built for blogs, so it was a really good solution for my desires. 

### Conclusion

All in all, I think I spent no more than three days from conception to final build on this site. That's an amazingly short amount of time for someone who really persists on the details. It came out really well, in my opinion. There are still several bugs in the site that I'm working out, and several design decisions that I made which I'm not sure about yet. I'm planning on trying out several versions over the next while, so you might see some changes or added features. For now though, I like the result. 

Any comments? Shoot me an email!

Thanks for reading, all. Happy trails. I think I'm going to get outdoors for a while now. 



