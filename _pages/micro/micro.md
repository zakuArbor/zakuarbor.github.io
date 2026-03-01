---
layout: page
title: µBlog
archive_type: micro
permalink: /micro/
---

<h2 id = "page-title"><img id = "pikachu-title" src = "{{site.baseurl}}/assets/gifs/pikachu-wave.gif">µBlogs</h2>

Random short thoughts or ideas I had over the years...<br>
Despite its name, the posts are not tiny but not as large as regular blog posts.

<nav class="year-shortcuts">
<strong>Jump to:</strong>
<a href = "{{ site.baseurl }}/micro/archive/2026">2026</a> | <a href = "{{ site.baseurl }}/micro/archive/2025">2025</a> | <a href ="{{ site.baseurl }}/micro/archive/2024">2024</a>
</nav>


<hr>

{% assign micro_posts = site.posts | where: "category", "micro" %}
{% for post in micro_posts limit: 5 %}
  <div class="bits">
    <h1 class="title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h1>
    <p class="date">{{ post.date | date: "%B %e, %Y" }}</p>
    
    <div class="excerpt">
      {{ post.content | strip_html | truncatewords: 50 }}
      <p><a href="{{ post.url | relative_url }}">Read More ...</a></p>
    </div>
  </div>
  <hr class = "bits-hr">
{% endfor %}

<center><h2><a href = "{{ site.baseurl }}/micro/archive">Go to µBlog Archives</a></h2></center>
