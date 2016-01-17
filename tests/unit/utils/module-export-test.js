import moduleExport from '../../../utils/module-export';
import { foo, bar, baz } from '../../../utils/module-export';

import { module, test } from 'qunit';

module('Unit | Utility | module export');

test('The module has a default export', function(assert) {
  let result = moduleExport();
  assert.ok(result);
});

test('The module exports a function named foo', function(assert) {
  assert.ok(foo && typeof foo === 'function');
});

test('The module exports a function named bar', function(assert) {
  assert.ok(bar && typeof bar === 'function');
});

test('The module exports a function named baz', function(assert) {
  assert.ok(bar && typeof bar === 'function');
});
