import { bloodType, advancedBloodType, getType, getTypeB } from '../../../utils/conditionals-if';
import { module, test } from 'qunit';

module('Unit | Utility | conditionals if');

/*
 * export a function named `bloodType` which
 * expects a number and returns
 * `A` if the number is greater than 1.
 * `B` if the number is less than 1.
 * and `O` if the number is 1.
 *
 * Do this without using `else`.
 */
test('bloodType returns the correct values.', function(assert) {
  let result = bloodType(0);
  assert.equal(result, 'B', 'A number less than 1 returns B');

  result = bloodType(2);
  assert.equal(result, 'A', 'A number greater than 1 returns A');

  result = bloodType(1);
  assert.equal(result, 'O', 'A number equal to 1 returns O');

  try {
    result = bloodType('a');
    assert.ok(false, 'A non number throws an error.');
  } catch(e) {
    assert.ok(true, 'A non number throws an error.');
  }
});

/*
 * export a function named `advancedBloodType` which
 * expects two numbers and returns
 * `A` if the first number is greater than 1.
 * `B` if the first number is less than 1.
 * and `O` if the first number is 1.
 *
 * The return should be modified to include
 * `+` if the second number is > 0, and `-` if
 * the second number <= 0;
 *
 * Do this without using `else`.
 */
test('bloodType returns the correct values.', function(assert) {
  let result = advancedBloodType(0, 1);
  assert.equal(result, 'B+', '(0, 1) returns B+');

  result = advancedBloodType(0, 0);
  assert.equal(result, 'B-', '(0, 0) returns B-');

  result = advancedBloodType(2, 1);
  assert.equal(result, 'A+', '(2, 1) returns A+');

  result = advancedBloodType(2, 0);
  assert.equal(result, 'A-', '(2, 0) returns A-');

  try {
    advancedBloodType('a', 0);
    assert.ok(false, 'A non numerical first parameter throws an error.');
  } catch(e) {
    assert.ok(true, 'A non numerical first parameter throws an error.');
  }

  try {
    advancedBloodType(0, 'a');
    assert.ok(false, 'A non numerical second parameter throws an error.');
  } catch(e) {
    assert.ok(true, 'A non numerical second parameter throws an error.');
  }

  result = advancedBloodType.toString().match(/else/);
  assert.equal(!!result, true, 'You did not use else');
});

/*
 * export a function named `getType` which takes
 * a string (type) where:
 *
 * type will be one of `a`, `b`, `c`, `d`.
 *
 * then finds the "number" for that type where:
 *
 * (a=1, b=2,c=3, d=4)
 *
 * then returns the square of that number.
 *
 * do this using if, else if, else
 */
test('getType returns the correct number.', function(assert) {
  let result = getType('a');
  assert.equal(result, 1, 'a returns 1');

  result = getType('b');
  assert.equal(result, 4, 'b returns 4');

  result = getType('c');
  assert.equal(result, 9, 'c returns 9');

  result = getType('d');
  assert.equal(result, 16, 'd returns 16');
});

/*
 * export a function named `getTypeB` which takes
 * a string (type) where:
 *
 * type will be one of `a`, `b`, `c`, `d`, `e`.
 *
 * then finds the "number" for that type where:
 *
 * (a=1, b=2,c=3, d=4, e=5)
 *
 * then returns the square + 1 of that number.
 *
 * do this using a `switch` statement
 */
test('getTypeB returns the correct number.', function(assert) {
  let result = getTypeB('a');
  assert.equal(result, 2, 'a returns 2');

  result = getTypeB('b');
  assert.equal(result, 5, 'b returns 5');

  result = getTypeB('c');
  assert.equal(result, 10, 'c returns 10');

  result = getTypeB('d');
  assert.equal(result, 17, 'd returns 17');

  result = getTypeB('e');
  assert.equal(result, 26, 'e returns 26');

  result = getTypeB.toString().match(/switch/);
  assert.equal(!!result, true, 'You did not use switch');
});

