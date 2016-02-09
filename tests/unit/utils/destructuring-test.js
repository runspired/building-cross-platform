import destructuring from '../../../utils/destructuring';
import { module, test } from 'qunit';

module('Unit | Utility | destructuring');

const rootFive = Math.sqrt(5);

test('The Function Returns the Hypotenuse', function(assert) {
  let result = destructuring({
    top: 1,
    left: 2,
    right: 6,
    bottom: 3
  });
  assert.equal(result, 2 * rootFive, 'The Hypotenuse is correct');
});

test('The Function Deconstructs with Const', function(assert) {
  let test1 = destructuring.toString().match(/function \(_ref/);

  assert.equal(!!test1, true, 'Desconstruction Was Used: ' + destructuring.toString());
});
