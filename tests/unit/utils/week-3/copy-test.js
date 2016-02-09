import copy from '../../../../utils/week-3/copy';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/copy');

const a = {
  foo: 'bar',
  baz: {
    spam: {
      '1': 'hello'
    }
  }
};

test('copy(obj) correctly creates a shallow copy', function(assert) {
  let result = copy(a);
  assert.equal(result === a, false, 'copy should return a new object');

  assert.equal(result.foo, 'bar', 'copy correctly copies simple properties');
  assert.equal(result.baz, a.baz, 'copy correctly copies references');

  result = copy(undefined);
  assert.equal(result === undefined, true, 'copy should handle falsey objects');

  result = copy(null);
  assert.equal(result === null, true, 'copy should handle falsey objects');

  result = copy(false);
  assert.equal(result === undefined, false, 'copy should handle falsey objects');

  result = copy(0);
  assert.equal(result === 0, true, 'copy should handle falsey objects');

  result = copy(5);
  assert.equal(result === 5, true, 'copy should handle primitives (number)');

  const b = function() {};
  result = copy(b);
  assert.equal(result === b, true, 'copy should handle primitives (function)');
});
