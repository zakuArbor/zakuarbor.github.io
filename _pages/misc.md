---
layout: page
permalink: /misc/
title: Misc
---

<h2 id = "page-title"><img id = "pikachu-title" src = "{{site.baseurl}}/assets/gifs/pikachu-snoozing.webp">Misc Blogs</h2>

A random blog about me discussing on various topics that I randomly felt writing. Most of the blogs will probably be slabs of sloppy work.
<br/><br/>

## Course Reviews

---

<a name = "courses"/>
<ul>
{% for post in site.posts %}                                                  
{% if post.categories contains 'reviews' and post.categories contains 'university' and page.title != post.title %}
<!--<li><a href = "..{{ post.url }}">{{ post.title }}</a></li>                  -->
<li><a href = '{{ site.baseurl }}{{post.url}}'>{{ post.title }}</a></li>
{% endif %}                                                                 
{% endfor %}  
</ul>


## University

---
* [Different Options after HighSchool]({{ site.baseurl}}/blog/different-options-after-highschool/)
* [My Personal Journey in Choosing What to do After High School]({{ site.baseurl}}/blog/my-personal-journey-in-choosing-what-to-do-after-high-school/)
* [First Year of University – Entering a new Environment]({{ site.baseurl}}/blog/departure-entering-a-new-environment/)
* [What is the Best University to Attend]({{ site.baseurl}}/blog/what-is-the-best-university-to-attend/)
* [Going Back to School - Another Undergrad]({{ site.baseurl}}/blog/going-back-to-school-1/)
* [Going Back to School - Why Would Anyone Go Back?]({{ site.baseurl}}/blog/going-back-to-school-2/)
* [Going Back to School - Why I Choose to Study Math and Physics]({{ site.baseurl}}/blog/going-back-to-school-3/)
* [Going Back to School - Expectations and Hopes]({{ site.baseurl}}/blog/going-back-to-school-4/)


## Book Reviews

---

* [5 Centimeter Per Second: One More Side Impression]({{ site.baseurl}}/blog/5-centimeter-per-second-one-more-side/)
* [I Want to Eat Your pancreas: A Heart Breaking Yet Heart Warming Story]({{ site.baseurl}}/blog/i-want-to-eat-your-pancreas-a-heart-breaking-yet-heart-warming-story/)


## Others

---

* [When Did Programming/Coding Start to Click for You]({{ site.baseurl}}/blog/when-it-click-programming/)
* [A Reflection of My Internship as a Software Build Intern]({{ site.baseurl}}/blog/internship-reflection/)
* [Using Fedora GNOME VPN Feature]({{ site.baseurl}}/blog/fedora-vpn-gnome/)
* [My 2021 Reading List]({{ site.baseurl}}/blog/books-i-read-2021/)
* [What is Phoenix]({{ site.baseurl}}/blog/what-is-phoenix/)
* [Disturbing Facts about Phoenix: Implementation Part 1]({{ site.baseurl}}/blog/disturbing-facts-about-phoenix-implementation-part-1/)
* [Killing time during Commute by Reading Books]({{ site.baseurl}}/blog/kill-time-by-reading-during-commute/)
* [Ducky One 2 Mini - Replace Caps Lock as Function Key]({{ site.baseurl}}/blog/duckyone-mini-keyboard/)
* [Document Feeder and PDF Utilities - How to Scan Big Documents with the help of Document Feeder and PDF Utilitie]({{ site.baseurl}}/blog/scan-automation/)
* [CarletonU QNX License Request Policy]({{ site.baseurl}}/blog/carletonu-qnx-license/)
* [QNX now has a non-commercial license for hobbyists to fiddle around]({{ site.baseurl}}/blog/qnx-non-commercial/)
