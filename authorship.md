---
layout: index
title: Anthony F Cannistra | Authorship
---

<h1> Recent Authorship</h1>

{% for proj in site.authorship %}
<h2><a href="{{proj.link}}">{{proj.title}}<small>{{proj.description}}</small></a></h2>
{% endfor %} 


