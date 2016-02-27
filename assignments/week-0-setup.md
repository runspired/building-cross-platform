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

## Step 2: MacOS

You must follow these steps in order.

1. You need a user account on your machine with at least "admin" permissions. If this is your laptop and you
   are the only user account, you are good to go.
2. [optional] You need **at least** MacOS 10.10 "Yosemite".  It is highly recommended that you update to MacOS 10.11 "El Capitan".
3. You should add the `Terminal` application to your `Dock`.
`Terminal` comes pre-installed on your Mac, you can find it in the Applications folder
or find it via spotlight by hitting `command (space)` to launch spotlight and typing "terminal".
Terminal is a `Command Line`, through with you type commands (instructions) to your computer. Groups
of instructions are usually called an `interface`.  When you see `CLI` or `cli` on a project, it means
that project exposes a "Command Line Interface" you can use.
4. Run `touch ~/.profile`
5. [Optional] I recommend changing your default terminal theme in "preferences" to "Homebrew".
6. Install [xcode](https://developer.apple.com/xcode/) from the [AppStore](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12#)
7. Install the `xcode command line tools` by following the directions below (in order).
  1. Open a new `Terminal` window
  2. type `xcode-select --version` and "run" it by hitting "return/enter", if you don't see something similar to 
 `xcode-select version 2343.` as a response, and you have completed step 3 (including restarting your computer
 if it prompts you to), then you need to close and reopen `Terminal`.  After reopening, run the command 
 `xcode-select --version` again to confirm that it's now working.
  3. Install the command line tools by running the command `xcode-select --install` (if prompted to restart your
  computer, do so before continuing on).
  4. Accept the xcode license by running the command `sudo xcodebuild -license`
    - enter the password you use for your user account on the machine. This user needs to be an admin level or
    primary user.
    - press and hold the "space" bar to scroll to the end of the license text.
    - type "agree" and press "enter/return" to accept the license.

8. Type `git --version` to ensure that all the steps above have worked appropriately. You should see something
like `git version 2.1.3` printed to the console. If not, something has gone wrong or been skipped. Please reach
out for assistance either in the CIE Slack channel for this class or by emailing the instructor at *runspired[at]gmail*.

9. Type `ruby --version` to ensure that we have `ruby` available to us. `ruby` is a CLI for the `ruby` language,
  we are going to use it to install `brew` in the next step.

10. Install `brew`. Brew is one of several *package managers* we will be using for this course.
Run the following command in Terminal to install *brew*
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

11. Tell `brew` to update already installed packages by running `brew update`

12. [Optional] Install ZSH and Oh-MY-ZSH to spice up the Terminal Application. This will greatly improve your terminal
experience with better autocomplete, search, navigation, and text color features.
  1. `brew install zsh`
  2. `curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh`
  3. `chsh -s /bin/zsh`
  
13. Run the command below to install `watchman`, an extremely efficient file-watcher built by Facebook
  - `brew install watchman`
  
14. Run the command below to install `phantomjs` version `2.0`, a "headless browser" we will use for many tasks.
  - `brew install phantomjs`
    
15. Run the command below to install `nvm`, a version manager for `node`
  - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash`

16. Install `node` version `4.2.4` by running the following commands
  - `nvm install 4.2.4`
  - `nvm use 4.2.4`
  - `nvm alias default 4.2.4`
  
17. Install `bower`, note, the below says "npm" not "nvm". "npm" is a package manager that came bundled with "node".
  - `npm install -g bower`

18. Install 'ember-cli' by running the following command.
  - `npm install -g ember-cli`
  
19. Type `ember -v`, if the output contains something along the lines of `version: 2.3.0` we are done! :)

