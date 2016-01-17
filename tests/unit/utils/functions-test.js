import { sum, sayHello } from '../../../utils/functions';
import { module, test } from 'qunit';

module('Unit | Utility | functions');

test('Sum correctly adds two numbers', function(assert) {
  let result = sum(0, 1);
  assert.ok(result === 1);

  result = sum(5, 2);
  assert.ok(result === 7);

  result = sum(-5, -3);
  assert.ok(result === -8);
});

test('sayHello correctly greets me.', function(assert) {
  let result = sayHello('Chris');
  assert.equal(result, 'Hello Chris!', 'I was greeted incorrectly.');
});
