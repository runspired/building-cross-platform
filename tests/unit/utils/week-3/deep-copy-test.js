import deepCopy from '../../../../utils/week-3/deep-copy';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/deep copy');

const a = {
  foo: 'bar',
  baz: {
    spam: {
      '1': 'hello'
    }
  }
};

const b = {
  foo: 'bar',
  baz: {
    spam: {
      '1': 'hello'
    }
  }
};

const c = {
  foo: 'bar',
  baz: {
    spam: {
      '1': false
    }
  }
};


const d = {
  a,
  b,
  c
};

const e = {
  a,
  b,
  c
};

d.d = d;
d.e = e;

e.d = d;
e.e = e;

test('deepCopy(obj) correctly creates a deep copy', function(assert) {
  let result = deepCopy(a);
  assert.equal(result === a, false, 'deepCopy should return a new object');

  assert.equal(result.foo, 'bar', 'deepCopy correctly copies simple properties');
  assert.equal(result.baz === a.baz, false, 'deepCopy does not maintain references');
  assert.equal(result.baz.spam === a.baz.spam, false, 'deepCopy properly recursively copies');
  assert.equal(result.baz.spam['1'], 'hello', 'deepCopy properly copied everything');
});

test('deepCopy(obj) handles highly recursive and self-referential objects', function(assert) {
  let result = deepCopy(d);

  assert.equal(result === d, false, 'deepCopy should return a new object');
  assert.equal(result.d, result, 'deepCopy correctly created an internal self-reference');
  assert.equal(result.e, result.e.e, 'deepCopy correctly created a recursive internal self-reference');
});
