import Map from '../../../../utils/week-3/map';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/map');

test('A new Map can be instantiated', function(assert) {
  let result = new Map();
  assert.ok(result);
});

test('We can properly set, then get a key', function(assert) {
  let map = new Map();
  const a = {};
  const b = {};
  map.set(a, b);
  let result = map.get(a);

  assert.ok(result === b, 'We can get/set a value using an object as the key.');
});

test('set updates a key if existing', function(assert) {
  let map = new Map();
  const a = {};
  const b = {};
  const c = {};

  map.set(a, b);
  let result = map.get(a);
  assert.ok(result === b, 'Initial value is correct.');

  map.set(a, c);
  result = map.get(a);
  assert.ok(result === c, 'New value is correct.');
});

test('We can properly remove a key.', function(assert) {
  let map = new Map();
  const a = {};
  const b = {};
  map.set(a, b);

  let result = map.get(a);
  assert.ok(result === b, 'The value to be deleted was set.');

  map.delete(a);
  result = map.get(a);
  assert.ok(result === undefined, 'delete removed the key');
});

test('We can properly clear all keys.', function(assert) {
  let map = new Map();
  const a = {};
  const b = {};
  map.set(a, b);
  map.set(b, a);

  let result = map.get(a);
  assert.ok(result === b, 'The value to be cleared was set.');
  result = map.get(b);
  assert.ok(result === a, 'The value to be cleared was set.');

  map.clear();
  result = map.get(a);
  assert.ok(result === undefined, 'clear removed the key');

  result = map.get(b);
  assert.ok(result === undefined, 'clear removed the key');
});

test('forEach properly iterates all keys.', function(assert) {
  let map = new Map();
  const a = {};
  const b = {};
  map.set(a, b);
  map.set(b, a);

  const context = { count: 0 };
  map.forEach(function(value, key) {
    assert.ok(value !== undefined, 'We were passed a value');
    assert.ok(key !== undefined, 'We were passed a key');
    assert.ok(this.hasOwnProperty('count'), 'We were supplied the proper context');
    this.count++;
  }, context);

  assert.equal(context.count, 2, 'We saw all keys');
  context.count = 0;

  map.forEach(function(value, key) {
    assert.ok(value !== undefined, 'We were passed a value');
    assert.ok(key !== undefined, 'We were passed a key');
    context.count++;
  });

  assert.equal(context.count, 2, 'We saw all keys');
  context.count = 0;
});
