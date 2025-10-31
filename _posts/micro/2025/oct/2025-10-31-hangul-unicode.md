---
layout: micro
title:  "Hangul - Unicode Visualiser"
date: 2025-10-31
categories: [micro, utf, unicode] 
published: true
permalink: micro/2025/10/:title
---

Inspired by the best [video](https://youtu.be/vpSkBV5vydg?si=agAyCNeUCsiNIAGk) I have encountered on Unicode, I was inspired to create a visualiser of how unicode represents 
Hangul, the Korean writing system, that was covered in the video.

![A screenshot of the visualiser]({{ site.baseurl }}/assets/micro/unicode/hangul-visualiser.png){: width="750px"}

**Link to visualiser:** [https://zakuarbor.codeberg.page/unicode/hangul/](https://zakuarbor.codeberg.page/unicode/hangul/)

It is fascinating how one can represent all 11,172 possible comination so elegantly. The visualiser allows one to determine the codepoint of any Korean syllabic blocks.
For those unfamiliar with the language, Korean is made up of 19 consonants (자음) and 21 vowels (모음) though some sources may say there are 24 basic letters (Jamo). The number does differ depending 
on how you count the letters but we can agree that there the language has 51 Jamo (there are 24 basic letters and from these you could form more complex consonants and vowels).
To form a complete a syllable block (a word is made up of one or more of these blocks), there must be at least one consonant and one vowel that is attached to each other. 
A syllable block is made up of 3 components:

1. **An Initial constonant:** 19 possible consonants
2. **Medial vowel:** 21 possible vowels
3. **Final consontants (optional):** 27 potential consonants to choose from including consonant clusters if one chooses to include one (though for the formula to work out, we have 28 options, option 0 
being a "filler" (i.e. nothing)

[Wikipedia](https://en.wikipedia.org/wiki/Hangul#Letter_placement_within_a_block) has a great entry on how the letters are placed within a block. The purpose of the analyser is to 
visualise how Unicode computes the correct codepoint. There is actually no need to understand how the language works to understand how unicode is able to compute the codepoint associated with 
the block. 

Random but here's a great [UTF-8 playground](https://utf8-playground.netlify.app/) I encountered. I probably should update my visualiser/playground to include UTF-8 encoded representation.
