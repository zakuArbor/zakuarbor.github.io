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

One question that may arise is how to determined the height of these rectanges as it is clear that these rectangles don't capture the curves nicely. There are a few ways to determine the height such 
as grabbing the function's value at the midpoint between each subinterval $[t_i, t_{i+1}]$, the way the author first encountered in its time as a student in computer science. But this choice can feel arbitrary 
with no guarantees whether the height of each subinterval under-estimates or over-estimates the true area. One elegant approach introduced in this course is to consider both cases and see if the two cases 
can reconcile (i.e. be equal to each other) and this approach is called Darboux Sums or Darboux Integrals.

Formally, we define a partition for a function $f$ bounded on $[a,b]$ to be:

> **Partition** of $[a,b]$ is a finite sequence $(t_m)$ with $a = t_0 \lt t_1 \lt t_2 \lt \dots \lt t_n = b$.
> Thus $P = \\{t_0, t_1, t_2, \dots, t_n\\}$
>
> Put simply, it is a partition is a set of ordered numbers between $a$ and $b$.

The over-estimated area is called the UPPER darboux sum and the under-estimated rectangles are called the lower darboux sum making use of the definitions of supremum and infinium encountered in the previous 
course. As one can easily imagine, the two darboux sums take the "max" (supremum) and "min" (infinium) of the curve within each subinterval as the height of the rectangles.

> For a subset $S \subseteq [a, b]$, we let:
>
> $M(f,S) = sup\\{ f(x) : x \in S\\}$ i.e. "Max height of each rectangle"
> 
> $m(f,S) = \inf\\{ f(x) : x \in S \\}$ i.e. "Min height of each rectange"

Thus we can formally define the upper and lower darboux sums as the following:

> **UPPER Darboux Sum:** $U(f,P) = \sum\limits^n_{k=1} \underbrace{M(f, [t_{k-1}, t_k])}_{\text{height}} \cdot \underbrace{(t_k-t\_{k-1})}\_{\text{base}}$

> **LOWER Darboux Sum:** $L(f,P) = \sum\limits^n_{k=1} \underbrace{m(f,[t_{k-1}, t_k])}_{\text{height}}\underbrace{(t_k - t\_{k-1})}\_{\text{base}}$

Recall the objective is to approximate and eventually get the true area under the curve by taking the sum of the area of extremely thin rectangles. Also recall that the area of a rectangle is simply 
width multiplied by its height.

![A sample of darboux sums]({{site.baseurl}}/assets/math-physics/courses/math2052/darboux-sums.png){: width="750px" }
<p class = "caption">A sample of darboux sum where the lower sum is the area of the shaded rectangles and the upper sum is the area of the entire rectangles (shaded + unshaded regions). Taken from 
<a href = "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_basic_analysis.pdf">MIT OCW Real Analysis notes</a></p>.

One may see the upper and lower darboux sums reformulated as the following:

> **Upper Darboux Sum:** $U(f,P) = \sum\limits^n_{k=1} M_i\Delta x_i$
>
> **Lower Darboux Sum:** $L(f,P) = \sum\limits^n_{k=1} m_i \Delta x_i$
>
> where:
> 
> $M_i = \sup\\{f(x): x_{i-1} \leq x \leq x_i \\}$
>
> $m_i = \inf\\{f(x): x_{i-1} \leq x \leq x_i \\}$

Recall in our definition, $f$ is a bounded function on $[a,b]$ so it attains a global min and a global max value. In addition, every partition of $[a,b]$ will contain at least the endpoints $a$ and $b$. 
One key observation is that the local min and max are bounded by the global extremas:

* $M(f, [t_{k-1},t_k]) \leq M(f,[a,b]) = M$
* $m(f, [t_{k-1}, t_k]) \geq m(f, [a,b]) = m$

