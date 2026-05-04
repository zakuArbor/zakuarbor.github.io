---
layout: post
title: A Collection of Comments from my OS Reading Group 
description: A collection of my comments I shared with an OS Reading Group
categories: [programming, c/c++, os]
---

There is a large online [Software Internals Book Club](https://eatonphil.com/bookclub.html) that goes through books covering typically covering topics in databases, distributed systems, and software performance.
Currently it is on a pause and likely will resume by the end of the month. The book being read is OSTEP, the [best and free OS textbook](https://pages.cs.wisc.edu/~remzi/OSTEP/). The style of writing is very 
inviting and easy to follow unlike other traditional books. It is also well organised into 3 parts: Virtualisation, Concurrency, and Persistence.

Thus far, we have covered the first 17 chapters covering topics ranging from how the OS 'virtualises' the CPU (aka give the 
illusion the CPU has the entire CPU to itself), how OS schedules processes up to address spaces which eventually builds up to Page tables (not yet covered but is the very next topic).

Here are some samples of what I shared with the group (I will be anonymising any names for privacy reasons). But to begin, here are some quotes I liked:

> You should be using Emacs. If you are using vi, there is probably something wrong with you. If you are using something that is not a real code editor, that is even worse

and

>  Student: So we have to think? Well, I’m up for that. I mean, what else do I have to do anyhow? It’s not like I have much of a life outside of this book. 
> Professor: Me neither, sadly. So let’s get to work!

**Note:** I use VIM and not emacs but nonetheless a funny comment


**Chapters 1 and 2:** Introduction

The first two chapters was an introduction to OS and the key concepts it plans to cover. Giving us a sneak preview of what is to come and does a good job explaining the role of the OS and how each piece 
is connected to each other. It mentions how OS can be seen as a resource manager where each CPU, memory, and disk is a resource and it is the OS's job to manage these resources efficiently or "fairly" with 
others. Furthermore, it mentions how the OS gives the "illusion" that the system has a large of number of virtual CPUs to allow many programs to seemingly run at once by "virtualising" the CPU. It also 
mentions how the OS needs to provide primitives to address correctness in concurrent programs where a program can have many concurrent executing threads. There was a lot of topics covered so 
I cannot mention them all but it mentioned about the difference between kernel and user mode, what traps are briefly and the need for hardware support.

In response to someone's comment on how the book uses the term "virtualisation" in a more theoretical sense rather than the commonly adopted meaning of virtualisation technology such as KVM and QEMU:

> Virtualisation in a general sense is to create a "virtual" version of a something such as a resource. Two main virtualisation discussed briefly in this week's reading is the CPU and memory. The OS gives the illusion to the process that it has the entire CPU and memory to itself. In reality, there are only a finite number of CPU cores and memory in the system. In other words, the process thinks it has all the memory and CPU to itself exclusively but in reality, it is sharing CPU and memory among many different processes. The OS is doing the work behind the scenes to schedule, allocate, and etc. Virtualisation removes the need for the process to be aware of other processes in the system to ensure it doesn't touch other process's memory and hog hardware resources. The OS has a way to ensure resources are shared among many processes and make it seem like multiple processes can run simulatenously (concurrency) on a single core CPU.
>
>
> In sprit, virtualisation solutions such as virtual machines is similar to what the author is talking about. Maybe it's a bit of a stretch but a VM is a virtual instance of a machine. It gives the guest OS the illusion that it has all the CPU and physical memory even though in reality it does not. The guest OS does not need to think about other the existence of the "OS" and processes in the host machine, it just focuses on itself. This provides both simplicity and isolation.

In response to their interpretation of the following text: "Don’t forget that each instruction of the program is in memory too; thus memory is accessed on each instruction fetch.", I didn't exactly agreed entirely  with their take of the sentence but it was not wrong either.

> The way I read this sentence differs from your perspective. When the OS is trying to execute a program, it creates a virtual address space to the process. We typically load into memory the executable instructions which should be located in the read-only code section of the address space. Important to distinguish executuable instructions and processes. Processes are "running" instances and executable is simply a file containing metadata and machine instructions. i.e. With one executable, you can have many instances (processes) of it running on the machine. For a process to advance to the next instruction, the CPU needs to fetch the next instruction from the process's address space. Thus "Memory is accessed all the time when a program is running".
>
> In regards to caches, you are correct about instructions being cached. To expand a bit on this topic, on modern CPUs, for each level in the cache hierarchy (maybe not on L3 cache), there is a separation between data (d) and instruction cache (i) so you may see when profiling your code L1i, L2i, L1d, L2d. If instruction fetch works similarly to how data fetching works, the CPU will receive more than what it asks for from the main memory due to something called cacheline. There's more to just instruction and data caching, on the CPU, there is a specific cache on the MMU (memory management unit) for caching virtual to physical address mapping (TLB - translation lookaside buffer) which we will see in later chapters. Exciting topics.

I no longer recalled what the conversation was about but the conversation included software in flight control systems and here was my comment out of context:

> For flight control systems, what is important is reliability and predictability I believe and not raw performance. In such scenario, it would be more ideal to use a RTOS (realtime OS) where it's runtime behavior is much more predictable.QNX and seL4, freeRTOS are such examples.
>
> In regards to bound checking and code correctness, you might be interested in eBPF and seL4 microkernel. eBPF has gotten a lot of attraction in the Linux community as it provides a sandbox that runs on kernel space. ebpf programs provided in userspace are verified in the kernel for "safety" by the ebpf verifier before execution can happen which guarantees (at least in theory) no infinite loops, no dead code (i.e. all instrucitons must be reachable), and with some memory restriction guarantees.
>
> seL4 is a microkernel RTOS that has been mathematically verified for correctness which is extremely rare and it's written in C. I definitely need to read more on this OS but it's been on my to read list: [https://sel4.systems/About/whitepaper.html](https://sel4.systems/About/whitepaper.html)
>
> I've mentioned the term microkernel a few times. Microkernel as the name implies removes a lot of the components that a typical (monolithic) OS is composed of such as the networking stack, file system, and drivers. OSTEP containing sections on filesystem is obviously in the perspective of a monolithic OS but most of the key concepts are the same anyways. Microkernel approach is interesting and it will be interesting to take a look into how different microkernels overcome or at least try to mitifate overhead costs due to message passing.

Someone did comment how flight control systems are concerned about context switches as it can lead to non-determinism of latency bounds which I do recall being a concern raised in the texts I read up on for RTOS.

**Chapter 3:** Processes

The chapter talked what a process is (i.e. a running program) and how a program is itself just a lifeless piece of data containing static instructions and static data. How time sharing of CPU allows us to 
have programs run concurrently by giving each program a tiny slice of the CPU and this is how it gives us the illusion that the CPU is runnign multiple programs parallely (concurrency and parallelism are 
two concepts that seem the same but are actually different). It also briefly mentions how programs are created and executed, what a stack pointer and program counter are, the various states a process can be 
(i.e. running, ready, blocked), what a zombie state is and etc.

In response to a question how one can turn to the OS to obtain better performance, I briefly mentioned the following that one could consider (I am no expert, I am just a Mathematics student):

> As you alluded to, you can tune the OS to have system performance gains for your workloads. Let's ignore RTOS and focus on what system performances you can do on Linux and why.
> 1. Schedulers: there exists different schedulers you can use to better address your workloads. For instance, Latency-criticality Aware Virtual Deadline (LAVD) scheduler was created from what I recall for gaming workloads on Linux (i.e. for the Steam Deck) to reduce stuttering during gameplay. While the deadline is meant for gaming, Meta seem to also adopted this scheduler for some of their servers as it suited their workloads well [^1].
> 2. CPU: Context switching is great to juggle between many different threads but it comes at the cost, mainly due to non-effective use of caches. You can pin threads (called thread affinity) to certain CPU cores. If you are aware of the hardware you are executing on, you can go even further and ensure threads sharing the same global data reside in the same die to share the same L3 cache (e.g. for AMD Zen 5 architecture, this would be cores in the same CCD or CCX in older architectures). This helps make better use of caches and reduce cache coherency contentions. Thread migration can be costly.
> 3. Tickless Kernel: You can configure the Linux kernel to be "tickless" to avoid the regular timer interupts which can improve CPU intensive workloads by reducing jitters. Here's an excerpt where I first heard this from [^2]:
> > The periodic interrupt has further negative effects. For instance, it pollutes the cache and TLB. As a fine- grained effect of jitter, it degrades performance of codes that rely on barriers between threads, such as frequently happens in OpenMP
> -- The Art of HPC Volume 1 (1.7.2)
> 4. Large Page: as name implies you can change the size of the page which databases may employ. Great for memory-intensive applications if data tends to be clustered (spatial locality) from my understanding by reducing TLB misses
> 
> [^1] [https://lwn.net/Articles/1051430/](https://lwn.net/Articles/1051430/)
>
> [^2] [https://github.com/VictorEijkhout/TheArtofHPC_pdfs/tree/main/vol1](https://github.com/VictorEijkhout/TheArtofHPC_pdfs/tree/main/vol1)

**Chapter 5:** Process API

The chapter discussed various APIs when working with processes such as `exec()`, `fork()`, `wait()`, `kill()`, etc. It also talked about UNIX pipes and how a process is created.

> What stood out for me was how the separation of the calls between fork() and exec() allows the shell to run some code in between. I have no clue why this piece of fact stood out to me as I have in the past took advantage of this feature a fair bit in the past. For instance, the prerequisite course to operating system (a 2nd year course) at my former university required us to implement a shell so we needed to implement redirection as described in the readings and I recall pipes worked in a similar way. I also made use of this to do some setup for a Linux Pluggable Authentication (PAM) I worked on years back.
> 
> I recall when I took OS, we made a lot of memes and jokes relating to kill such as a parent killing their child. kill is probably not the best name to encapsulate its abilities (as signals does more than terminating a process) and can inevitably make young students to spawn jokes about the name but it is hard to change names once it becomes adopted widely in the industry.

**Chapter 9 & 10:**: Multi-Processor Scheduling

After going through different scheduling policies that exist and their effects on turnaround time and response, this chapter presented difficulties getting our traditional schedulers originally designed for 
single core CPUs to work effectively on multi-processor systems that are now common in our everyday lives. Previously covered scheduling policies include FIFO, Shortest job first, shortest time to completion first, round robin, multi-level feedback queue, lottery scheduling, and Linux Completely Fair scheduler.

One of the major issues with multi-processor scheduling is that we now need to care about how to share data among multiple processors, cache coherency problems and correctness. This is my response to what others 
have discussed on the difficulties and complexity multi-processor systems introduced to us programmers:

> As others stated, when working on multiple processors one does need to care about cache coherency and cache locality for performance. Pinning threads to CPU cores is one of the ways to mitigate thread migration (i.e. executing a thread in another core and thereby not making use of cache locality and could trigger cache coherency issues if the cache has been invalidated). This is called thread affinity which I mentioned in week 2. However, this could cause a load unbalance but one looser approach is to set the thread to be pinned in the same die that shares the same L3 cache. On AMD Zen 5 CPUs, cores residing in the same CCD share the same L3 cache. There are some CPUs that can have two CCD meaning you could have 6-8 cores packed together in a die that shares the same L3 cache so there will be performance more noticeable penalty if a thread were to migrate from one CCD to another. While pinning a thread to a set of CPU cores that share the same L3 cache will not take full advantage of L1 and L2 cache, it nonetheless helps alleviate the workload imbalance a bit and reduce cache coherency contentions. Though in enterprise or HPC world, I would imagine they would have to consider distributed topological layout on top of NUMA topology. So it likely becomes even more important to ensure data resides within some locality at the node level and then at the NUMA level (like the CPU L3 cache I mentioned earlier). I'm not exactly sure how well aware the Linux schedulers are of this type of this inter/intra toplology by default or if they rely on some scheduling software like SLURM (heard of it but never taken a close look at it yet). I know traditionally we scaled vertically but in the past decade with the rise of cloud computing, companies have been scaling horizontally as well. Since MPI exists, HPC probably did scale horizontally out of necessity and probably have specialised schedulers to handle this.

**Chapter 12 & 13:** Address Virtualisaiton

The chapter discussed on the importance and reason why address virtualisation is needed and the address space. Someone made a comment on the arbitrary convention of the direction of how the stack grows and this was 
my response:

> While I am not sure about the literature convention of the direction of the stack and heap growth, in practice there is an architectural dependent aspect to the growth of the stack and heap if my memory serves me correctly. There are two properties to consider in regards to how the stack behaves:
> * Direction: Ascending or descending
> * Item the Stack Pointer is pointing to: full or empty
>
> It's been a while as I've read the chapters back in January, but I don't recall them mentioning about full vs. empty stack pointers. If the stack is full, the stack pointer (SP) points to the topmost item in the stack (i.e. latest item in the stack). In the empty stack, the stack pointer will point to the next free location in the stack. Knowing how your architecture behaves can be important as one can imagine when writing an assembler or tracing through the code disassembly (or writing assembly). Combining the two properties, one can classify a stack into 4 types. Something interesting that I only became aware of sometime last year around this time of year when I was going through an assembly book.

**Chapter 14:** Memory API

While I do not recall the specifics of the chapter on what it was about, I do recall it talked about various memory apis (hence the title) such as what is `mmap()`, and how `brk` and `sbrk` relates to `malloc()` 
and `free()` to increase and decrease the program's "cieling" of the heap (i.e. the location in which the heap ends). Someone asked if any of us has tried different memory allocators such as the jemalloc and mimalloc and hence why you will see the allocator mentioned in my response:

> Somehow I missed the existence and mention of brk() and sbrk() in the textbook and in my various years of programming till I decided to take OS for fun again when I went back to school to study Mathematics. Fun fact, malloc() could instead use mmap instead of brk if the allocations surpasses a certain threshold (i.e. MMAP\_THRESHOLD - take a look at the manpage for malloc or mallopt for more details).
>
> jemalloc has been in my radar but I have never personally used it myself. It is pleasant to hear Meta's renewed interest in picking up jemalloc again after initially dropping development last year.
>
> While valgrind is a great tool to detect memory leaks, I find address sanitiser (ASAN) more convenient as I could quickly enable this on debug builds to catch memory-related issues with acceptable performance hit. The notes on how the OS will reclaim the memory on userspace reminds me how I tried to squash all the memory leaks for internal utilties we had at one of the places I interned at to only be told there was no point as the programs were short-lived userspace programs (like a few seconds at most). This was a good lesson because freeing more complicated data structures if done wrong could be more damaging and it also overcomplicates the program + unnecessarily increases the binary size in our limited storage. Of course it is good practice to always free memory but it may not be worth the risk + engineeirng hours to eliminate every single memory leak if its just for a user-space utility.
> 
> Rust's design to be both memory safe and performant makes it an interesting contender to C/C++, something I definitely should take a closer look at (I've only briefly looked over the language to get a taste of it but nothing too deep). Seeing the growing interest to adopt Rust in the kernel, at least for drivers makes me think I should take another look at the language in the future. C supposedly has a memory-safe implementation via the compiler called Fil-C but its performance was lacking at the time I've read about it, something along the lines of being up to 4x slower than regular C.

**Chapter 16:** Segmentation

The chapter talks about segmentation being a solution to resolve internal fragmentation that is caused by having a SINGLE pair of base and bound pair in the MMU for then entire addres space which 
can cause a lot of wasted space since most of it may not be used. Thus, the idea is that you give each segment of the address space such as the stack, code, and heap their own base and bound pair in the MMU.
This way you can ensure each segment takes the necessary amount of data. To keep track of the segments, it mentions how the hardware now needs to keep track of not only the base and size of each segment but 
also the direction of its growth and permissions (i.e. protection bit). This protection bit is what I focused on my conversation where I tried to manipulate a page that was considered read only using 
`mprotect()` and how `mseal()` fixes the issue (likely going to be reposted as a separate microblog and blog):

> When reading about the protection bit, it reminded me that Linux introduced `mseal()` sometime in 2024 with glibc introducing the API in 2025. To give context, the protection bit is supposed to make different sections readable, writable or executable (in the page table). In theory, this would imply that the readonly section of the binary for instance (.rodata) should not be writable. If we were to run objdump, we see that is indeed the intention with the READONLY label
>
> ```
> $ objdump -h ./rodata_write | grep -A1 .rodata
> $ objdump -h ./rodata_write | grep -A1 .rodata
> ./rodata_write:     format de fichier elf64-x86-64
> 
> --
> 13 .rodata       00000088  0000000000401358  0000000000401358  00001358  2**3
>                  CONTENTS, ALLOC, LOAD, READONLY, DATA
> ```
> When I execute the program, I should expecting something like this in their mappings (/proc/<pid>/maps)
>  ```
> 00401000-00402000 r--p 00001000 00:2d 26970                              /tmp/rodata_write
> ```
> where this region of memory is marked as read-only.
> 
> However, if I invoke `mprotect()` which allows us to change protection of the calling process's memory map, we can in fact modify the rodata. If I define a constant string: "Hello", we can see that it is stored in rodata section:
> ```
> $ objdump -s -j .rodata ./rodata_write | grep -B2 Hello
> Contenu de la section .rodata :
>  401358 01000200 00000000 00000000 00000000  ................
>  401368 48656c6c 6f000000 55736167 653a2025  Hello...Usage: %
> ```
> Normally I would not be able to overwrite this section of memory as it does not have write permission but thanks to `mprotect()`, I could:
> ```
> mprotect((void *)page_start, len, PROT_READ | PROT_WRITE)
> ```
> As seen below:
> ```
> $ ./rodata_write Bye
> Before: Hello
> After:  Bye
> ```
> And if we were to check the mapping again, we'll now see the same region of memory is now marked as write (w):
> ```
> 00401000-00402000 rw-p 00001000 00:2d 26970                              /tmp/rodata_write
> ```
> But if I comment out the line containing `mprotect()`, we eventually will hit a segfault when trying to overwrite the const string residing in the `.rodata` section with "Bye":
> ```c
> $ ./rodata_write Bye
> Before: Hello
> Erreur de segmentation     (core dumped)./rodata_write Bye
> ```
> Something intteresting to see as prior to reading proposals to introduce `mseal()`, I did not know protection bits were modifiable by the user. 

If you are interested in the reading group, you may be able to still sign for the next session soon, though I am not exactly clear on the details. But it definitely has been enjoyable to go through the 
textbook with a group, covering my favorite subject: OS.
