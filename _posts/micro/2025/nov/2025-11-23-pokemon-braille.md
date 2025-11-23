---
layout: micro
title:  "Braille in Pokémon Sapphire and Ruby Game and Manga"
date: 2025-11-23
categories: [micro, braille] 
published: true
permalink: micro/2025/11/:title
---

Pokémon Crystal was the first to introduce symbols or glyphs for players to decode according to my research. [\[1\]](#foot1)
Thankfully the Unknowns ressemble the English or the latin alphabet so the task to decode the ruins was feasible 
for children. However, in generation III, in the Hoenn region, decoding the ruins has gotten 
much more tricker with their use of Braille.

Braille is for the blind and the visual impaired and t0herefore would likely not be able to play 
the game. So the task of decoding the ruins would be a great challenge.

Reading the manga, Pokémon: La Grande Aventure - Rubis et Saphir, there's a single black page 
with random white dots. Confused I did some research and found out it was braille.

![a single black page with braille in white]({{ site.baseurl }}/assets/anime/pokemon-adventures-black-braille.png)
<p class = "caption">Random Braille at the end of chapter 21 (or 201)</p>

Since then, I noticed that each chapter would contain braille. This got me curious as to what it was. However, I had no success 
till I realized the braille was not localized and remained in Japanese braille. The game were localised though:


![DIG HERE In Braille English]({{ site.baseurl }}/assets/anime/pokemon-braille-eng.png)

![DIG HERE In Braille French]({{ site.baseurl }}/assets/anime/pokemon-braille-fr.png)

### WARNING: I know the neocities community has a distaste for AI but it has been used to aid in the translation

Through the power of vibe-coding on Gemini, I was able to create a primitive [translator](https://zakuarbor.codeberg.page/unicode/braille/):

![DIG HERE in the vibe-coded braille translator]({{ site.baseurl }}/assets/anime/braille-translator.png)
<p class = "caption">Screenshot from a <a href = "https://zakuarbor.codeberg.page/unicode/braille/">vibe-coded braille translator</a></p>

This tool comes in handy for Japanese as it's a language I am unfamiliar with and hence why I needed this braille translator.

![DIG HERE in the vibe-coded braille translator]({{ site.baseurl }}/assets/anime/pokemon-adventures-black-braille-kr.png)
<p class = "caption">Japanese braille to Kana support</p>

---

<details>
<summary>Failed Attempts to use AI to translate braille</summary>
AI (Gemini and ChatGPT) fails to translate Japanese braille into English. I provided both LLMs the braille in unicode and a screenshot of the braille
and the results were disappointing. Gemini was convinced the braille was in English meanwhile Chatgpt faired better recognizing it was not possible 
for the braille to English. Furthermore, ChatGPT stated it could not infer the message from the unicode but when provided with an image of the braille,
it incorrectly translate the message to `ガラスのつばさ` or `Wings of Glass`. As you may notice, the word appears to be shorter than what it should be, that i
is because ChatGPT deleted them by justifying they weren't standard Japanese words.

<img alt = "Gemini epically failing to translate" src ="{{ site.baseurl }}/assets/micro/misc/gemini-braille-fail.png">

</details>

---

The resulting kana that was translatable on the vibe-coded translator was: `おやこのたたかい あれかんえ つこいく`
I did skip one braille pattern during the translation as the vibe-coded translator did not recognise what it was so it's not a direct translation but it should be good enough for my use case.
The English translation is `Parent and child battles`. One important note about this page, this page appears at the end of volume 16 which I did not realize since the French translation is in an omnibus (i.e. multiple volumes are packed into one large collection).
According to [Bulbpedia](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_Adventures_chapters#FireRed_&_LeafGreen_arc) is titled `親子の戦い` or in English `Battle Between Father and Son`.

![Kanji to kana translation]({{ site.baseurl }}/assets/micro/unicode/pokemon-vol17.png)
<p class = "caption">Translation provided by <a href = "https://j-talk.com/vsppwgz">j-talk</a></p>

![title of chapter 216 of Pokémon Adventures in French and English]({{ site.baseurl }}/assets/anime/pokemon-adventures-ch216.png)
In each chapter, there is a corresponding braille which [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_Adventures_chapters) conveniently provides.
It was only after I gave up trying to decode and translate the braille, that I realized there was no relationship between the titles in both English (ChunYi) and French editions.
In a few weeks, I will be visiting my family so I should be able to determine if this is the case with the Korean edition as well since I do have a copy of the manga.

**Note:** Some editions of the English translations apparently has better subtitles that better reflects the braille:
```
It is subtitled Restarting (Japanese: 決意の再出発 Deciding to Restart) in the VIZ Media translation and Setting Off Again in the Chuang Yi translation. 
```
<p class = "caption">Description from <a href = "https://bulbapedia.bulbagarden.net/wiki/PS216">bulbapedia</a></p>

The vibe-coded braille to kana translator outputted: `けつい の さい す゛ はつ のまき` which when plugging into Chatgpt gives the following after prompting it to translate it into 
English that is natural sounding:
1. “The Chapter of Determination” (most natural, common in manga)

    決意の巻（けついのまき）

2. “The Beginning of Determination”

    決意の初（はつ）めの巻

3. “The Birth of Determination”

    決意の発（はつ）章

4. “The Size of Determination” (literal but natural)

    If you actually want “size” (サイズ):

    決意のサイズの巻

5. “Determination: First Chapter”

    決意・第一章（だいいっしょう）

The actual answer is the following:

![The Kanji and Kana of chapter 216]({{ site.baseurl }}/assets/micro/unicode/pokemon-adventures-ch216-jp.png)

or officially:

* VIZ: `Mixing It Up with Magcargo - Restarting` 	
* ChuangYi: `VS Magcargo - Setting Off Again` 
* Original: `VS マグカルゴ - 決意の再出発`

### Conclusion

The mysterious braille that the author dedicated an entire page to was simply `Parent and child battles`. Each chapter subtitle (if it exists in your edition) has a corresponding braille counterpart.
The braille in the English and French translation has not been localised.
I will try to update this page to answer if the Korean copy bothered to localise the braille or not once I gain access to my old copy at my parent's place.

<a name = "foot1"> 

[1] Based on [bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ruins_of_Alph) and from my personal recollections, there were no messages to decode in the original Gold and Silver editions

