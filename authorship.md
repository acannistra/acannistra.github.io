---
layout: index
title: Anthony F Cannistra | Authorship
---

<h1> Recent Authorship</h1>

{% for proj in site.authorship %}
<h2><a href="{{proj.link}}">{{proj.title}}</a></h2> <small>{{proj.description}}</small>
{% endfor %} 



