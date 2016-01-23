/*
 # Arrays

 Export the functions described by the following documentation comments

 ## Useful Resources

 - Array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 Get the first index of a value (or reference) within an array
 - Array.indexOf https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

 The length (size/number of entries) or an array
 - Array.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

 Add new values to the end of an array
 - Array.push https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

 Remove or insert (N) values at an arbitrary index
 - Array.splice https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/**!
 * @method inArray
 *
 * @param {Array} arr | An array
 * @param {*} value | the value to look for in the array
 * @returns {boolean} whether the value is in the array
 */
export function inArray(arr, value) {
  return arr && arr.indexOf(value) !== -1;
}

/**!
 * @method remove
 *
 * @param {Array} arr | An array
 * @param {*} value | the value to be removed from the array
 * @returns {*} The removed value
 */
export function remove(arr, value) {
  if (arr.indexOf(value !== -1)) {
    return arr.splice(arr.indexOf(value), 1)[0];
  }
}

/**!
 * @method append
 *
 * @param arr | An array
 * @param value | The value to append to the array
 * @returns {Number} The length of the array
 */
export function append(arr, value) {
  return arr.push(value);
}

/**!
 * @method insertAt
 *
 * inserts a value at a specific index in the array
 *
 * @param arr | An array
 * @param index | The index at which to insert the value
 * @param value | The value to be inserted
 */
export function insertAt(arr, index, value) {
  arr.splice(index, 0, value);
}

/**!
 * @method get
 *
 * @param arr
 * @param index
 * @returns {*} The value at the specified index
 */
export function get(arr, index) {
  return arr[index];
}

/**!
 * @method set
 *
 * sets the specified index of the array to the specified value
 *
 * @param arr
 * @param index
 * @param value
 */
export function set(arr, index, value) {
  arr[index] = value;
}
