---
layout: micro
title:  "Binary Dump via GDB"
date: 2025-10-02
categories: [micro] 
published: true
permalink: micro/2025/10/:title
---

Recently at work, I've been relying on a very handy tool on GDB called `dump memory` to dump the contents of any contiguous range of memory. 
I first came aware of this tool from a [stackoverflow](https://stackoverflow.com/questions/16095948/gdb-dump-memory-in-specific-region-save-formatted-output-into-a-file) answer 
that a coworker linked as each of us had a need to dump the contents of memory copied from the GPU to the host memory for our respective tickets.

**Syntax:** `dump memory <filename> <starting address> <sending address>`

For instance,

```
dump memory vectorData.bin 0x7ffff2d96010  0x7ffff53bba10
```

or suppose you have a vector `vec`, you could dump the contents of the vector via:

```
dump memory vectorData.bin vec.data() vec.data()+vec.size()
```
