/*
 # Objects

 Export the functions described by the following documentation comments

 ## Useful Resources

 - hasOwnProperty: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 - Error: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 - Prototypes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 - Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
 - http://stackoverflow.com/a/14486128/1883464
 */

/**!
 * @method isFromPrototype
 *
 * Takes an object and a property name (key) and determines whether the key
 * exists on the object itself or on the object's prototype.
 *
 * The method should throw the error "KeyNotFound" if the key does not exist
 * at all.
 *
 * @param {Object} obj | The object to test
 * @param {String} key | The key on the object to test
 *
 * @returns {Boolean} `true` or `false`, whether the object contains the key.
 */
export function isFromPrototype(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return false;
  }
  if (obj[key] || obj.constructor.prototype.hasOwnProperty(key)) {
    return true;
  }
  throw new Error(`KeyNotFound: the key '${key}' was not found in the object passed to 'isFromPrototype'`);
}

/**!
 * @method isInstanceOf
 *
 * @param {Object} instance
 * @param {Object} Type
 *
 * @returns {boolean} whether the object instance is an instance of Type
 */
export function isInstanceOf(instance, Type) {
  return instance instanceof Type;
}

/**!
 * @method doesExtendType
 *
 *
 *
 * @param {Object} instance
 * @param {Object} Type
 *
 * @returns {boolean} whether the object instance is an extension of Type
 */
export function doesExtendType(instance, Type) {
  if (!(instance instanceof Type)) {
    return false;
  }
  return instance.constructor !== Type;
}
