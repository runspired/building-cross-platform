/*
 * You can read about imports here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 *
 * For this exercise, you will need to `import` `spam`, `foo`, `bar` and `baz` from
 * your module-export exercise.
 *
 * ES6 allows you to "re-export" an import.
 *
 * You will need to export all four functions that you imported as your default
 * export.
 */
import  { foo,  bar,  baz } from './module-export';
import spam from './module-export';

export default { foo,  bar,  baz, spam };
