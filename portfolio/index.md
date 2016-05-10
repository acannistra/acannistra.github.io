---
layout: portfolio
title: anthony f. cannistra | portfolio
published: true
description: I like photography, cinematography, writing, and pottery. Here is a collection of some of my work. 
---

<div class="row" data-equalizer>
{% for item in site.portfolio | sort: 'date' reversed %}

  {% capture mod %} {{ forloop.index | modulo: 2 }} {% endcapture %}
  {% if mod == '0' %}
  </div>
  <div class="row" data-equalizer >
  {% endif %}
  <div class="medium-6 columns " data-equalizer-watch>
    {% if item.link %}
    <a href="{{ item.link }} ">
    {% else %}
    <a href=" {{ item.url }}">
    {% endif %}
	
    <div class="portfolio-item {{ item.type }}">
      <div class="hider">
        <div class="info">
        <h1>{{ item.title }}</h1>
        <h2>{{ item.short_desc }}</h2>
        <div class="date">{{ item.date | date: "%B %Y"}}</div>
		{% if item.location %}
        <div class="location">on {{ item.location }}</div>
		{% endif %}
      	</div>
      </div>
      
      <img src="{{ item.image }}"/>
      
      <div class="icon">
      	{% if item.type == 'photo' %}
        <i class="fa fa-camera-retro" aria-hidden="true"></i>
        {% elsif item.type == "writing" %}
        <i class="fa fa-file-text" aria-hidden="true"></i>
		{% elsif item.type == "video" %}
		<i class="fa fa-video-camera" aria-hidden="true"></i>
		{% else %}
		<i class="fa fa-hand-spock-o" aria-hidden="true"></i>
		{% endif %}
      </div>

    </div>
    </a>
  </div>
{% endfor %}
</div>