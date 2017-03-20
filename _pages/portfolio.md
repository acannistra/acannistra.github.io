---
layout: archive
title: "Creative Portfolio"
permalink: /portfolio/
author_profile: true
---
I enjoy writing and taking photos and videos, and occassionally get paid for those things. Here's a small sampling. 

<div class="grid__wrapper">
  {% for post in site.portfolio reversed %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>