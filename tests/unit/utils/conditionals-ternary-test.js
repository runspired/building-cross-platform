import conditionalsTernary from '../../../utils/conditionals-ternary';
import { module, test } from 'qunit';

module('Unit | Utility | conditionals ternary');

// Replace this with your real tests.
test('Test that the function compares the numbers and uses a ternary', function(assert) {
  let result = conditionalsTernary(1, 2);
  assert.equal(result, 2, 'If the second is greater, it is returned.');

  result = conditionalsTernary(1, 0);
  assert.equal(result, 1, 'If the first is greater, it is returned.');

  result = conditionalsTernary(0, 0);
  assert.equal(result, 0, 'If they are equal, the value is correct.');

  let test1 = conditionalsTernary.toString().match(/\?/);
  let test2 = conditionalsTernary.toString().match(/:/);

  assert.equal(!!test1 && !!test2, true, 'A ternary was used');
});
