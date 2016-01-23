import primitives from '../../../utils/js-primitives';
import { module, test } from 'qunit';

module('Unit | Utility | js primitives');

// export `aString`, set it to a string value.
test('aString is a string', function(assert) {
  assert.equal(primitives.hasOwnProperty('aString'), true, 'the property aString is present');
  assert.equal(typeof primitives.aString, 'string', 'aString is a string');
});

// export `aNull`, set it to a null value.
test('aNull is null', function(assert) {
  assert.equal(primitives.hasOwnProperty('aNull'), true, 'the property aNull is present');
  assert.equal(primitives.aNull, null, 'aNull is null');
});

// export `anUndefined`, set it to an undefined value.
test('anUndefined is undefined', function(assert) {
  assert.equal(primitives.hasOwnProperty('anUndefined'), true, 'the property anUndefined is present');
  assert.equal(primitives.anUndefined, undefined, 'anUndefined is undefined');
});

// export `aNumber`, set it to a Number value.
test('aNumber is a number', function(assert) {
  assert.equal(primitives.hasOwnProperty('aNumber'), true, 'the property aNumber is present');
  assert.equal(typeof primitives.aNumber, 'number', 'aNumber is a number');
});

// export `aBoolean`, set it to a boolean value.
test('aBoolean is a boolean', function(assert) {
  assert.equal(primitives.hasOwnProperty('aBoolean'), true, 'the property aBoolean is present');
  assert.equal(typeof primitives.aBoolean, 'boolean', 'aBoolean is a boolean');
});

// export `anObject`, set it to be some object.
test('anObject is an object', function(assert) {
  assert.equal(primitives.hasOwnProperty('anObject'), true, 'the property anObject is present');
  assert.equal(typeof primitives.anObject, 'object', 'anObject is an object');
});

// export `aFunction`, set it to be some function.
test('aFunction is a function', function(assert) {
  assert.equal(primitives.hasOwnProperty('aFunction'), true, 'the property aFunction is present');
  assert.equal(typeof primitives.aFunction, 'function', 'aFunction is a function');
});

