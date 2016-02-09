import { inArray, remove, append, insertAt, get, set } from '../../../../utils/week-3/arrays';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/arrays');

test('inArray correctly detects a value is present in the array', function(assert) {
  const a = {};
  const arr = [1, 2, 3, 4, 5, a];

  let result = inArray(arr, a);
  assert.equal(result, true, 'The item is in the array');

  result = inArray(arr, 6);
  assert.equal(result, false, 'The item is not in the array');
});

test('remove correctly removes a value from the array', function(assert) {
  const a = {};
  const arr = [1, 2, 3, 4, 5, a];

  let result = remove(arr, a);
  assert.equal(result, a, 'The removed item is returned');

  result = arr.indexOf(a);
  assert.equal(result, -1, 'The item is no longer in the array');
});

test('append correctly adds a value to the array', function(assert) {
  const a = {};
  const arr = [1, 2, 3, 4, 5];

  let result = append(arr, a);
  assert.equal(result, 6, 'The new array length is returned');

  result = arr.indexOf(a);
  assert.equal(result, 5, 'The item was appended the array');
});


test('insertAt correctly adds a value to the array in the right spot', function(assert) {
  const a = {};
  const arr = [1, 2, 3, 4, 5];

  insertAt(arr, 5, a);
  assert.equal(arr[5], a, 'The new array length is returned');
  assert.equal(arr.length, 6, 'The insertion looks correct');
  assert.equal(arr[5], a, 'The new array length is returned');

  insertAt(arr, 3, a);
  assert.equal(arr[3], a, 'The item was inserted into the array');
  assert.equal(arr.length, 7, 'The insertion looks correct');
  assert.equal(arr[4], 4, 'The existing value was not overwritten');
});

test('get correctly returns a value from the array', function(assert) {
  const arr = [1, 2, 3];

  let result = get(arr, 2);
  assert.equal(result, 3, 'The value was properly retrieved');
});

test('set correctly updates a value in the array', function(assert) {
  const arr = [1, 2, 3];

  set(arr, 1, 3);
  assert.equal(arr[1], 3, 'The value was properly updated');
});
