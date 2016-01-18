/*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 *
 * All of these exports should be properties on a single default export
 *
 * If you need to for `undefined`, you can disable jshint
 * fo a single line by placing the following at the end: // jshint ignore:line
 */

// export `aString`, set it to a string value.
const aString = 'foo';

// export `aNull`, set it to a null value.
const aNull = null;

// export `anUndefined`, set it to an undefined value.
const anUndefined = undefined; // jshint ignore:line

// export `aNumber`, set it to a Number value.
const aNumber = 1;

// export `aBoolean`, set it to a boolean value.
const aBoolean = false;

// export `anObject`, set it to be some object.
const anObject = {};

// export `aFunction`, set it to be some function.
const aFunction = function() {};

export default {
  aString,
  aNull,
  anUndefined,
  aNumber,
  aBoolean,
  anObject,
  aFunction
};
