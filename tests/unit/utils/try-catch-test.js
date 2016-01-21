import tryCatch from '../../../utils/try-catch';
import { willError } from '../../../utils/try-catch';

import { module, test } from 'qunit';

function throwError() {
  throw new Error('Error');
}
function noThrowError() {
  return true;
}

module('Unit | Utility | try catch');

test('willError throws an error', function(assert) {
  let result;
  try {
    result = willError();
    assert.ok(false, 'willError did not throw an error');
  } catch (e) {
    assert.ok(true, 'willError did throw an error');
  }
});

test('try-catch default export will catch errors propertly', function(assert) {
  let result;
  const a = {
    finished: false
  };

  result = tryCatch(throwError, a);
  assert.equal(result, false, 'tryCatch returns false when an error is thrown');
  assert.equal(a.finished, true, 'tryCatch sets finished to true when an error is thrown');

  a.finished = false;
  result = tryCatch(noThrowError, a);
  assert.equal(result, true, 'tryCatch returns true when no error is thrown');
  assert.equal(a.finished, true, 'tryCatch sets finished to true when no error is thrown');

  let test1 = tryCatch.toString().match(/finally/);

  assert.equal(!!test1, true, 'You must use `finally` to set `finished`');
});
