Setup
=====

## Class Preparation

This document contains the setup steps you need to complete to adequately participate
in this class.  While ideally you would complete these setup steps **before the first day of class**,
you do not need to.  Much class time and office hours during the first week will be devoted
to assisting everyone in setting up their computer with a complete developer environment.

The `week 1` assignments for [cli-and-git](./week-1a-cli-and-git.md) and [packages](./week-1b-packages.md)
contain explanations and readings for many of the concepts that are involved in this setup process. 

## Step 1: User Accounts

You need to create an account on each of the following services.

- [Github](https://github.com/)
  - You should both `Star` and `Watch` the [repository for this course](https://github.com/runspired/building-cross-platform)
- Join The CIE Slack Channel for the course.
- Join the [Ember Community Slack](https://ember-community-slackin.herokuapp.com)

## Step 2: Windows


You must follow these steps in order.

1. You need a user account on your machine with at least "admin" permissions. If this is your laptop and you
   are the only user account, you are good to go.
2. [optional] I recommend **at least** `Windows 10`, but these instructions will work with `8.1`. You must have at
   least `Windows 8.1`.
3. You need to start `Command Prompt` as `administrator` (not powershell).
`command prompt` comes pre-installed on your machine, you can find it via search or by right-clicking on
the start menu and selecting `Command Prompt (Admin)`.  Command Prompt is a `Command Line`, through which
 you type commands (instructions) to your computer. Groups of instructions are usually called an `interface`.
 When you see `CLI` or `cli` on a project, it means that project exposes a "Command Line Interface" you can use.
 
 > If you found `Command Prompt` via search, right-click on the search result to be able to run it as `admin`.

4. Install `chocolatey`, a package installer for windows (It is somewhat similar to `brew` on unix machines) by
  pasting the following into command prompt and hitting enter/return to "run" the command.
  
  ```cli
  @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
  ```
  
5. Install `git` via chocolatey by running `choco install git.install -y`

6. Install `node` version `4.2.2` by running `choco install nodejs.install -version 4.2.2 -y`
 
7. Run the command below to install `phantomjs` version `2.0`, a "headless browser" we will use for many tasks.
  - `choco install phantomjs -y`

8. Close out and reopen Command Prompt so that changes will take effect.

9. Type `git --version` to ensure that all the steps above have worked appropriately. You should see something
like `git version 2.1.3` printed to the console. If not, something has gone wrong or been skipped. Please reach
out for assistance either in the CIE Slack channel for this class or by emailing the instructor at *runspired[at]gmail*.

10. Install `bower`, "npm" is a package manager that came bundled with "node".
  - `npm install -g bower`

11. Install 'ember-cli' by running the following command.
  - `npm install -g ember-cli`
  
12. Type `ember -v`, if the output contains something along the lines of `version: 1.13.12` we are done! :)

