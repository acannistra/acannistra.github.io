---
layout: portfolio
title: anthony f. cannistra | portfolio
published: true
description: I like photography, cinematography, writing, and pottery. Here is a collection of some of my work. 
---

<div class="row">
{% for item in site.portfolio_content | sort: 'date' reversed %}
  {% capture mod %} {{ forloop.index | modulo: 2 }} {% endcapture %}
  {% if mod == '0' %}
  </div>
  <div class="row">
  {% endif %}
  {% if item.type == 'photo' %}
  <div class="medium-6 columns ">
    {% if item.link %}
    <a href="{{ item.link }} ">
    {% else %}
    <a href=" {{ item.url }}">
    {% endif %}
	
    <div class="portfolio-item">
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
      
      <img src="https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/12186611_10153789433403060_4976026439350365246_o.jpg"/>
      <div class="icon">
        <i class="fa fa-camera-retro" aria-hidden="true"></i>
      </div>

    </div>
    </a>
  </div>
  {% elsif item.type == 'writing' %}
  <div class="medium-6 columns ">
    {% if item.link %}
    <a href="{{ item.link }} ">
    {% else %}
    <a href=" {{ item.url }}">
    {% endif %}

    <div class="portfolio-item">
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
      
      <img src="https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/12186611_10153789433403060_4976026439350365246_o.jpg"/>
      <div class="icon">
        <i class="fa fa-camera-retro" aria-hidden="true"></i>
      </div>

    </div>
    </a>
  </div>
  {% elsif item.type == 'video' %}
  <div class="medium-6 columns ">
    {% if item.link %}
    <a href="{{ item.link }} ">
    {% else %}
    <a href=" {{ item.url }}">
    {% endif %}

    <div class="portfolio-item">
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
      
      <img src="https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/12186611_10153789433403060_4976026439350365246_o.jpg"/>
      <div class="icon">
        <i class="fa fa-video-camera" aria-hidden="true"></i>
      </div>

    </div>
    </a>
  </div>
  {% else %}
  <div class="medium-6 columns ">
    {% if item.link %}
    <a href="{{ item.link }} ">
    {% else %}
    <a href=" {{ item.url }}">
    {% endif %}

    <div class="portfolio-item">
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
      
      <img src="https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/12186611_10153789433403060_4976026439350365246_o.jpg"/>
      <div class="icon">
        <i class="fa fa-hand-spock-o" aria-hidden="true"></i>
      </div>

    </div>
    </a>
  </div>
  {% endif %}


{% endfor %}
</div>