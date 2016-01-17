import { both, either, negative, positive, all, none, any, isTrue, isTruthy } from '../../../utils/conditionals';

import { module, test } from 'qunit';

module('Unit | Utility | conditionals');

/*
 * export a function named `both` which tests whether both of two variables is truthy.
 */
test('both correctly tests whether both variables are truthy', function(assert) {

  let result = both(true, false);
  assert.equal(result, false, 'If B is false, the result is false');

  result = both(false, true);
  assert.equal(result, false, 'If A is false, the result is false');

  result = both(false, false);
  assert.equal(result, false, 'If A and B are false, the result is false');

  result = both(true, true);
  assert.equal(result, true, 'If A and B are true, the result is true');

  result = both('hello', 'world');
  assert.equal(!!result, true, 'If A and B are truthy, the result is truthy');
});

/*
 * export a function named `either` which tests whether either of two variables is truthy.
 */
test('either correctly tests whether either of two variables is truthy', function(assert) {
  let result = either(true, false);
  assert.equal(result, true, 'If B is false, the result is true');

  result = either(false, true);
  assert.equal(result, true, 'If A is false, the result is true');

  result = either(false, false);
  assert.equal(result, false, 'If A and B are false, the result is false');

  result = either(true, true);
  assert.equal(result, true, 'If A and B are true, the result is true');

  result = either('hello', 'world');
  assert.equal(!!result, true, 'If A and B are truthy, the result is truthy');
});

/*
 * export a function named `negative` which tests whether a variable is `false`.
 */
test('negative correctly tests whether a variable is `false`', function(assert) {
  let result = negative(false);
  assert.equal(result, true, 'If supplied false, the result is true');

  result = negative(true);
  assert.equal(result, false, 'If supplied true, the result is false');

  result = negative(0);
  assert.equal(result, false, 'If supplied 0, the result is false');

  result = negative(null);
  assert.equal(result, false, 'If supplied null, the result is false');

  result = negative(undefined);
  assert.equal(result, false, 'If supplied undefined, the result is false');

  result = negative('');
  assert.equal(result, false, 'If supplied an empty string, the result is false');
});

/*
 * export a function named `positive` which tests whether a variable is `true`.
 */
test('positive correctly tests whether a variable is `false`', function(assert) {
  let result = positive(false);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = positive(true);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = positive(1);
  assert.equal(result, false, 'If supplied 1, the result is false');

  result = positive('hello');
  assert.equal(result, false, 'If supplied a string, the result is false');
});

/*
 * export a function named `all` which tests whether all of three variables are truthy.
 */
test('all correctly tests whether all of three variables are truthy', function(assert) {
  let result = all(true, true, false);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = all(false, true, true);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = all(true, false, true);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = all(true, true, true);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = all(1, 2, 3);
  assert.equal(!!result, true, 'If supplied truthy, the result is truthy');
});

/*
 * export a function named `none` which tests whether all of three variables is falsey
 */
test('none correctly tests whether all of three variables is falsey', function(assert) {
  let result = none(true, true, false);
  assert.equal(result, false, 'If supplied true, the result is false');

  result = none(false, true, true);
  assert.equal(result, false, 'If supplied true, the result is false');

  result = none(true, false, true);
  assert.equal(result, false, 'If supplied true, the result is false');

  result = none(false, false, false);
  assert.equal(result, true, 'If supplied false, the result is true');

  result = none(0, null, undefined);
  assert.equal(!!result, true, 'If supplied falsey, the result is true');
});

/*
 * export a function named `any` which tests whether any of three variables is truthy
 */
test('any correctly tests whether any of three variables are truthy', function(assert) {
  let result = any(false, false, false);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = any(0, null, undefined);
  assert.equal(!!result, false, 'If supplied falsey, the result is falsey');

  result = any(false, false, true);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = any(true, false, false);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = any(false, true, false);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = any(true, true, true);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = any(1, 2, 3);
  assert.equal(!!result, true, 'If supplied truthy, the result is truthy');
});

/*
 * export a function named `isTrue` that returns whether a variable is `true`
 */
test('isTrue correctly tests whether a variable is true', function(assert) {
  let result = isTrue(false);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = isTrue(true);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = isTrue('hi');
  assert.equal(result, false, 'If supplied a truthy value, the result is false');

});

/*
 * export a function named `isTruthy` that returns whether a variable is `truthy`
 */
test('isTruthy correctly tests whether a variable is truthy', function(assert) {
  let result = isTruthy(false);
  assert.equal(result, false, 'If supplied false, the result is false');

  result = isTruthy(true);
  assert.equal(result, true, 'If supplied true, the result is true');

  result = isTruthy('hi');
  assert.equal(result, true, 'If supplied a truthy value, the result is false');

});
