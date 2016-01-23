import deepEqual from '../../../../utils/week-3/deep-equal';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/deep equal');

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

test('deepEqual correctly determines equality', function(assert) {
  let result = deepEqual(a, b);
  assert.equal(result, true, 'The objects (a, b) should be equal');

  result = deepEqual(a, c);
  assert.equal(result, false, 'The objects (a, c) should not be equal');

  result = deepEqual(d, e);
  assert.equal(result, true, 'The objects (d, e) should be equal');
});
