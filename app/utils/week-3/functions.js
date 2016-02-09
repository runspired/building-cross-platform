/*
  # Functions

 Export the functions described by the following documentation comments

  ## Useful Resources

  - Rest Parameters https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  - Function.bind https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  - Function.call https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  - Function.apply https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
  - Function arguments https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

 */

/**!
 * @method execute
 *
 * returns the result of invoking the supplied function
 *
 * @param fn | the function to invoke
 * @returns {*} | the result of invoking (calling) the function
 */

/**!
 * @method prepare
 *
 * @param {Function} fn | The function to invoke
 * @param {*} context | The context in which to invoke the function
 * @returns {Function} | A function which when invoked will have it's context bound to `context`
 */

/**!
 * @method invokeWithArgs
 *
 * @param {Function} fn | The function to invoke
 * @param {*} context | The context in which to invoke the function
 * @param {Array} args
 * @returns {*} The result of calling the function
 */

/**!
 * @method invokeWithParams
 *
 * @param {Function} fn | The function to invoke
 * @param {*} context | The context in which to invoke the function
 * @param {...*} args | a open ended number of additional params which you should supply to `fn`
 * @returns {*} The result of calling the function
 */

/**!
 * @method createCallable
 *
 * Creates a function bound to a specific context and with two
 * "pre-heated" or "pre-set" parameters.
 *
 * @param {Function} fn | The function to invoke
 * @param {*} context | The context in which to invoke the function
 * @param param1
 * @param param2
 * @returns {*} A function
 */

/**!
 * @method callWithParams
 *
 * @param {Function} fn | The function to invoke
 * @param {*} context | The context in which to invoke the function
 * @param param1
 * @param param2
 * @returns {*} The result of calling the function in context with the supplied params
 */
