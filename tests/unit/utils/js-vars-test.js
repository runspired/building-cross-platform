import { is, equal } from '../../../utils/js-vars';
import { module, test } from 'qunit';

module('Unit | Utility | js vars');

test('Is compares referential equality correctly', function(assert) {
  const a = {};
  const b = {};
  const c = a;

  let result = is(a, b);
  assert.equal(result, false, 'A should not equal b');

  result = is(a, c);
  assert.equal(result, true, 'A should equal c');
});

test('equal compares simple structural equality correctly', function(assert) {
  const a = {
    'hi': 'there'
  };
  const b = {
    'hi': 'there'
  };
  const c = a;
  const d = {
    'hi': 'there',
    'not': 'me'
  };

  let result = equal(a, b);
  assert.equal(result, true, 'A should equal b');

  result = equal(a, c);
  assert.equal(result, true, 'A should equal c');

  result = equal(a, d);
  assert.equal(result, false, 'A should not equal d');
});