where $[t_{k-1},t_k] \subseteq [a,b]$. Intuitively, finer partitions capture the function more accurately, so the underestimate improves and the overestimate tightens (potentially 
decreases). Given this fact, we have the following:

> $m(b-a) = m(f, [a,b])(b-a) \leq L(f,P) \leq U(f,P) \leq M(f,[a,b])(b-a) = M(b-a)$

**Quick Breakdown:**

$$
\require{cancel}
\begin{align*}
U(f,P) = \sum\limits^n_{k=1} M(f,[t_{k-1},t_k])(t_k - t_{k-1}) &\leq \sum\limits^n_{k=1} M(f,[a,b])(t_k - t_{k-1})\\
&= \underbrace{M(f, [a,b])}_{\text{const}} \sum\limits^n_{k=1} (t_k-t_{k-1}) \\
&= M((\bcancel{t_1} - t_0) + (\bcancel{t_2} - \bcancel{t_1}) + \dots + (\bcancel{t_{n-1}} - \bcancel{t_{n-2}})  + (t_n - \bcancel{t_{n-1}})) \\
&= M(t_n - t_0) \\
&= M(b - a) \\
\therefore U(f,P) \leq M\sum\limits^n_{k=1} (t_k-t_{k-1}) \leq M(b-a)
\end{align*}
$$

Similar idea to show $m(f, [a,b])(b-a) \leq L(f,P) \leq U(f,P)$

Since $m(f,[t_{k-1},t_k]) \leq M(f, [t_{k-1}, t_k])$ (since $\inf \leq \sup$ by definition), we have $L(f,P) \leq U(f,P)$ for any single Partition P. (
Note: it is not immediately clear whether L(f,P_1) \leq U(f.P_2)$ for **different** partitions $P_1,P_2$, a question we will address shortly.)

![Hand-written Illustration of L(f) and U(f)]({{site.baseurl}}/assets/math-physics/courses/math2052/darboux-sums-under-over.png){: width="750" }

Given this proposition, we see these darboux sums are bounded and by consequence are guaranteed of the existence of an upper Darboux Integral $U(f)$ and lower Integral $L(f)$:

> **Upper Darboux Integral:** $U(f) = \inf\\{U(f,P) : P$ is a partition of $[a,b]$ $\\}$. Often represented as $\overline{\int}_a^b f(x)dx$
>
> **Lower Darboux Integral:** $L(f) = \sup\\{L(f,P): P$ is a partition of $[a,b]$ $\\}$. Often represented as $\underline{\int}_a^b f(x)dx$

Similar to how a limit exists if the LHS and RHS limits exist, we say $f$ is **INTEGRABLE** on $[a,b]$ if $U(f) = L(f)$ or $\overline{\int} a^b f(x)dx = \underline{\int}_a^b f(x)dx$

> **Darboux Integral:** f is **INTEGRABLE** on $[a,b]$ if $U(f)=L(f)$. Often represented as $U(f)=L(f)=\int\limits_a^b f(x)dx$

Showing whether a function is integrable is a lot of work and thus will be omitted. Please read Ross Analysis or search online for an example. However, what I will show and find more interesting is to 
show a function $f$ the is **NOT** integrable. In Engineering, we are always given ''nice" functions that always have integrals but it turns out there are functions that don't have an "area". One 
potential example is comparing the area between two functions that appear to be the same but one has finite number of holes and the other has infinitely many holes in the graph. One is integrable 
and the other is not.

**Example:** 

$$
f(x) = \begin{cases} 
      1 & x \in \mathbb{Q} \\
      0 & x \notin \mathbb{Q} 
\end{cases}
$$ on $[a,b]$. Show that f is not integrable.

Note that every interval $[t_{k-1}, t_k]$ contains a rational and irrational number (i.e. by the density of $\mathbb{Q}$)

