# Week 3 Exercises

The exercises in these folders are more advanced than what we saw in
the week 2 exercises, and build upon them. If you have not yet been
able to complete all or most of the week 2 exercises, you should study
those first.

## Setup & Another GIT lesson

You will want to fetch the `class/week-3` branch from my GitHub repository
and use it to start a new `class/week-3` branch on yours.  How to do this:


#### 1. Save your work

 - commit any unsaved work in your current branch.
 

#### 2. Create & checkout a new branch from my remote

 There are a number of ways to do this step. Previously we did this **(don't do this now)**
 
 - `git fetch upstream`  // fetch an updated version of my remote
 - `git branch class/week-3` // create a new local branch of your own
 - `git checkout class/week-3` // switch over to your new local branch
 - `git reset --hard upstream/class-week-3` // change your local branch to inherit from my branch of the same name

 These steps are able to be condensed.
 
 > N.B. using `&&` between commands lets you run them in series
 
 Often you will find yourself needing to both branch and switch to the new branch.
 You might be tempted to do that this way. **(don't, there's an easier way)**
 
 - `git branch class/week-3 && git checkout class/week-3`
 
 Git provides a shorthand just for doing this **(again, don't run this)**.
 
 - `git checkout -b class/week-3`

  The short hand here creates the new branch `class/week-3` if it does not yet exist,
  and then checks it out.
  
 That get's us down to 3 steps from 4, which we could run together using `&&`.  BUT, Git also
 expects that we will often need to create a new branch that inherits from a branch that is not
 the one you are currently using (which is the default). You do this by providing the path to the
 other branch as the next argument after the new branch name. **(again, don't run this)**
 
 - `git checkout -b class/week-3 upstream/class/week-3`
 
 Now, we're down to 2 steps from 4, lets' combine them **(do run this!)**.
 
 - `git fetch upstream && git checkout -b class/week-3 upstream/class/week-3`


#### 3. Complete The Exercises

All the exercises can be found in the folder `app/utils/week-3/`

The tests for these exercises can be found in `tests/unit/utils/week-3/`

The recommended completion order for these exercises is

- functions
- objects
- arrays
- iteration
- map
- deep-equal
- copy
- deep-copy

Please finish the exercises one at a time, and commit your work before continuing to
the next exercise.

#### 4. Completion

You should save your work to your remote `origin` whenever you are done working
for a while, or have completed a significant amount of work.  This ensures that
should anything go wrong, your work survives.  This is a best practice for all
your future coding, not just this class or these exercises, and is a compulsive habit
you need to start building.

As long as you are working on the `class/week-3` branch, you can run

- `git push origin class/week-3`

To push to your remote.  This command will only work so long as you haven't `rebased` against
my upstream branch since your last push and received new commits from me.  Fortunately, you
won't need to rebase these exercises (all the tests are complete!).

Once you've finished, open a PR (Pull Request) to merge your solutions into my repository.
