# URLs and Paths

`URL` is short for `Uniform Resource Locator`.  Put another way, a URL is an ID that can be used to locate
content available anywhere.  In some ways, you can conceptualize all content everywhere on the internet and
on your computer as a series of folders containing more folders or files.  The `path` to a given file on
your computer is going to be relative to the `root` or "base" directory of the machine's hard drive.

> **Sidenote:** We will use the words "folder" and "directory" interchangeably, and "file" and "resource" interchangeably.

For example, below is part of the folder structure on my MacBook
```
<root>/
  Users/
    runspired/
      Github/
        building-cross-platform/
          README.md
```

The "README" file containing the overview of the `git` repository for this class is located at
`/Users/runspired/Github/building-cross-platform/README.md`. `.md` is a file extension, which conveys
that the file is written in [Markdown](https://daringfireball.net/projects/markdown/basics), a plain text
formatting syntax that is commonly used for technical documents and can be used commenting on StackOverflow,
Github, and in Slack.

Since this file is in a git repository that I publicly publish, you can also find this file at
[https://github.com/runspired/building-cross-platform/blob/master/README.md](https://github.com/runspired/building-cross-platform/blob/master/README.md).

Let's dissect this URL.

URLS have the following form. `<protocol>://<subdomain>.<domain>.<tld>/<path>`.

Applying this form to the URL for the README on Github we get

- protocol: `https`
- subdomain: `null` (means none, or empty)
- domain: `github`
- tld: `com`
- path: `runspired/building-cross-platform/blob/master/README.md`

The protocol tells us *how* we are requesting the file data be sent to us (we will get more into protocols another time).
`subdomain`, `domain` and `tld` are all similar, and together function as an **Address** for the server on which the
README file is to be found. The `path` is the file path on that server that leads to the README, much like there was 
a path from `<root>` to README on my own MacBook.  There's some more going on behind the scenes on Github's servers that 
a straight file path lookup, my file is very likely not "literally" at that path, but it helps to conceptualize everything 
as these nested folders leading to a file.

As long as you are on the same device, file paths can be "relative" to another file.

Imagine the following file and folder layout.
````
<root>/
    Users/
      runspired/
        Desktop/
          profile.png
        Github/
          baz/
            spam.md
          building-cross-platform/
            foo/
              bar.md
            example.md

```

Relative file paths begin with a `.`, and let's say we are within the file `example.md`.

- `./foo/bar.md` would be the path to the file `bar.md` within the folder `foo` located in the same directory as we are currently in.
- `../baz/spam.md` would point to a directory level above (`Github`) and then into the folder `baz` and at the file `spam.md`
- `../../Desktop/profile.png` would be the relative path to `profile.png` in the structure above from `example.md`.


# CLI

CLI is short for `Command Line Interface`, which roughly translates to "a set of commands you can give
 to your computer via the `Command Line`.  A command line is a text based application through which
 you can tell your computer to perform various tasks.
  
When you see `CLI` or `cli` in a project name (such as `ember-cli`, it means that project exposes a
 "Command Line Interface" you can use.

To be a good developer, you will need to become comfortable with the command line. The command line is
often also called a `Terminal` a `Prompt` or a `Shell`.  It might be helpful at the beginning to visualize
the terminal as a special type of "file browser".

## Commonly Used Command Line Commands

- `cd` *change directory*, use this command to change directories.
  - `cd ~` and `cd -` will take you to your home directory (usually your user account)
  - `cd ..` will take you up one level
  - `cd ../../` will take you up two levels
  
- `mkdir` *make directory*, use this command to create a new directory within the directory you are currently in
  - `mkdir foo` will create the directory foo.
  
- `touch` *make a file*, use this command to create an empty file in the current directory
  - `touch foo.md` will create the file `foo.md`

- `ls` *list directory*, use this command to list all directories and files in the current directory
  - `ls -a` list everything in this folder, including invisible "dot" files
  - `ls ..` list everything in the folder above this one

- `rm` *remove a thing*, use this command to remove a file or directory. NEVER run `rm .` or `rm ..`,
  - ESPECIALLY never run `rm -rf .` or `rm -rf ..` or anything that looks similar.

- `su` and `sudo` *do a thing as the super user*, basically, this let's you do whatever you want, good or bad.
  - Until you are fairly comfortable and familiar with commands in the command line, avoid sudo, and ask your instructor if it appears to be necessary before running it.

Exiting scripts in the command line

- `CTRL + C` quits most things
- `esc + : + q` quits most the things that CTRL C does not.

# GIT

For this class, we'll be using `git`, the leading version-control solution, below are a few
readings that should help you understand what `git` is.

- [https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [http://www.sbf5.com/~cduan/technical/git/](http://www.sbf5.com/~cduan/technical/git/)

## Github Flow

[Github Flow](http://scottchacon.com/2011/08/31/github-flow.html) is the work process we'll be using in
this class.  We'll be pairing it with [Angular Style Commits](https://github.com/angular/angular.js/blob/v1.4.8/CONTRIBUTING.md#commit).