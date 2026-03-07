---
layout: page
title: "Recommended Books"
permalink: books
---

Random book recommendations I have. There are many books I liked but the ones below are books that I would genuinely recommend to other or books that were impactful in my career and views. 
Of course it is a bit bias and perhaps outdated such as the Perl books. I did wanted to recommend other books like the UNIX SYSTEM V reference book that I read from start to finish 
but alas its not a book I would recommend others to go through despite being the reason why I know so many UNIX commands or the book I read to learn PHP which ended being my most-used language in 
High School.

[My bookshelf]({{ site.baseurl }}/assets/personal/bookshelf.png)

---

## Technical (Software)

<div class = "badges-120">
<div><img src = "OSTEP" src = "{{ site.baseurl }}/assets/buttons/books/ostep.jpg"></div>
<div><img src = "C/C++ Under the Hood" src = "{{ site.baseurl }}/assets/buttons/books/c++-under-the-hood.jpg"></div>
<div><img src = "Reverse Engineering for Beginners" src = "{{ site.baseurl }}/assets/buttons/books/reverse-engineering.png"></div>
<div><img src = "Learning Perl" src = "{{ site.baseurl }}/assets/buttons/books/learning-perl.jpg"></div>
<div><img src = "Intermediate Perl" src = "{{ site.baseurl }}/assets/buttons/books/intermediate-perl.jpg"></div>
<div><img src = "Linux Toolbox (Julia Evans)" src = "{{ site.baseurl }}/assets/buttons/books/linux-toolbox.jpg"></div>
</div>


