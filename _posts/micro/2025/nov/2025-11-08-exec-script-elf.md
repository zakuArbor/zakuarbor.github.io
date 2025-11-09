---
layout: micro
title:  "How Linux Executes Executable Scripts"
date: 2025-11-08
categories: [micro, linux, C/C++] 
published: true
permalink: micro/2025/11/:title
---

One is traditionally taught that when running an executable (a file with execute permission), the shell will `fork()` itself and have the child process replace itself using `execve()`.
One winter a few years back, I random question popped in my head: Who determines whether a file is a script or an executable and where in the code does this logic lie in?

Recall to invoke a script or any non-ELF executables such as Python and Bash script, one needs to specify the path to the interpreter using the shebang directive (`#!`) such as 

```bash
#!/usr/bin/bash
```

or 

```python
#!/usr/bin/python
```

I was unsure whether the responsability of executing the script properly was the job of the terminal (`bash`, `sh`, `csh`, etc) or the kernel. I highly suspected it was the role of the 
kernel and randomly I came across an article [How does Linux start a process](https://iq.thc.org/how-does-linux-start-a-process) that answers this question. In short, when one calls `execve`, 

> From there into [`search_binary_handler()`](https://elixir.bootlin.com/linux/v5.19.17/source/fs/exec.c#L1709)  where the Kernel checks if the binary is ELF, a shebang (`#!`) or any other type registered via the binfmt-misc module. 
>
> Excerpt from [How does Linux start a process](https://iq.thc.org/how-does-linux-start-a-process)

```c
/*
 * cycle the list of binary formats handler, until one recognizes the image
 */
static int search_binary_handler(struct linux_binprm *bprm)
{
    // ...
	list_for_each_entry(fmt, &formats, lh) { //iterate through all registered binary format handlers
		if (!try_module_get(fmt->module)) 
			continue;

		retval = fmt->load_binary(bprm); // attempt to load executable as the current format
        
        // ...

        if (bprm->point_of_no_return || (retval != -ENOEXEC)) { //format recognized so stop searching
			read_unlock(&binfmt_lock);
			return retval;
		}
```

The kernel will call [`search_binary_handler()`](https://elixir.bootlin.com/linux/v5.19.17/source/fs/exec.c#L1709) to determine the type the binary (executable) by iterating through all registered formats 
which includes (not in order):

* ELF - `binfmt_elf`
* Scripts (`#!`) - `binfmt_script`
* Misc - `binfmt_misc`: Linux (kernel) allows one to register a custom format by providing a magic number or a filename extension (see [Kernel Support for miscellaneous Binary Formats](https://docs.kernel.org/admin-guide/binfmt-misc.html))

Each binary format `fmt` ([`struct linux_binfmt`](https://elixir.bootlin.com/linux/v5.19.17/source/include/linux/binfmts.h#L85) has a function pointer `load_binary` used to load the binary. This is the function the 
kernel uses to help identify the binary type as this function will return `-ENOEXEC` if the binary is not of its type.

```c
/*
 * This structure defines the functions that are used to load the binary formats that
 * linux accepts.
 */
struct linux_binfmt {
	struct list_head lh;
	struct module *module;
	int (*load_binary)(struct linux_binprm *);
	int (*load_shlib)(struct file *);
};
``` 

For scripts, the loader can be found in [`fs/binfmt_script.c`](https://elixir.bootlin.com/linux/v5.19.17/source/fs/binfmt_script.c) a function [`load_script`](https://elixir.bootlin.com/linux/v5.19.17/source/fs/binfmt_script.c):

```c
static int load_script(struct linux_binprm *bprm)
{
	const char *i_name, *i_sep, *i_arg, *i_end, *buf_end;
	struct file *file;
	int retval;

	/* Not ours to exec if we don't start with "#!". */
	if ((bprm->buf[0] != '#') || (bprm->buf[1] != '!'))
		return -ENOEXEC;

	/*
	 * This section handles parsing the #! line into separate
	 * interpreter path and argument strings. We must be careful
	 * because bprm->buf is not yet guaranteed to be NUL-terminated
	 * (though the buffer will have trailing NUL padding when the
	 * file size was smaller than the buffer size).
	 *
     * .... truncated ....
	 */

    // parsing logic

	bprm->interpreter = file;
	return 0;
```

### Things to Look At Next
* Wonder about how Linux handles ELF binaries, specifically how it handles static and shared binaries? Take a look at [How does Linux start a process](https://iq.thc.org/how-does-linux-start-a-process)
* [fork() can fail: this is import](https://rachelbythebay.com/w/2014/08/19/fork/)
* TODO: Investigate why a script without shebang fails on `strace ./test`
    * use `bpftrace` : `sudo bpftrace -e 'kprobe:load_script { printf("load_script called by %s\n", comm); }'`
    * find other trace events to look at to distinguish between the two cases like exec
