---
layout: micro
title:  "Gundam With Decent Portrayal of Code"
date: 2025-08-27
categories: [micro] 
published: true
permalink: micro/2025/08/:title
---

Years ago I encountered a [Reddit post](https://www.reddit.com/r/Gundam/comments/116q77j/could_anyone_rate_her_code/) 
asking us redditors to rate a piece of code shown in [Mobile Suit Gundam 0083: Stardust Memory](https://gundam.fandom.com/wiki/Mobile_Suit_Gundam_0083:_Stardust_Memory).
This led to an interesting discussion and analysis of the code from a few redditors, particularly the analysis from gralamin who disected the code revealing a few interesting 
aspects of the code such as the potential architecture, OS, and purpose of the code.

![A scene from Gundam 0083 Stardust Memory]({{site.baseurl}}/assets/anime-code/gundam-0083-nina.png)

Based on the release date of the anime along with the provided code, we can infer the following:
* Code is written for x86-16-bit DOS based on 
    * the use of [far pointers](https://en.wikipedia.org/wiki/Far_pointer) 
    * reference to the DOS Command-line interpreter [COMMAND.COM](https://en.wikipedia.org/wiki/COMMAND.COM), the precursor of cmd.exe
* There is some IPC (Inter-process communication) going on whereby there is a parent process (named mother) and a child process
    * NOTE: [COMMAND.COM](https://en.wikipedia.org/wiki/COMMAND.COM) runs programs in DOS
* DOS system was set for Japanese locale using [JIS X 0201](https://en.wikipedia.org/wiki/JIS_X_0201) as their characterset

When I initially saw the post 3 years ago, I initially thought `broken¥n` was a typo seeing how there was a few spelling mistake in the document such as `equall` and `memeory`. However,
as gralamin alluded:

> I'm not sure what is up with the yen n. Maybe at the time \ was mapped to yen on japanese machines, in which case this would be a new line. 

After spending hours reading up on [character encoding](https://zakuarbor.codeberg.page/blog/halfwidth-fullwidth-encoding/) due to a request 
from a friend studying Linguistics, I now can confirm his speculation was indeed correct.

From the ASCII table, we can see that 0x5C maps to backslash `\n`

![ASCII Table](https://zakuarbor.codeberg.page/blog/assets/programming/encoding/ascii-table.png)

<p class = "caption">ASCII Table. Extracted from Wikipedia</p>

JIS X 0201 can be seen as an extension of ASCII where the upper unused bits were repurposed to contain [Katakana](https://en.wikipedia.org/wiki/Katakana) characters and a few other 
things. However there are some slight differences as highlighted in yellow:

![JIS X 0201 Table](https://zakuarbor.codeberg.page/blog/assets/programming/encoding/jis-c-6220.png)
<p class = "caption">JIS X 0201 Table. Extracted from Wikipedia</p>

As one can notice 0x5C no longer maps to baskslash `\n` anymore but rather to the Japanese Yen `¥`. This makes no difference to the compiler's perspective as from its perspective 
as `\` and `¥` has the same value. Wikipedia has a good comment about this effect:

> The substitution of the yen symbol for backslash can make paths on DOS and Windows-based computers with Japanese support display strangely, like "C:¥Program Files¥", for example.[14] Another similar problem is C programming language's control characters of string literals, like printf("Hello, world.¥n");. 

Whether intentional or not by the artist, this rendering shows some realism in the show (let's ignore the fact the female lead is not Japanese).
