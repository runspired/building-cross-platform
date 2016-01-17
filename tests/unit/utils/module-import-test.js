import moduleImport from '../../../utils/module-import';
import { module, test } from 'qunit';

module('Unit | Utility | module import');

test('The modules correctly re-exports each dependency.', function(assert) {
  assert.ok(moduleImport.spam && typeof moduleImport.spam === 'function', 'spam was re-exported');
  assert.ok(moduleImport.foo && typeof moduleImport.foo === 'function', 'foo was re-exported');
  assert.ok(moduleImport.bar && typeof moduleImport.bar === 'function', 'bar was re-exported');
  assert.ok(moduleImport.baz && typeof moduleImport.baz === 'function', 'baz was re-exported');
});
