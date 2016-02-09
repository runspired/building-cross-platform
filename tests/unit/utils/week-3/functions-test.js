import {
  execute, prepare, invokeWithArgs, invokeWithParams, createCallable, callWithParams
} from '../../../../utils/week-3/functions';
import { module, test } from 'qunit';

module('Unit | Utility | week 3/functions');

test('execute executes the function', function(assert) {
  const a = {};
  const fn = function() {
    return a;
  };

  let result = execute(fn);
  assert.equal(result, a, 'function was properly executed');
});

test('prepare returns a properly bound function', function(assert) {
  const a = {
    b: 'World'
  };
  const fn = function() {
    return `Hello ${this.b}!`;
  };

  let result = prepare(fn, a);
  assert.equal(result(), 'Hello World!', 'function was properly prepared');
});

test('invokeWithArgs invokes with all args and the right context', function(assert) {
  const a = {
    b: 'Worlds'
  };
  const args = [1, 2, 3];

  const fn = function(...args) {
    return [this.b, ': ', args.join(', ')].join('');
  };

  let result = invokeWithArgs(fn, a, args);
  assert.equal(result, 'Worlds: 1, 2, 3', 'function was properly invoked with all args');
});

test('invokeWithParams invokes with correct params and the right context', function(assert) {
  const a = {
    b: 'Seen'
  };

  const fn = function(...args) {
    return [this.b, ': ', args.join(', ')].join('');
  };

  let result = invokeWithParams(fn, a, 1, 2, 3);
  assert.equal(result, 'Seen: 1, 2, 3', 'function was properly invoked with all params');
});

test('createCallable returns a properly prepared function', function(assert) {
  const a = {
    b: 'Ready'
  };

  const fn = function(...args) {
    return [this.b, ': ', args.join(', ')].join('');
  };

  let result = createCallable(fn, a, 1, 2);
  assert.equal(result(), 'Ready: 1, 2', 'function was properly invoked with all params');
});

test('createCallable returns a properly prepared function', function(assert) {
  const a = {
    b: 'Skip'
  };

  const fn = function(...args) {
    return [this.b, ': ', args.join(', ')].join('');
  };

  let result = callWithParams(fn, a, 1, 2);
  assert.equal(result, 'Skip: 1, 2', 'function was properly invoked with all params');
});
