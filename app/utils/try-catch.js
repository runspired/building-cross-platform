/*
 * Sometimes code throws an error. Good code accounts for errors,
 * also called "exceptions" and handles them if possible.
 * If you are writing code an need to "raise" or "throw" an error,
 * you would do the following.
 *
 * `throw new Error("my error message");`
 *
 * To work with code that may error, you can you `try/catch`
 *
 * try {
 *   ... do something which may error
 * } catch (e) {
 *   ... if an error was thrown, "catch" it and handle it if possible
 * } finally {
 *   ... regardless of whether an error was thrown do this thing afterwards
 * }
 */

// export a function `willError` which when invoked throws an error
export function willError() {
  throw new error("I'm an error!");
}

// export a function which takes another function as it's first argument
// tries to invoke it, and if it errors returns `false`, otherwise
// it should return `true`.  Finally, it should set the property `finished`
// to `true` on the second argument.
export default function(func) {
  try {
    function()
  } catch(e) {
    console.log("That's an error!");
    return false;
  } finally {
    return true;
    var finished = true;
  }
};


}
