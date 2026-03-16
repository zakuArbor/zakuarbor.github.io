---
layout: micro
title:  "Floating Point Numbers are Not Associative"
date: 2026-03-15
categories: [micro, math, programming, fp] 
published: true
permalink: micro/2026/03/:title
---

Every programmer who has worked with floats know that representing fractions is weird. For instance, suppose we multiply 3.14 with 10. In Python, we get to see some ridiculous number:

```python
>>> 3.14*10
31.400000000000002
```

This behavior can have unintended consequences which I intend to explore a bit more in a future blog. But what I want to share with you is about the additive associativity property that we come 
to love when operating on a [field](https://en.wikipedia.org/wiki/Field_(mathematics)). For simplicity's sake, especially for those without Mathematical background, think of the field as the number system 
you use in your everyday life that has a set of additive and multiplicative properties that you are already familiar with. Additive Associativity is the property that allows you to regroup operations and thus changing the order of priority to perform the addition such as:

(a + b) + c = a + (b + c)

If something is associative, then this regrouping of priority of operations should not affect the final outcome. At work, I have been attending some classes to learn more about using GPUs to do 
Mathematical computations. In one of the classes, it came to my attention that floating point numbers are not associative. This fact shocked me. We were working on computing the Basel problem 
which is a famous mathematical problem taught to first years:

$$
\lim_{N \to \infty} \sum_{n=1}^{N} \frac{1}{n^2} = \frac{\pi^2}{6} \notag
$$

In Mathematics, infinite series are not [associative](https://en.wikipedia.org/wiki/Riemann_series_theorem) but finite series are. For some fixed $N$, I was expecting the order in which we add these 
numbers would not matter but it apparently does.

To illustrate:

$$
{\small
\begin{align*}
&\left( \left( \left( \left( \left( \left( \left( \left( \frac{1}{1^2} + \frac{1}{2^2} \right) + \frac{1}{3^2} \right) + \frac{1}{4^2} \right) + \frac{1}{5^2} \right) + \frac{1}{6^2} \right) + \frac{1}{7^2} \right) + \frac{1}{8^2} \right) + \frac{1}{9^2} \right) \\
&=
\left( \frac{1}{1^2} + \left( \frac{1}{2^2} + \left( \frac{1}{3^2} + \left( \frac{1}{4^2} + \left( \frac{1}{5^2} + \left( \frac{1}{6^2} + \left( \frac{1}{7^2} + \left( \frac{1}{8^2} + \frac{1}{9^2} \right) \right) \right) \right) \right) \right) \right) \right)
\end{align*}
}
$$ 

is what I would expect but this does not appear to be the case as seen in the last digit:

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code> forward:1.539767731166540<b style="color:red">8</b>
backward:1.539767731166540<b style="color:red">5</b>
</code></pre></div></div>

Now one might question which direction is correct or at least more accurate. The most accurate way for this particular example, the basel problem, is to add the numbers in the opposite (backwards) direction 
due to how starting with a large number like 1 will dominate the subsequent additions and hence lose accuracy as the hardware will round off the smaller terms and eventually deviate from the true 
sum as the rounding errors accumulate. However, when working on many threads, this can complicate things as one needs to now consider how to reduce the independent terms in such a way that minimises 
inaccuracy while remain performant. But that's a topic for another time (I am still researching this).

