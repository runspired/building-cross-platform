/*
 # Iteration

 Export the functions described by the following documentation comments

 ## Useful Resources

 - while https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 - do while https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
 - for https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 - for in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

 */

/**!
 * @method whileExample
 *
 * Should execute B for as long as A is returning true.
 *
 * @param {Function} fnA
 * @param {Function} fnB
 */
export function whileExample(fnA, fnB) {
  while(fnA()) {
    fnB();
  }
}

/**!
 * @method doWhileExample
 *
 * Should execute B for as long as A is returning true.
 * It should always execute B at least once.
 *
 * @param {Function} fnA
 * @param {Function} fnB
 */
export function doWhileExample(fnA, fnB) {
  do {
    fnB();
  } while (fnA());
}

/**!
 * @method forExample
 *
 * Should call fn(index, value) for every value in the supplied array.
 *
 * @param {Array} arr
 * @param {Function} fn
 */
export function forExample(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(i, arr[i]);
  }
}

/**!
 * @method blindForInExample
 *
 * Should call fn(key, value) for every key in the supplied object.
 *
 * @param {Object} obj
 * @param {Function} fn
 */
export function blindForInExample(obj, fn) {
  for (let i in obj) {
    fn(i, obj[i]);
  }
}

/**!
 * @method forInExample
 *
 * Should call fn(key, value) for every key in the supplied object
 * that belongs to the object itself.
 *
 * @param {Object} obj
 * @param {Function} fn
 */
export function forInExample(obj, fn) {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn(i, obj[i]);
    }
  }
}
