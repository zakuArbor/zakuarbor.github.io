---
layout: micro
title:  "Firefox - MP4 Cannot be Decoded"
date: 2025-11-21
categories: [micro, firefox] 
published: true
permalink: micro/2025/11/:title
---

One constant issue I have with Firefox is the instability of playing videos outside of Youtube. Often when watching anime online, I would often encounter issues where skipping even a second would cause the 
video to stop playing. Hence why I have mention in my [FAQ]({{ site.baseurl }}/faq) that I use Brave, a privacy-focused chromium browser, to stream anime.

While making my [gallery]({{ site.baseurl }}/gallery) featuring retro tech on neocities, I encountered a similar issue. Firefox was unable to loop a MP4 video I uploaded. Though Brave unsurprisingly could.

![An example of video not rendering on Firefox]({{site.baseurl}}/assets/micro/misc/hvec-mp4-issue.png)

The simple solution to the problem was to convert the MP4 video into webm, an open and royalty-free media format which is the image you see on the top meanwhile the video on the bottom was encoded in HEVC (H.265) via ffmpeg (not `ffmpeg-free`).
I was under the impression that Firefox supported HEVC but it turns out there are only limited [support](https://support.mozilla.org/en-US/kb/audio-and-video-firefox).
Based on the Error displayed on the video and Firefox complaining decoding error on the Web conole, I knew Firefox was missing some type of decoder to play my MP4 file.

![developer console indicates decoder issue]({{ site.baseurl }}/assets/micro/misc/firefox-decode-error.png)

Placing `about:support#media` on the Firefox address bar reveals everything I needed to know: 

![developer console indicates decoder issue]({{ site.baseurl }}/assets/micro/misc/firefox-codec.png)

Despite having HEVC en/de-coders on my Linux system, I needed to enabled them via Firefox configuration (`about:config`):
* `media.hevc.enabled`
* `dom.media.webcodecs.h265.enabled`

However, I opted to convert my MP4 file into webm to open access to all visitors. 


HEVC is a patented code which based on [Wikipedia](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding#Patent_license_terms) 
only waives royalties on software-only implementations (and cannot be bundled with hardware).

![developer console indicates decoder issue]({{ site.baseurl }}/assets/micro/misc/firefox-codec-2.png)

**Note:** "Prise en charge" is "Supported" and "Décodage logiciel" is "Software Decoder" in English

---

Note: Not a support on Neocities so the video is hosted on codeberg
