---
layout: micro
title:  "Render Archaic Hirigana"
date: 2025-10-06
categories: [micro, utf, unicode] 
published: true
permalink: micro/2025/10/:title
---

What does does [`U+1B002`](https://www.compart.com/en/unicode/U+1B002) look like on your screen? `𛀂`

Did it look like some some unicode box inscribing the unicode value? That is because your system lacks the typefont to render the unicode.

If you visit the following wikipedia page on [変体仮名](https://ja.wikipedia.org/wiki/%E5%A4%89%E4%BD%93%E4%BB%AE%E5%90%8D), you'll likely notice the following:

![Screenshot of Wikipedia inable to render archaic hirigana]({{ site.baseurl }}/assets/micro/unicode/old-hirigana-bad.png){: width="500px"}

Instead of:

![Screenshot of Wikipedia rendering correctly archaic hirigana]({{ site.baseurl }}/assets/micro/unicode/old-hirigana-good.png){: width="500px"}

To resolve this, essentially install the true type font `*.ttf` file from [BabelStone](https://www.babelstone.co.uk/Fonts/Han.html) 

Credits to the following article as it outlines much clearly how to install the font:
[A Beginner’s Guide to Inputting Historical Kana: Installing a Font for “Hentaigana”](https://digitalorientalist.com/2022/10/04/a-beginners-guide-to-inputting-historical-kana-installing-a-font-for-hentaigana/).
I instead went through the harder route before reading this article by installing the font under `~/.local/share/fonts` and running `fc-cache -fv` to forcibly reload the font.

Turns out you can install the GUI similarly to what the article proposes for MacOS by opening the file on Linux (double-tap) and an option to install the font will appear:

![Linux Install Font via GUI]({{ site.baseurl }}/assets/micro/unicode/linux-font-installer.png){: width="750px"}

Refresh the page and you should now see `𛀂`

![What you should see if you refresh the page after installing font]({{ site.baseurl }}/assets/micro/unicode/blog-render-old-hirigana-good.png)

**Note:** For some reason Firefox on Private-Mode is unable to render the archaic Hirigana, not sure why
