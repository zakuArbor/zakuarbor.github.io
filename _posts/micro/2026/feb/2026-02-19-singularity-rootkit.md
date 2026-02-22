---
layout: micro
title:  "Singularity Rootkit"
date: 2026-02-19
categories: [micro, linux, rootkit] 
published: true
permalink: micro/2026/02/:title
---

An interesting yet scary piece of software I read about on the weekly Linux news is [Singularity](https://lwn.net/Articles/1053099/), an open-source rootkit, 
which can hide itself from being detected, at least does a decent job at it. It hides its existence by removing itself from the list of active kernel modules, 
and also attempts to hide attacker-controlled processes, network communication, and related files. As it has kernel-level access, it can hook and
intercept syscalls that could reveal files that singularity wishes to hide from.

Not totally related but this reminds me of a shared library exploit whereby the shared library intercepts the filesystem calls to `readdir` and `getdents` which is a neat trick. Though this is at a
userspace-level exploit and requires one to preload the malicious library (`LD_PRELOAD`).

The scary thing about this rootkit and any decent rootkits in general is its ability to hide itself. It is designed to hide itself thanks to it's kernel-level privileges. It can intercept calls
to various filesystem and network syscalls and APIs to conceal itself. This is why I am against the idea of allowing kernel-level anti-cheat code to be on my system. The idea of introducing a new level/ring
in between userspace and kernel space or to introduce some new capabilities in userspace with controlled but limited and secured access to the kernel has been floated for years
(though we do have eBPF which sort of functions like this). The [2024 Crowdstrike Incident](https://en.wikipedia.org/wiki/2024_CrowdStrike-related_IT_outages)
for instance has compelled Microsoft to roll out a new security level to hopefully prevent this from ever occurring. Though it is not the issue of ensuring availability of the system that I am worried about,
its the fact that we are placing trust to a non-open source third-party to have access to the kernel. Who knows what craziness they could do even if not intentionally (i.e. supply chain attacks).

Thankfully it would appear that this rootkit can be detected if observed at a third-party computer (i.e. examining the hard drive on another computer) or capture network traffic on a non-infected system.
Fun fact, you can snoop harddrives without knowing their login as long as the drive is not encrypted. This was an eye-opener experience and made me think of my family desktops that we threw out
over a decade ago.

On a weird note, Singularity also happens to be the name of an [experimental microkernel OS](https://en.wikipedia.org/wiki/Singularity_(operating_system)) by Microsoft that relied on software construction and
memory safe language to ensure memory isolation and failure containment.

