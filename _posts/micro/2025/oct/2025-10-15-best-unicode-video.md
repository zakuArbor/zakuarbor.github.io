---
layout: micro
title:  "UTF-8 Explained Simply - The Best Video on UTF-8"
date: 2025-10-06
categories: [micro, utf, unicode] 
published: true
permalink: micro/2025/10/:title
---


[![Screenshot of the Youtube Video]({{ site.baseurl }}/assets/micro/unicode/utf8-explained-simply.png){: width="750px"}](https://youtu.be/vpSkBV5vydg?si=agAyCNeUCsiNIAGk)

**Video:** [UTF-8, Explained Simply](https://youtu.be/vpSkBV5vydg?si=agAyCNeUCsiNIAGk)

**Channel:** [@nicbarkeragain](https://www.youtube.com/@nicbarkeragain) (Nic Barker)

This is the best explanation I have found on UTF-8 thus far. I previously said [UTF-8 is Brilliant](https://iamvishnu.com/posts/utf8-is-brilliant-design) was the cleanest explanation I've seen on this subject, well that was shortly
beaten on October 2 2025. There are a few reasons why I love this video:

1. Builds up the need for unicode via history and how the 8th bit on ASCII could be used as parity bit
2. Interoperability
    * How Unicode-8 is backward compatible - old ASCII format works with new decoder
    * a brief history of how UTF-16 came to existence
    * How Unicode-8 is also forward-compatible - UTF-8 remains compatible with existing ASCII decoder
    ![Screenshot of UTF-8 Interoperability.png]({{ site.baseurl }}/assets/micro/unicode/utf8-interoperability.png){: width="750px"}
3. Self-synchronization problem in Variable-width encoding bytecode - In the event of a data corruption, how do we know whether we are on the beginning or somewhere in the middle of a byte
    * a question of how to identify the leading byte if dropped in a random chunk of data
4. How to determine the first byte of a 2, 3, 4-byte code unit sequence
    ![Screenshot of UTF-8 Var Width]({{ site.baseurl }}/assets/micro/unicode/utf8-var-width.png){: width="750px"}
5. How to avoid potential conflicts of codepoints existing in different byte sequence (only the shortest representation of a codepoint is used)
6. Zero-width joiner to combine emojis
6. How UTF-8 represents Korean - How UTF-8 allows you to construct and edit each block efficiently through Math
    ![Screenshot of how Korean works in UTF-8]({{ site.baseurl }}/assets/micro/unicode/utf8-korean.png){: width="500px"}

I definitely should edit my blog on [character encoding](https://zakuarbor.codeberg.page/blog/halfwidth-fullwidth-encoding/) as there are probably some areas that are quite questionable after going through various articles and
videos on unicode over the year.

