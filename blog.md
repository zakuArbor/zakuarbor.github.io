---
layout: page
title: Blog
permalink: /blog/

pagination:
  enabled: true
  index_page_before: true
  debug: true
  collection: posts
  per_page: 5
  permalink: /page/:num/
  sort_field: date
  sort_reverse: true
  category: blog
---

<h1>Blogs</h1>
<nav class="year-shortcuts">
  <strong>Jump to:</strong>
  {% for year in (2019..2026) reversed %}
    <a href="{{ site.baseurl }}/micro/archive/{{ year }}">{{ year }}</a>{% unless forloop.last %} | {% endunless %}
  {% endfor %}
</nav>

<nav class="year-shortcuts">
<strong>Jump to:</strong>
<a href = "{{ site.baseurl }}/blog/programming/">Programming</a> | <a href = "{{ site.baseurl }}/blog/math">Math</a> | <a href ="{{ site.baseurl }}/micro/archive/misc">Misc</a>
</nav>

<p>Random long thoughts I had over the years...</p>

<hr>

{% for post in paginator.posts %}
  <div class="bits">
    <h1 class="title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h1>
    <p class="date">{{ post.date | date: "%B %e, %Y" }}</p>
    
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncatewords: 100 }}
      <p><a href="{{ post.url | relative_url }}">Read More...</a></p>
    </div>
  </div>
  <hr class="bits-hr">
{% endfor %}

{% assign current = paginator.page %}
{% assign total = paginator.total_pages %}

{% assign start_buffer = 4 %}
% assign start_max = 5 %}
{% assign end_buffer = total | minus: 3 %}
{% assign end_min = total | minus: 4 %}

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="page-link">&laquo;</a>
  {% endif %}

  {% for page in (1..total) %}
    {% assign diff = page | minus: current | abs %}

    {% assign show_page = false %}
   {% if page == 1 or page == total or diff <= 2 %}
      {% assign show_page = true %}
    {% elsif current <= start_buffer and page <= start_max %}
      {% assign show_page = true %}
    {% elsif current >= end_buffer and page >= end_min %}
      {% assign show_page = true %}
    {% endif %}

    {% if show_page %}
      {% if page == current %}
        <span class="page-link active">{{ page }}</span>
      {% else %}
       {% if page == 1 %}
          <a href="{{ '/blog/' | relative_url }}" class="page-link">1</a>
        {% else %}
          <a href="{{ '/blog/page/' | append: page | append: '/' | relative_url }}" class="page-link">{{ page }}</a>
        {% endif %}
      {% endif %}
      {% assign left_dots = false %}
    {% else %}
      {% if page > 1 and page < current and left_dots != true %}
        <span class="page-link dots">...</span>
        {% assign left_dots = true %}
     {% elsif page > current and page < total and right_dots != true %}
        <span class="page-link dots">...</span>
        {% assign right_dots = true %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="page-link">&raquo;</a>
  {% endif %}
</div>

