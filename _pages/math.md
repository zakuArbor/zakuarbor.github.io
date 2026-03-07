---
layout: page
permalink: /math/
title: Math & Physics
---

<h2 id = "page-title"><img id = "pikachu-title" src = "{{site.baseurl}}/assets/gifs/pikachu-snoozing.webp">Math Blogs</h2>

Random posts relating to Math I found to be interesting during my 
exploration of the subject. I'm a total noob in Math and Physics so a lot of 
the content may be obvious.

<ul>
{% for post in site.posts %}
{% unless post.categories contains 'reviews' %}
{% if post.categories contains 'math' or post.categories contains 'physics' %}
<li><a href = '{{ site.baseurl }}{{post.url}}'>{{ post.title }}</a></li>
{% endif %}
{% endunless %}
{% endfor %}
</ul>

---

## Course Reviews                                                               
                                                                                
---                                                                             
                                                                                
<ul>                                                                            
{% for post in site.posts %}                                                    
{% if post.categories contains 'reviews' and post.categories contains 'university' and post.categories contains 'math' or post.categories contains 'physics' %}
<li><a href = '{{ site.baseurl}}{{post.url}}'>{{ post.title }}</a></li>                        
{% endif %}                                                                     
{% endfor %}                                                                    
</ul>       
