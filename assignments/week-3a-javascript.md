# Assignment for Monday of Week 3

## Setup

## Exercises

Complete all of the exercises found in `app/utils`.  Each file in that directory is an exercise.
You should complete `module-export` and `module-import` before continuing on to the other exercises.

You will find the following command line commands useful when completing this exercise (you run these
commands from within the project's directory).

- Run all tests once: `ember test`
- Automatically Run all tests after each change you make: `ember test --serve`
- Run all tests once for a single module: `ember test --module "Unit | Utility | <test name>"`
  - for `module-export.js`, `<test name>` will be `module export` and the command would be `ember test --module "Unit | Utility | module export"`
- Automatically run all tests for a single module after each change: `ember test --module "Unit | Utility | <test name>" --serve`

Recommended Completion Order

- module-export
- module-import
- conditionals-and
- conditionals-if
- conditionals-not
- conditionals-or
- conditionals-ternary
- js-primitives
- js-vars
- objects
- destructuring
- try-catch

### How To Complete

Open the file (module) for an exercise, complete the instructions at the top of the file. If completed
successfully, the tests for that module will pass.  Use the commands above to run the tests.

When running tests for an individual module, the "code style" tests do not run, so after you've made
the unit tests pass, you will need to run `ember test` to ensure your code style checks out as well.

At a minimum, commit your work after you solve each exercise using angular style commits.  You can commit
more often than this if you want to save your progress or steps.

```
git add <path/to/exercise/file>
git commit -m "feat(<module-name>): completes the <module name> exercise"
```

#### Angular Commit Message Guide

[Angular Style Commit Spec](https://github.com/angular/angular.js/blob/v1.4.8/CONTRIBUTING.md#commit)

** TL;DR **

Angular Style commit messages have the full form:
 
 ```
 <type>(<scope>): <title>
 
 <body>
 
 <footer>
 ```
 
 You can use "shift return" to insert the new lines if you want to include <body> and <footer>, but
 the abbreviated form (below) is acceptable and usually preferred.
 
 ```
 <type>(<scope>): <title>
 ```
 
 Example:
 
 `git commit -m "feat(module-export): completes the 'module export' exercise"`



## Final Steps