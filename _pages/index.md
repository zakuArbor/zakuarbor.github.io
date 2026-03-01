---
layout: page
title: "Random Bits"
date: 2026-02-26
permalink: /
---
<!--<h2><img src = "{{site.baseurl}}/assets/gifs/pikachu-wave.gif" style = "float:left; margin-right: 1em;">Welcome to yet another random website</h2>-->
<h2 id = "page-title"><img id = "pikachu-title" src = "{{site.baseurl}}/assets/gifs/pikachu-wave.gif">Welcome to yet another random website</h2>
A random website in cyberspace (or the wired) written by a random human on planet Earth. 
Random bits is a personal outlet to talk about random bits of things that is going in my mind and life.

---

### Site Map

<div class = "list-compact">
<a href = "micro"><span style = "letter-spacing: 1px;">µ</span>Blog</a> - Not tiny but not large as my regular blog posts<br/>
<a href = "blog">Blog</a> - Regular blog posts (not updated often)
<ul class>
<li><a href = "programming">Programming</a> - Programming Blogs</li>
<li><a href = "programming">Math</a> - Math blogs from a person who is bad at Math ...</li>
<li><a href = "programming">Misc</a> - Anything random or that didn't fit in the former categories</li>
</ul>
<a href = "link.html">LinkBlog</a> - Links to blogs or articles I found interesting with small commentaries<br/>
<a href = "categories">Categories</a> - A list of categories of my  µblog <br/>
<a href = "gallery">Anime Tech Gallery</a> - a gallery of images and clips of tech featured in manga and anime <br/>
<a href = "about.html">About</a> - For stalkers or bored humans<br/>
</div>

... any more

---


### Latest µBlog / Dernier µBlog
<ul>
{% assign i = 0 %}
{% for post in site.posts %}
    {% if post.categories contains 'micro'%}
        {% assign i = i | plus: 1 %}
        {% if i == 6 %}
            {% break %}
        {% endif %}
        {% assign shorturl = post.id | split: "/" | last %}
        <li><a href = '..{{ post.url }}'>[{{ post.date | date: "%Y-%m-%d" }}] {{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>

### Latest Blog / Dernier Blog
<ul>
{% assign i = 0 %}
{% for post in site.posts %}
    {% if post.categories contains 'blog'%}
        {% assign i = i | plus: 1 %}
        {% if i == 6 %}
            {% break %}
        {% endif %}
        {% assign shorturl = post.id | split: "/" | last %}
        <li><a href = '..{{ post.url }}'>[{{ post.date | date: "%Y-%m-%d" }}] {{ post.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>

### Change Log / Le Journal de Modification

<div class = "update-chat">

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/site/frigimon.png">
    <div class = "text">
        <div class = "date">2026-02-28</div>
        <div class = "name">Bonhomme de Neige</div>
        <div class = "body">Augmente le contraste général et finalise l'intégration des anciens posts ici</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/site/frigimon.png">
    <div class = "text">
        <div class = "date">2026-02-26</div>
        <div class = "name">Bonhomme de Neige</div>
        <div class = "body">Migration et fusion du blog ici</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/site/frigimon.png">
    <div class = "text">
        <div class = "date">2025-01-26</div>
        <div class = "name">Bonhomme de Neige</div>
        <div class = "body">Ajoutez une nouvelle page pour partager des liens intéressants</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/site/mushroom.png">
    <div class = "text">
        <div class = "date">2024-10-21</div>
        <div class = "name">Le Champignon Orange</div>
        <div class = "body">Ajoutez des Pikachu GIFs entre les textes défliants</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/site/mushroom.png">
    <div class = "text">
        <div class = "date">2024-10-12</div>
        <div class = "name">Le Champignon Orange</div>
        <div class = "body">Changez la page du microblog pour lister tous les microblogs avant d'afficher les éditions mensuelles. Ajoutez une FAQ que personne ne m'a rien demandé :D Dites bonjour au Chamignon v2 (J'ai perdu l'originale quand j'ai migré mes affiches à mon nouvel ordinateur)</div>
    </div>
</div>
<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/pikachu_pfp.png">
    <div class = "text">
    <div class = "date">2024-08-29</div>
    <div class = "name">zakuarbor</div>
    <div class = "body">Redesign Change Log to resemble a chat</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/pikachu_pfp.png">
    <div class = "text">
    <div class = "date">2024-08-22</div>
    <div class = "name">zakuarbor</div>
    <div class = "body">Redesigned microblog to utilize Jekyll more</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/pikachu_pfp.png">
    <div class = "text">
    <div class = "date">2024-08-18</div>
    <div class = "name">zakuarbor</div>
    <div class = "body">Added banner image and more 88x31 buttons</div>
    </div>
</div>

<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/pikachu_pfp.png">
    <div class = "text">
    <div class = "date">2024-08-12</div>
    <div class = "name">zakuarbor</div>
    <div class = "body"><s>Plagiarized</s> Copied all Math Webpages from <a href = "https://zakuarbor.github.io/blog/">my personal blog</a></div>
    </div>
</div>
<div class = "msg">
    <img class = "pfp" src = "{{ site.baseurl }}/assets/images/pikachu_pfp.png">
    <div class = "text">
    <div class = "date">2024-08-12</div>
    <div class = "name">zakuarbor</div>
    <div class = "body">Migrated website to Jekyll</div>
    </div>
</div>
</div>

<b>Last Major Edit:</b> {{ page.date | date: "%Y-%m-%d" }}
