---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---
## Software Portfolio
Software I'm actively pursuing is always on my GitHub page [(click)](https://www.github.com/acannistra). Check out the pinned repos. 

## Creative Portfolio

I enjoy writing and taking photos and videos, and occassionally get paid for those things. Here's a small sampling. Also visit [http://blog.anthonycannistra.com](http://blog.anthonycannistra.com) for updates.

<div class="grid__wrapper">
  {% for post in site.portfolio reversed %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>