---
layout: micro
title:  "Migrating Away Github: One Small Step To Migrate Away From US BigTech"
date: 2025-10-03
categories: [micro] 
published: true
permalink: micro/2025/10/:title
---

As title suggests, I no longer actively use Github as my personal Git hosting service. This does not mean I have abandoned Github entirely as I still visit the site and use it 
regularly for work. 

For a while, the code for this site, my [blog](https://zakuarbor.codeberg.page/blog), and my personal side projects have been hosted on [Codeberg](https://codeberg.org/), 
a non-profit German organization that hosts their servers in Europe. Similar to my migration from Wordpress to Github, none of my content have been deleted but rather has been 
archived for data preservation and to prevent [link rot](https://en.wikipedia.org/wiki/Link_rot). I originally discovered and created my Codeberg account when trying to replicate 
performance claim made by some in the [Linux French forums](https://linuxfr.org/). 

This move does not imply any hatred or dislike of Github as a platform as it has served me well over the year. Rather, it reflects my gradual and slow effort to reduce reliance 
on Big Tech, especially those operated by large US companies. As the 2nd part of the title suggests, I have been wanting to [DeGoogle](https://en.wikipedia.org/wiki/DeGoogle) 
and big tech in general for years. However, it has been hard to justify the move as I honestly don't have too much qualms providing data to these giants. This seems very 
contradictory to others as I have made this argument a lot to push others to use Linux or any other open source POSIX-compliant OS (e.g. BSD). Though you should seriously 
consider leaving Windows if you have not have done so, it's a bloated privacy-invading OS. I believe in the [Right to privacy](https://en.wikipedia.org/wiki/Right_to_privacy) 
which Big Tech does not provide at all.

Due to the recent statements and actions coming from the United States, I have made the decision to start the migration to gain more independence from US tech and 
start searching for more open alternatives. I am still a slave to Google, relying on their entire ecosystem such as Google Playstore, Google Search, Google Drive, Gmail, Maps, 
Google Auth, Sign In via Google and Youtube. To minimize disruption and pain, I will be making a slow transition starting with replacing services and software that are the easiest 
to replace which happened to be Github. Currently, I am slowly transitioning my email to [ProtonMail](https://proton.me/mail), migrating the most essential services first 
such as Banking. I do plan to keep my original email to remain in contact with anyone from the past and to tie any my insecure or data-invading services to Gmail, 
effectively creating a two-tier email system.

I do believe it is important to remain pragmatic when moving away from US tech. It is not realisitic to completely cutt off entirely from US tech given their dominant position 
in the market. After all, I earn my living from US companies who frankly create awesome products and do a lot of R&D that benefits society as a whole. 

In other words, it is important to have a balance and identify which services can be replaced the easiest and which pose the greatest risk if access were suddenly restricted for 
[injust reason](https://www.nytimes.com/2025/06/20/technology/us-tech-europe-microsoft-trump-icc.html). As part of the effort, I have made an offline backup of my 
data on Google Drive (though whether the archives contain any corruption, time will tell).

I still have not identified the next platform to replace but here are some ideas:
 * **Authenticator** - I need cloud sync. Losing my phone on the bus nearly locked me out of all my accounts which cloud backup to my tablet saved me
    * I carry a Yubikey around with me but not every service supports this yet
    * Perhaps Proton Auth could be an alternative. It's open source and it's not from a big American firm
* **Office Suite** - A cloud office suite such as Google Drive are hard to give up due to its ease of sharing and collaboration tools. The most realistic path is to self-host.
    * ProtonDrive nor does [La Suite](https://lasuite.numerique.gouv.fr/), French Government Suite, have replacement for Presentation and Spreadsheet at the time of writing
    * Collabora and OnlyOffice seems to be the only alternatives
* **Phone** - I currently use a Google Pixel 6a which has served me well till the summer when Google released an [update that reduces battery capacity](https://www.pcmag.com/news/google-pixel-6a-limit-battery-life-capacity-charging-performance-july-8)
    * I am hesitant to move to GrapheneOS since I am not sure if it supports my workplace's authentication apps
    * Fairphone 6 would be ideal but is not available in my region so for now Samsung appears to be the only practical alternative though I don't plan to replace my phone until reaches end-of-life as I have always done with my previous phones
* **Cloud Provider** - At the moment, I don't maintain any cloud instances since I no longer have a need for it (I previously used DigitalOcean and free-tier Oracle cloud).
I no longer have any cloud instances with any provider currently as I no longer have any use for them (I used Digital Oceans previously)
    * OVHCloud - French cloud service whom I found out about via an [article from the Register](https://www.theregister.com/2025/08/27/ovhcloud_interview/) where Microsoft could not 
guarantee data sovereignty. However it does not seem they have any ROCm enabled GPUs which may pose an issue if I wanted to do any ROCm related work in the future (though I guess 
it would make more sense to use CUDA or write HIP programs)
* **Search Engine:** Google has been great to me thus far. I know others complained its search results have gotten worse over the years but it has been far better than other search 
engines I have used in the past such as Yahoo, DuckDuckGo, Brave Search and Ecosia. I heard Kagi is a good alternative, I should try the free version and see for myself before 
I make any commitment.