We have:
$$
\begin{align*}
M(f, [t_{k-1},t_k]) = 1 \forall k &\implies U(f,P)=1(b-a) = (b-a) &&\implies U(f) = b-a \\
m(f, [t_{k-1},t_k]) = 0 \forall k &\implies L(f,P)=0(b-a) = 0 &&\implies L(f) = 0
\end{align*}
$$

Thus $U(f) \ne L(f)$ and by definition, $f$ is not integrable on $[a,b]$

Any engineering student should be surprised of this result, especially on the idea that one can be asked to determine if a function is integrable or not. This is one of many examples that differentiates 
between Math and Engineering students. Math students are expected to not take anything forgranted unless told otherwise (reality is that there are some materials that are just too complex at the moment 
to learn).

Previously, we saw that for any partition $P, U(f, P) \leq  U(f,[a,b])$. We previously reasoned that a finer partition does a much more accurate job in capturing the function's true behavior. Geometrically, 
we are summing more thinner rectangles whose lower and upper values $M_i$ and $m_i$ are tighter to the true value. Thus we can generalise the following:

> **Lemma 1:** Let $f$ be bounded function on $[a,b]$. If $P,Q$ are partitions of $[a,b]$ with $P\subseteq Q$ (i.e. $Q$ is a "finer" partition within $[a,b]$ / has more points in the partition). Then:
>
> $L(f,P) \leq L(f,Q) \leq U(f,Q) \leq U(f,P)$

Essentially the lemma is stating that adding points to the partition **decreases** the upper sum and **increases** the lower darboux sum.

Similarly, we can now make the claim that for any partition, the lower darboux sum will always be less than (or equal to) any upper darboux sum regardless of the partition.

> **Lemma 2:** Let $f$ be bounded on $[a,b]$ and let $P,Q$ be partitions of $[a,b]$. Then $L(f,P) \leq U(f,Q)$

**Proof:** Consider the partition $P \cup Q$. Note that we know nothing about the partitions $P$ and $Q$ but we do know we can construct a larger partition $P\cup Q$ such that:
* $P\subseteq P \cup Q$
* $Q\subseteq P \cup Q$

So by the previous lemma (lemma 1),
* $L(f,P) \leq L(f, P \cup Q)$ (i.e. adding points to the partition increases the lower darboux sum)
* $U(f,P\cup Q) \leq U(f,Q)$ (i.e. adding points to the partition decreases upper darboux sum)

Chaining these two conclusion, we have: $L(f,P) \leq L(f, P \cup Q) \leq U(f,P\cup Q) \leq U(f,Q)$

Thus lemma 2 tells us tht any any lower sum is below any upper sum. But the supremum and infimum are the tightest bounds we can get. What does lemma 2 tells us about these bounds?

> **Lemma 3:** Let $f$ be bounded on [a,b]. Then $L(f) \leq U(f)$

Previously in lemma 2, we proved that regardless of the partition, the upper darboux sum is always greater (or equal to) the lower darboux sum. 
This is an extension of the previous lemma but even stronger by tighting the bound such that even the GREATEST lower darboux sum is less than the LEAST upper darboux sum.

By the definition of Darboux Integrals, we know that a function is integrable if its lower and upper sum are equal (i.e. $L(f) = U(f)$). However, this definition requires us to prove 

> **Theorem 1 (Cauchy Criterion):** a bounded function $f$ on $[a,b]$ is integrable $\iff \forall \epsilon > 0 \exists$ a partition $P$ of $[a,b]$ such that $U(f,P) - L(f,P) \lt \epsilon$

---

## Resources
* MATH2052 Notes from Charles Starling
* Elementary Analysis: The Theory of Calculus by Kenneth A. Ross
* [MIT OCW Real Analysis Notes](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_basic_analysis.pdf)

Note: I refer to this page as a commentary to the course or an accompanying to the course, these are not class notes. I the author of this page will omit many details and only present the materials and proofs to things I find personally noteworthy and the proofs presented may differ from those listed in the textbook or from the course notes itself.


