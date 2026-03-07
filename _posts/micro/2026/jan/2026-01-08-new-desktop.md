---
layout: micro
title:  "New Year, New Desktop"
date: 2026-01-08
categories: [micro] 
published: true
permalink: micro/2026/01/:title
---

A new year, a new computer, and a new experience, building my first desktop. It's only been a [year]({{ site.baseurl }}/micro/2024/10/framework) since I got a Framework laptop which is already sufficent 
for my current needs so there wasn't any good reason to get a new computer. While most think GPUs are only good for gaming and more recently for running your own local LLM, 
it can be used for more interesting things, compute such as numerical analysis and simulations. Not that I'm sufficiently motivated to do so myself. 
Perhaps I'll write my final undergraduate Math paper on numerical analysis and simulations, but only time will tell.

2026 is not the most ideal year to build a desktop, especially due to the rising RAM costs we have been experiencing since late September:


![RAM Price trends]({{ site.baseurl }}/assets/micro/misc/ram-price-trend.png)
<p class = "caption">Source: <a href = "https://ca.pcpartpicker.com/trends/price/memory/">PC Parts - Amount in Canadian Dollars</a></p>

But alas, I already started buying PC components in late summer so I decided to take the hit and buy one of the few last batches (at least in 2025) of RAM that Crucial will ever provide 
as the parent company Micron decided to [exit the market](https://investors.micron.com/news-releases/news-release-details/micron-announces-exit-crucial-consumer-business) 
to focus on building HBM for the AI & Datacenter market. If you receive RAM from Crucial in February, you truly have the last few batches that'll ever be manufactured.

![PC Component prices without tax]({{ site.baseurl }}/assets/micro/misc/parts-prices.png){: width="500" }

Not including our 13% tax, the total came up to \\$2346.54 CAD, an enormous sum for a student like myself. I did get receive an employee discount of \\$134.92 CAD which did help but the amount was 
way less than what I have initially expected (i.e. $300 USD).

As this was my first build, I ended up falling for a lot of rookie mistakes which includes:
* Forgetting to peel off the sticker from the CPU cooler before placing it on top of the thermal paste
* Having my screwdriver shaft fall down inside a narrow part of the PC case which caused me needing to unscrew the fans built-into the case to remove it
    * my screwdriver has a detachable shaft to make the driver shorter or taller
* Downloading the wrong bios: B650M RS PRO v.s. B650 RS PRO **WIFI**
* Plugging the display cable from the motherboard IO instead of the GPU IO
* Not plugging enough PCI-E cables between the GPU and Power Supply
    * This explained why the GPU was not being detected originally and would have been missed if I didn't try to perform some benchmarking

## Specs and Performance

<div class="language-plaintext highlighter-rouge"><div class = "highlight"><pre class = "highlight"><code>$ fastfetch
<font color="#1E78E4"><b>             .&apos;,;::::;,&apos;.</b></font>                 <b>zaku</b>@<b>fedora</b>
<font color="#1E78E4"><b>         .&apos;;:cccccccccccc:;,.</b></font>             -----------
<font color="#1E78E4"><b>      .;cccccccccccccccccccccc;.</b></font>          <font color="#1E78E4"><b>OS</b></font>: Fedora Linux 43 (Workstation Edition) x86_64
<font color="#1E78E4"><b>    .:cccccccccccccccccccccccccc:.</b></font>        <font color="#1E78E4"><b>Host</b></font>: B650M Pro RS WiFi
<font color="#1E78E4"><b>  .;ccccccccccccc;</b></font><font color="#C0BFBC"><b>.:dddl:.</b></font><font color="#1E78E4"><b>;ccccccc;.</b></font>      <font color="#1E78E4"><b>Kernel</b></font>: Linux 6.17.12-300.fc43.x86_64
<font color="#1E78E4"><b> .:ccccccccccccc;</b></font><font color="#C0BFBC"><b>OWMKOOXMWd</b></font><font color="#1E78E4"><b>;ccccccc:.</b></font>     <font color="#1E78E4"><b>Uptime</b></font>: 2 hours, 2 mins
<font color="#1E78E4"><b>.:ccccccccccccc;</b></font><font color="#C0BFBC"><b>KMMc</b></font><font color="#1E78E4"><b>;cc;</b></font><font color="#C0BFBC"><b>xMMc</b></font><font color="#1E78E4"><b>;ccccccc:.</b></font>    <font color="#1E78E4"><b>Packages</b></font>: 2517 (rpm)
<font color="#1E78E4"><b>,cccccccccccccc;</b></font><font color="#C0BFBC"><b>MMM.</b></font><font color="#1E78E4"><b>;cc;</b></font><font color="#C0BFBC"><b>;WW:</b></font><font color="#1E78E4"><b>;cccccccc,</b></font>    <font color="#1E78E4"><b>Shell</b></font>: bash 5.3.0
<font color="#1E78E4"><b>:cccccccccccccc;</b></font><font color="#C0BFBC"><b>MMM.</b></font><font color="#1E78E4"><b>;cccccccccccccccc:</b></font>    <font color="#1E78E4"><b>Display (BenQ GW2480)</b></font>: 1920x1080 @ 60 Hz in 24&quot; [External]
<font color="#1E78E4"><b>:ccccccc;</b></font><font color="#C0BFBC"><b>oxOOOo</b></font><font color="#1E78E4"><b>;</b></font><font color="#C0BFBC"><b>MMM000k.</b></font><font color="#1E78E4"><b>;cccccccccccc:</b></font>    <font color="#1E78E4"><b>DE</b></font>: GNOME 49.2
<font color="#1E78E4"><b>cccccc;</b></font><font color="#C0BFBC"><b>0MMKxdd:</b></font><font color="#1E78E4"><b>;</b></font><font color="#C0BFBC"><b>MMMkddc.</b></font><font color="#1E78E4"><b>;cccccccccccc;</b></font>    <font color="#1E78E4"><b>WM</b></font>: Mutter (Wayland)
<font color="#1E78E4"><b>ccccc;</b></font><font color="#C0BFBC"><b>XMO&apos;</b></font><font color="#1E78E4"><b>;cccc;</b></font><font color="#C0BFBC"><b>MMM.</b></font><font color="#1E78E4"><b>;cccccccccccccccc&apos;</b></font>    <font color="#1E78E4"><b>WM Theme</b></font>: Adwaita
<font color="#1E78E4"><b>ccccc;</b></font><font color="#C0BFBC"><b>MMo</b></font><font color="#1E78E4"><b>;ccccc;</b></font><font color="#C0BFBC"><b>MMW.</b></font><font color="#1E78E4"><b>;ccccccccccccccc;</b></font>     <font color="#1E78E4"><b>Theme</b></font>: Adwaita [GTK2/3/4]
<font color="#1E78E4"><b>ccccc;</b></font><font color="#C0BFBC"><b>0MNc.</b></font><font color="#1E78E4"><b>ccc</b></font><font color="#C0BFBC"><b>.xMMd</b></font><font color="#1E78E4"><b>;ccccccccccccccc;</b></font>      <font color="#1E78E4"><b>Icons</b></font>: Adwaita [GTK2/3/4]
<font color="#1E78E4"><b>cccccc;</b></font><font color="#C0BFBC"><b>dNMWXXXWM0:</b></font><font color="#1E78E4"><b>;cccccccccccccc:,</b></font>       <font color="#1E78E4"><b>Font</b></font>: Adwaita Sans (11pt) [GTK2/3/4]
<font color="#1E78E4"><b>cccccccc;</b></font><font color="#C0BFBC"><b>.:odl:.</b></font><font color="#1E78E4"><b>;cccccccccccccc:,.</b></font>        <font color="#1E78E4"><b>Cursor</b></font>: Adwaita (24px)
<font color="#1E78E4"><b>ccccccccccccccccccccccccccccc:&apos;.</b></font>          <font color="#1E78E4"><b>Terminal</b></font>: Ptyxis 49.2
<font color="#1E78E4"><b>:ccccccccccccccccccccccc:;,..</b></font>             <font color="#1E78E4"><b>Terminal Font</b></font>: Adwaita Mono (11pt)
<font color="#1E78E4"><b> &apos;:cccccccccccccccc::;,.</b></font>                  <font color="#1E78E4"><b>CPU</b></font>: AMD Ryzen 7 9700X (16) @ 5.58 GHz
                                          <font color="#1E78E4"><b>GPU</b></font>: AMD Radeon RX 9070 XT [Discrete]
                                          <font color="#1E78E4"><b>Memory</b></font>: 3.67 GiB / 30.92 GiB (<font color="#2EC27E">12%</font>)
                                          <font color="#1E78E4"><b>Swap</b></font>: 0 B / 8.00 GiB (<font color="#2EC27E">0%</font>)
                                          <font color="#1E78E4"><b>Disk (</b></font><font color="#1E78E4"><b>/</b></font><font color="#1E78E4"><b>)</b></font>: 17.12 GiB / 928.91 GiB (<font color="#2EC27E">2%</font>) - btrfs
                                          <font color="#1E78E4"><b>Local IP (wlp6s0)</b></font>: 
                                          <font color="#1E78E4"><b>Locale</b></font>: fr_FR.UTF-8

                                          <span style="background-color:#241F31">   </span><span style="background-color:#C01C28">   </span><span style="background-color:#2EC27E">   </span><span style="background-color:#F5C211">   </span><span style="background-color:#1E78E4">   </span><span style="background-color:#9841BB">   </span><span style="background-color:#0AB9DC">   </span><span style="background-color:#C0BFBC">   </span>
                                          <span style="background-color:#5E5C64">   </span><span style="background-color:#ED333B">   </span><span style="background-color:#57E389">   </span><span style="background-color:#F8E45C">   </span><span style="background-color:#51A1FF">   </span><span style="background-color:#C061CB">   </span><span style="background-color:#4FD2FD">   </span><span style="background-color:#F6F5F4">   </span>
</code></pre></div></div>


![s-tui CPU stress test]({{ site.baseurl }}/assets/micro/misc/s-tui-desktop.png)
<p class = "caption">s-tui output - don't bother straining your eyes to read the values</p>

The readings below are just a [snapshot @ 11:37]({{ site.baseurl }}/assets/micro/misc/s-tui-desktop2.png) ran on a different date from the image above:
* **Tctl:** 88.4
* **Tccd:** 86.1&deg;C
* **Core Frequency Avg:** 5283.2MHz

Based on running s-tui CPU stress test for 10+ minutes, the system maintained temperatures below 90&deg;C from what I have observed (though I haven't kept an eye on it for all 10+ minutes) 
indicating the cooling and thermal paste appear to be working as intended. For Ryzen 7 9700X, the [maximum operating temperature (Tjmax) is 95](https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html)&deg;C 
which my system is comfortably operating below even under sustained stress workloads. 
I am specifically tracking Tccd1 (the temperature associated with the physical Core Complex Die) rather than Tctl, as Tctl is a control value used for fan scaling or whatever cooling system used as stated in
the [K10temp Linux Kernel Driver](https://docs.kernel.org/hwmon/k10temp.html):
```
Tctl is the processor temperature control value, used by the platform to
control cooling systems. Tctl is a non-physical temperature on an
arbitrary scale measured in degrees. It does _not_ represent an actual
physical temperature like die or case temperature. Instead, it specifies
the processor temperature relative to the point at which the system must
supply the maximum cooling for the processor's specified maximum case
temperature and maximum thermal power dissipation.
```
**CCD** is also another AMD terminology for Core Complex Die which you can read more about in [this article](https://qsantos.fr/2024/10/03/amd-cpus-ccds-and-ccxs/) or in [this whitepaper](https://docs.amd.com/api/khub/documents/iZ5eCtQ5v6PyPN7wEd8HQg/content).
But essentially for Zen 5 architecture, you can think of a CCD as a collection of CPU cores with a shared L3 cache.

With an average clock rate of 5283.2MHz, the CPU was reaching close to its theoretical peak of 5.5GHz as expected. For context, the base clock speed is advertised to be 3.8GHz.

As the RAM was advertised to go 6000MHz (6000MT/s), I enabled EXPO (XMP) on the bios to utilise the full advertised speed instead of the default slower speed.
```bash
$ sudo dmidecode --type 17 | grep -E "Configured Memory Speed"
	Configured Memory Speed: 6000 MT/s
	Configured Memory Speed: 6000 MT/s
```

Here are the blender results:

|--|--|--|--|
|Device|Monster|Junkshop|Classroom|
|Radeon 9070xt (dGPU)|1607.56|790.52|711.39|
|Ryzen 7 9700X (CPU)|173.95|118.89|87.12|

A significant improvement compared to my Framework laptop:

|--|--|--|--|
|Device|Monster|Junkshop|Classroom|
|Radeon RX 7700S (dGPU)|416.25|222.96|188.13|
|Radeon 780M (iGPU)|143.59|77.86|67.42|
|Ryzen 9 7940HS (CPU)|107.62|71.33|52.52|

---

## Why not X3D CPU?

The decision was mainly due to pricing, RAM prices doubled than what I allocated in my budget which I 
did slightly exceeded by a few Canadian dollars. An X3D chip would have costed an extra few hundred 
Canadian dollars and considering I do not play videogames, there was little reason to do so. 
With RAM prices doubling, an X3D chip would probably help alleviate the lack of memory in your system 
as it "hides" RAM latency due to its large L3 cache. But that is also another reason why I avoided 
the X3D chip which may sound counter-intuitive. With its abnormally large L3 cache for a desktop CPU, 
I felt that it would not be good for algorithm performance analysis as it reduces trips to the main 
memory which will diminish the effect of a poorly designed memory-bound algorithm.
