---
layout: page
permalink: /programming/
title: Programming
---

<h2 id = "page-title"><img id = "pikachu-title" src = "{{site.baseurl}}/assets/gifs/pikachu-snoozing.webp">Programming Blogs</h2>
A random blog discussing various topics in Computer Science and Programming that I find interesting to write about. It mostly serves as a medium to test or reiterate to myself what I learned.

## C/C++

---
* [GDB - Mix Source Code with Assembly]({{ site.baseurl }}/blog/gdb-dissassemble-src/)
* [The Value of An Uninitialized Global Variable]({{ site.baseurl }}/blog/global-init-val/)
* [Possible Linker Options to Use to Replicate xlC bloadmap Option on ld]({{ site.baseurl }}/blog/bloadmap-gcc-alt/)
* [What is Name Mangling]({{ site.baseurl }}/blog/extern-c-name-mangling/)
* [C Programming - Variable Length Array (VLA)]({{ site.baseurl }}/blog/variable-len-arr/)
* [Error Loading Shared Library Even If File Exists]({{ site.baseurl }}/blog/lddconfig/)
* [What Goes on When you Press the Play Button]({{ site.baseurl }}/blog/building-code/)
* [printf - Reorder Arguments using $]({{ site.baseurl }}/blog/printf-$/)
* [Debugging expr with ldd]({{ site.baseurl }}/blog/ldd-to-debug-expr/)
* [Dangers of Improper Macro Naming]({{ site.baseurl }}/blog/dangers-of-improper-macro-naming/)
* [A look at Double Pointers]({{ site.baseurl }}/blog/double-pointers/)
* [Another Look at CONST in C]({{ site.baseurl }}/blog/c-const/)
* [A Look at Input Buffer and Scanf]({{ site.baseurl }}/blog/a-look-at-input-buffer-using-scanf/)
* [Another Look at scanf - scanset]({{ site.baseurl }}/blog/scanset/)
* [Debugging Symbols - A Basic Look at Separating Debug Symbols]({{ site.baseurl }}/blog/debugging-symbols/)
* [recvfrom - Obtaining the Return Address]({{ site.baseurl }}/blog/recvfrom-ret-addr/)
* [Polluting the Web With a Useless 5 argument main function]({{ site.baseurl }}/blog/useless-main/)
* [The Sign of Char]({{ site.baseurl }}/blog/sign-of-char/)
* [Stack Overflow: The Case of a Small Stack]({{ site.baseurl }}/blog/small-stack/)
* [this: the implicit parameter in OOP]({{ site.baseurl }}/blog/this-asm/)
* [A Look Into Virtual Table via Assembly]({{ site.baseurl }}/blog/vtbl/)

## Highlevel Overview of Topics

---

* [An Overview of Build and DevOps from A Semi-Outside Perspective]({{ site.baseurl }}/blog/build-team/)
* [Software Portability]({{ site.baseurl }}/blog/software-ports/)
* [Bias UTM CS Course Review]({{ site.baseurl }}/blog/bias-utm-cs-course-review/)
* [Computer Science – A Long and Gargled Explanation]({{ site.baseurl }}/blog/computer-science-a-long-and-gargled-explanation/)
* [A Quick Look Into Half-Width and Full-Width Characters]({{ site.baseurl }}/blog/halfwidth-fullwidth-encoding/)
* [Verifying Email Signature Manually]({{ site.baseurl }}/blog/signature-verification/)

## Dev Blogs

---

<ul>                                                                            
{% for post in site.posts %}                                                    
{% if post.categories contains 'dev blog' %}
<li><a href = '{{ site.baseurl }}{{post.url}}'>{{ post.title }}</a></li>                        
{% endif %}                                                                     
{% endfor %}                                                                    
</ul>        

## Others

---

* [Utilizing Aliases and Interactive Mode to Force Users to Think Twice Before Deleting Files]({{ site.baseurl }}/blog/alias-interactive/)
* [Splitting Files on Linux]({{ site.baseurl }}/blog/split-files/)
* [Fluent Bit Avro Frustration]({{ site.baseurl }}/blog/avro-fluentbit-header/)
* [Duplicate a Fluent-Bit Plugin]({{ site.baseurl }}/blog/fluentd-kafka-copy/)
* [Rust - Invoking Closures in a Struct]({{ site.baseurl }}/blog/rust-closure-invoke/)
* [Rust - Exploring the Assembly Code between Mutable and Shadow Variables]({{ site.baseurl }}/blog/rust-shadow-vs-mut/)
* [QNX - An Introduction to Adapative Partitioning Scheduler and How to Bankrupt Partitions]({{ site.baseurl }}/blog/qnx-aps/)
* [QNX - The Search for the Release Notes]({{ site.baseurl }}/blog/qnx-release-notes/)
* [QNX - You Shall Not Slay the Client]({{ site.baseurl }}/blog/cannot-kill-process/)
* [Misconfigured Hostname]({{ site.baseurl }}/blog/misconfigured-hostname/)
* [ct - Bad Phone Number]({{ site.baseurl }}/blog/ct-bad-phone-number/)
* [Random Thoughts about Tee]({{ site.baseurl }}/blog/random-thoughts-about-tee/)
* [Github App Limiation: Not All Refs Are Readable Error]({{ site.baseurl }}/blog/github-app-limitation-not-all-refs-are-readable-error/)
* [Github Apps on GHE: Your Private Key is not Correct]({{ site.baseurl }}/blog/github-apps-on-ghe-your-private-key-is-not-correct/)
* [Testing GithubPages Repo and Directory Conflict Resolution]({{ site.baseurl }}/blog/github-pages-behavior/)
* [Shellbang Character limit]({{ site.baseurl }}/blog/shellbang-char-limit/)
* [How to Check if an Application is PAM-Aware]({{ site.baseurl }}/blog/pam-aware/)
* [An Uninteresting Glance At Strings]({{ site.baseurl }}/blog/string-asm/)