**[Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/):** As title suggests, the book is split into three main conceptual ideas: virtualisation, concurrency, and persistence. 
This textbook is both free and well-written. The book is divided into nice piece-meal chunks that are easy to read. In other words, it is very well-organised. 
The author has a lot of interesting asides, jokes and often reminds the reader what is the "crux" of the problem to solve in the chapter. This was the textbook we used during my OS course both during 
my CS and Math degrees. I am currently going through the book for the third-time but reading it in its entirety with the [Software Internals Book Club](https://eatonphil.com/bookclub.html) in 2026.

**Note:** I have not read the famous Tanerbaum book on this subject. I do have an old copy gifted to me but I have yet to read it

**[C and C++ Under Hood](https://www.amazon.ca/C-Under-Hood-2nd/dp/B09B74P6C4):** If you are interested in going beneath the hood of the language and understand what the compiler will generate such as how the language implements objects and virtual functions, 
this book does a good job introducing the concept without being overly difficult. This was the book that got me to look at generated assembly code on [Godbolt](https://godbolt.org/) and on GDB.

**[Reverse Engineering for Beginners](https://beginners.re/paywall/):** While it has been many years since I last skimmed this, I recall learning a lot from this book. To be transparent, I barely 
read this book but I find this subject to be interesting.

**[Your Linux Toolbox](https://store.wizardzines.com/products/your-linux-toolbox):** Is a set of zines (also free digitally) that has cute illustrations of how to use various Linux tools such as profiling 
and tracing code with `perf` or analysing network packets with `tcpdump`.

**[Learning Perl](https://en.wikipedia.org/wiki/Learning_Perl)** and **[Intermediate Perl](https://en.wikipedia.org/wiki/Intermediate_Perl)** are the two definitive books to read to learn Perl, also referred to as the Camel and Llama books. Learning Perl was the book I used to read weekly back in 
Highschool and helped me greatly 4 years later when I was in legacy DevOps at IBM where all are infrastructure was in Perl at the time.

**Notable Mentions:** Linux Kernel Development (Robert Love), How Linu Works, Bluetooth: Essentials for Programmers, Intermediate C Programming

---

## Technical (Hardware)

<div class = "badges-120">
<div><img src = "The Manga Guide to Microprocessors" src = "{{ site.baseurl }}/assets/buttons/books/manga-guide-microprocessors.jpg"></div>
<div><img src = "Inside the Machine" src = "{{ site.baseurl }}/assets/buttons/books/inside-machine.jpg"></div>
<div><img src = "Performance Analysis and Tuning on Modern CPU" src = "{{ site.baseurl }}/assets/buttons/books/perf-analysis.jpg"></div>
<div><img src = "The Art of HPC vol 1" src = "{{ site.baseurl }}/assets/buttons/books/art-of-hpc-vol1.jpg"></div>
</div>

**[The Manga Guide to Microprocessors](https://themangaguide.fandom.com/wiki/The_Manga_Guide_to_Microprocessors):** Part of the famous Manga Guide series, this book makes learning computer architecture both fun and easy. I bought this book to properly learn computer architecture 
as I was ashamed of my lack of understanding of the material despite having obtained a decent grade from my first and only course in computer architecture (I was in Computer Science, we don't focus too 
much on hardware and we definitely don't touch this in Mathematics). If you ever wanted to learn how logic gates, flip-flops work, and ALU works, this is the book to read.

**[Inside the Machine](https://nostarch.com/insidemachine.htm):** A book that explains how microprocessors operate with tons of diagrams and goes through examples from Intel, IBM and Motorola. 
It goes through important CPU architecture concepts such as how pipelining works, what is an out-of-order execution and how CPUs perform branch prediction and specualtive execution. I found this 
book along with the Manga Guide to Microprocessors helpful to not be completely lost in my current and hopefully last internship I will ever do (interns don't make much money, I need to graduate and 
start working ...).

**[Performance Analysis and Tuning on Modern CPUs](https://github.com/dendibakh/perf-book/releases/tag/2.0_release):** A great book that gives you an overview of CPU performance analysis. If you care 
about performance, this is the book to read.

**[The Art of HPC Volume 1](https://theartofhpc.com/istc.html):** This book is very informative for anyone interested in High Performance Computing. This book does a good job introducing various 
hardware concepts and gives a good overview of parallel computing and how computers perform arithmetic. I have only read the first 3 chapter and it greatly helped me give context to the work I am 
doing at what I hope is my last internship in my life (I really need to graduate).

---

## References

<div class = "badges-120">
<div><img src = "Linux Programming Interface" src = "{{ site.baseurl }}/assets/buttons/books/linux-programming-interface.jpg"></div>
<div><img src = "Computer Networking: A Top Down Approach" src = "{{ site.baseurl }}/assets/buttons/books/networks.jpg"></div>
</div>
**[The Linux Programming Interface](https://man7.org/tlpi/):** This is a very fat book consisting of 1552 pages and is the most comprehensive description of the Linux and UNIX system available. I bought 
this textbook for fun years after it was a suggested reference for my introduction to systems programming course and it has been a valuable companion of mine during my 
4-month internship at a [micro-kernel RTOS company](https://www.qnx.com/).

**[Computer Networking: A Top-Down Approach](https://gaia.cs.umass.edu/kurose_ross/index.php):** Computer networks is a fascinating topic. I like how they start from the top to bottom (literally as
indicated in the title). This approach is the right way to approach the subject as it allows us to start from a layer that we are all familiar with, the application layer. Then slowly go down 
the rabbit hole. Unlike other textbooks, this textbook uses a much simpler 5-layer model to represent the network instead of the traditional 7-layer OSI model. I have not much opportunities to 
reference this book after my computer networks course but it's a great textbook to learn/relearn networks. I often find myself reading IETF RFCs or the network drivers instead for the work 
I've done in the past but it would not be possible if I had not learned network from this book (or having taken a course based off this textbook).

---

## Computing History

If you prefer videos, [RetroBytes](https://www.youtube.com/@RetroBytesUK) is an excellent channel to learn computing history.

<div class = "badges-120">
<div><img src = "Computer: A History of the Information Machine" src = "{{ site.baseurl }}/assets/buttons/books/computer-history.jpg"></div>
<div><img src = "Memoir UNIX" src = "{{ site.baseurl }}/assets/buttons/books/unix.png"></div>
<div><img src = "Game Engine Doom" src = "{{ site.baseurl }}/assets/buttons/books/doom.jpg"></div>
</div>


**[Computer: A History of the Information Machine](https://en.wikipedia.org/wiki/Computer:_A_History_of_the_Information_Machine):** I love learning about computer history and it helped me kill my boredom in Korea (yes I am a boring human, I hate going outside). If you want a good overview 
of computing history from pre-computing era up to the modern age, this is a good book to read. This was apparently the textbook used for Liberal Arts students at a Korean university which prompted me to buy this 
book.

**[UNIX: A History and a Memoir](https://www.cs.princeton.edu/~bwk/memoir.html):** A memoir by Brian Kernighan, the author of K&R C programming language, is a fablous read on the origins of Unix and how it 
came to be and why it matters. This is written by someone who was part of the development of Unix and who personally knew and worked with the creators of the OS and the C Programming languages. Fun fact, 
he studied at the University of Toronto and grew up in Canada before moving to the States for his studies.

**[Game Engine Black Book: Doom](https://fabiensanglard.net/gebbdoom/):** I have not played Doom and did not know how influential this game was to both gaming and computing history but this book did a good 
job going through how the game engine worked and its influence in the gaming industry. I came to read this book after listening to an interview of John Carmack, one of the creators of the game and a rockstar 
in the space.

---

## Math

<div class = "badges-120">
<div><img src = "Axler Lineawr Algebra Done Right" src = "{{ site.baseurl }}/assets/buttons/books/axler.jpg"></div>
<div><img src = "Contemporary Abstract Algebra" src = "{{ site.baseurl }}/assets/buttons/books/gallian.jpg"></div>
<div><img src = "Math Girls" src = "{{ site.baseurl }}/assets/buttons/books/math-girls.jpg"></div>
</div>

**[Linear Algebra Done Right](https://linear.axler.net/):** The best linear algebra book that exists. Linear Algebra without proofs is just algebra without a soul. Nothing wrong with Linear Algebra With 
Applications either but that textbook is only suitable as an introductory to linear algebra, nothing serious. Of course, Linear Algebra is a surprisingly vast subject and this textbook does lack coverage 
in many other subjects such as LU decomposition, sparse matrices and etc. Linear Algebra is incomplete without applications. You need the two to truly appreciate the subject.
On another note, this textbook is not a suitable introductory book to the subject and should be regulated to a follow-up book after 
having taken an introductory course to the subject.  If you have any good more advanced linear algebra textbooks, feel free to let me know (perhaps I should take a look at Demmel's Applied Numerical Linear Algebra).

**Contemporary Abstract Algebra:** A good introductory book to group theory and rings. On another note, do not ever read Topics in Group Theory (Smith and Tabachnikova), I really disliked the book.
Artin and Dummiti & Foote I heard are good book for learning abstract algebra (ring and field theory). But I cannot comment much on this nor on the subject in general ... Abstract Algebra is not my forté, 
I much prefer analysis and linear algebra more.

**[Math Girls Series](https://bentobooks.com/mathgirls/):** Absolutely lovely and fun way to learn and read various topics in Mathematics.

**TODO:** Enter some nice analysis books. I mainly relied on school notes rather than reading textbooks as I found the textbooks overly complicated to understand ...

---

## Misc

<div class = "badges-120">
<div><img src = "Permanent Record" src = "{{ site.baseurl }}/assets/buttons/books/snowden.jpg"></div>
</div>

**[Permanent Record](https://en.wikipedia.org/wiki/Permanent_Record_(autobiography)):** An autobiography by Snowden. An interesting read of his life and the dangers of mass surveillance.



