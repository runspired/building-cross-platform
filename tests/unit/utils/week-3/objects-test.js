import {
 isFromPrototype,
 isInstanceOf,
 doesExtendType
} from '../../../../utils/week-3/objects';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/objects');

class Demo {}
class ExtendedDemo extends Demo {}

test('isFromPrototype correctly determines if a property is from the prototype', function(assert) {
  let a = new Demo();
  Demo.prototype.foo = 'bar';
  a.bar = 'foo';

  let result = isFromPrototype(a, 'foo');
  assert.equal(result, true, 'foo originates from the prototype');

  result = isFromPrototype(a, 'bar');
  assert.equal(result, false, 'bar originates from the instance');

  try {
    result = isFromPrototype(a, 'baz');
    assert.ok(false, 'Non existent keys should throw an error');
  } catch (e) {
    assert.ok(true, 'Non existent keys should throw an error');
    assert.equal(e.message.indexOf('KeyNotFound'), 0, 'The error message should start with "KeyNotFound"');
  }

});

test('isInstanceOf returns true if and only if the instance is an instance' +
  ' of Type or an instance of a subType of Type', function(assert) {
  let a = new ExtendedDemo();

  assert.equal(isInstanceOf(a, Demo), true, 'returns true if the instance is a sub-type of Type');
  assert.equal(isInstanceOf(a, ExtendedDemo), true, 'returns true if the instance is of Type');

  assert.equal(isInstanceOf(Error, Demo), false, 'returns false if the instance does not inherit from Type');
});

test('doesExtendType returns true if and only if the instance is an instance' +
  ' of a subType of Type, not of Type itself', function(assert) {
  let a = new ExtendedDemo();

  assert.equal(doesExtendType(a, Demo), true, 'returns true if the instance is a sub-type of Type');
  assert.equal(doesExtendType(a, ExtendedDemo), false, 'returns false if the instance is of Type');

  assert.equal(doesExtendType(Error, Demo), false, 'returns false if the instance does not inherit from Type');
});
