---
layout: page
title: "Random Bits"
date: 2026-01-14
permalink: /2025
---

<h1>Complete List</h1>

<ul>
{% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post.categories contains 'micro' and post_year == "2025" %}
        {% assign shorturl = post.id | split: "/" | last %}
        <li><a href = '#{{ post.slug }}'>[{{ post.date | date: "%Y-%m-%d" }}] {{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>


{% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post.categories contains 'micro' and post_year == "2025" %}
<hr class = "bits-hr">
<div class = "bits">
<a name = "{{post.slug}}"></a>
<h1 class = "title">{{ post.title }}</h1>
<div>
<p class = "date">{{ post.date | date: "%B %e, %Y" }}</p>
<div class="tags">
{% for category in post.categories %}
<a href="{{site.baseurl}}/categories/#{{category|slugize}}">{{category}}</a>
{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}
</div>
</div>
{{ post.content }}
</div>
    {% endif %}
{% endfor %}

