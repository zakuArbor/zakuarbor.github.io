---
layout: review-math
title: MATH2052 - A Commentary on Calculus and Introductory Analysis 1
description: An accompany to MATH2052 Review
categories: [university, math, carletonu, reviews]
permalink: blog/math2052-commentary
---

This is a commentary to the second introductory course to calculus and analysis which I have a [course review](/blog/math2052) on if you are interested. The content presented below are from winter 
2022 which may not reflect what is covered in your class today. Furthermore, the information presented will have the author's own commentary and is **NOT** and should **NOT** be a replacement to attending class. 
The author simply wishes to review the cotent of the course mixed with their own speculations, views, and emotions as it reflects on the course 5 years later in preparation to their eventual return to 
school after a 2 year break from Mathematics. This course is a follow up on [MATH1052](/blog/math1052) exploring integrals, different types of convergence such as point-wise and uniform convergence, and 
ends with taylor series and its applications.

As a side note, the commentary presented below heavily resembles Elementary Analysis: The Theory of Calculus by Kenneth A. Ross. This is on purpose as Starling heavily based on the course notes based on this 
textbook.

---

From any regular calculus course, one would know that integration is the process of finding the area under its approximation of the area of a curve using extremelly thin and equally-sized rectangles. 
But one can be more formal in how the area is calculated. From elementary school, one learned that to calculate the area of a rectangle by multiplying the length by its width. It turns out we can expand this concept to calculate the area of any curve 
by drawing a series of equally wide rectangles under the curve to approximate the area as seen below:

<div style = "background-color: #ffe4c8; width: fit-content; margin: auto">
<img src = "http://hyperphysics.phy-astr.gsu.edu/hbase/imgmth/iarea3.gif" alt = "Approximation of the area of a curve using increasingly narrower rectangles">
</div>
<p class = "caption">Approximation of the area of a curve using increasingly narrower rectangles. Taken from <a href = "http://hyperphysics.phy-astr.gsu.edu/hbase/imgmth/iarea3.gif">HyperPhysics</a></p>

Eventually when the width of the rectanges becomes infinitesimally thin, the sum of these infinitesimally thin rectangles gives us the true area under the curve.

This technique of dividing an interval of a curve with increasingly smaller subintervals resulting in thinner and thinner rectanges to approximate area is not a mere theroetical concept but something that's actually used in real life. I recall in one of my geography 
courses, the class was sent to a nearby bridge, tasked on measuring the depth of the river at different points, repeating the measurements in smaller partitions to get an approximate area of the 
river. 

![]({{ site.baseurl }}/assets/math-physics/riverstream_discharge.jpg)
<p class = "caption">An image I found on google that looked familiar to what I learned in Geography to measure discharge. Source: <a href="https://www.fondriest.com/environmental-measurements/measurements/hydrological-measurements/streamflow-measurements/">Fondriest</a></p>

One question that may araise is how to determined the height of these rectanges as it is clear that these rectangles don't capture the curves nicely. There are a few ways to determine the height such 
as grabbing the function's value at the midpoint between each subinterval $[t_i, t_{i+1}]$, the way the author first encountered in its time as a student in computer science. But this choice can feel arbitrary 
with no guarantees whether the height of each subinterval under-estimates or over-estimates the true area. One elegant approach introduced in this course is to consider both cases and see if the two cases 
can reconcile (i.e. be equal to each other) and this approach is called Darboux Sums or Darboux Integrals.

Formally, we define a partition for a function $f$ bounded on $[a,b]$ to be:

> **Partition** of $[a,b]$ is a finite sequence $(t_m)$ with $a = t_0 \lt t_1 \lt t_2 \lt \dots \lt t_n = b$.
> Thus $P = \\{t_0, t_1, t_2, \dots, t_n\\}$

The over-estimated area is called the UPPER darboux sum and the under-estimated rectangles are called the lower darboux sum making use of the definitions of supremum and infinium encountered in the previous 
courses. As one can easily imagine, the two darboux sums take the "max" (supremum) and "min" (infinium) of the curve within each subinterval as the height of the rectangles.

> For a subset $S \subseteq [a, b]$, we let:
>
> $M(f,S) = sup\\{ f(x) : x \in S\\}$ i.e. "Max height of each rectangle"
> 
> $m(f,S) = \inf\\{ f(x) : x \in S \\}$ i.e. "Min height of each rectange"

Thus we can formally define the upper and lower darboux sums as the following:

> **UPPER Darboux Sum:** $U(f,P) = \sum\limits^n_{k=1} \underbrace{M(f, [t_{k-1}, t_k])}_{\text{height}} \cdot \underbrace{(t_k - t_{k-1})}_{\text{base}}$

> $U(f,P) = \sum\limits^n_{k=1} \underbrace{M(f, [t_{k-1}, t_k])}_{\text{height}} \, \underbrace{(t_k - t_{k-1})}_{\text{base}}$

> **LOWER Darboux Sum:** $L(f,P) = \sum\limits^n_{k=1} m(f,[t_{k-1}, t_k])(t_k - t_{k-1})\underbrace{(t_k - t_{k-1})}_{\text{base}}$

