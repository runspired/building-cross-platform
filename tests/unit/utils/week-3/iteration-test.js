import {
  whileExample,
  doWhileExample,
  forExample,
  blindForInExample,
  forInExample
} from '../../../../utils/week-3/iteration';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/iteration');

test('whileExample functions properly', function(assert) {
  let count = 0;
  const fnA = function() {
    return count <= 10;
  };
  const fnB = function() {
    count++;
  };

  whileExample(fnA, fnB);
  assert.equal(count, 11, 'We iterated for as long as proper');
});

test('doWhileExample functions properly', function(assert) {
  let count = 0;
  const fnA = function() {
    return count <= 10;
  };
  const fnB = function() {
    count++;
  };

  doWhileExample(fnA, fnB);
  assert.equal(count, 11, 'We iterated for as long as proper');

  doWhileExample(fnA, fnB);
  assert.equal(count, 12, 'We iterated for as long as proper');
});

test('forExample functions properly', function(assert) {
  let count = 0;
  const arr = ['a', 'b', 'c'];
  const fn = function(index, value) {
    assert.equal(value, arr[index], 'The value is correct');
    count++;
  };

  forExample(arr, fn);
  assert.equal(count, 3, 'We iterated the entire array');
});

test('blindForInExample functions properly', function(assert) {
  function Demo() {}
  Demo.prototype.foo = 'bar';
  let a = new Demo();
  let count = 0;
  a.bar = 'foo';

  const fn = function(key, value) {
    assert.equal(value, a[key], 'The value is correct');
    count++;
  };

  blindForInExample(a, fn);
  assert.equal(count, 2, 'We iterated the entire object');
});

test('forInExample functions properly', function(assert) {
  function Demo() {}
  Demo.prototype.foo = 'bar';
  let a = new Demo();
  let count = 0;
  a.bar = 'foo';

  const fn = function(key, value) {
    assert.equal(value, a[key], 'The value is correct');
    count++;
  };

  forInExample(a, fn);
  assert.equal(count, 1, 'We iterated the entire object, excluding prototype properties');
});
