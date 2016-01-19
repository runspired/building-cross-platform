/*
 * export a default function (leave it unnamed) that finds the hypotenuse
 * of a box.
 *
 * The hypotenuse follows the formula a^2 + b^2 = c^2.
 *
 * You can use `Math.sqrt` as needed to find the square root.
 *
 * The box you receive will be an object of the form
 *
 * {
 *   top,
 *   left,
 *   right,
 *   bottom
 * }
 *
 * where top, left, right, and bottom is the numerical pixel offset of that
 * edge of the box from an imagined (0, 0).  (0, 0) is the top left of the
 * screen.  The position doesn't really matter, you just need to find the
 * dimensions (height and width) and use them as a and b.
 *
 * For this assignment, you should destructure the object
 * you receive, there are two ways to implement this, see
 * if you can discover both, only one will make the tests pass unfortunately.
 *
 * destructuring pulls out the pieces of an object you need to use.
 *
 * For instance,
 *
 * `import { foo } from './functions';`
 *
 * is actually a destructuring assignment that "pulls" foo out of the functions
 * module.
 *
 * ```
 * const {
 *   copy,
 *   computed,
 *   Component
 * } = Ember;
 * ```
 *
 * is a destructuring assignment that pulls `copy` `computed` and `Component`
 * out of the object `Ember`;  This makes `copy` `computed` and `Component`
 * available to you to use without needing to do `Ember.copy`, `Ember.computed`
 * or `Ember.Component`.
 *
 * destructuring is useful for two code maintainability reasons we will
 * discuss further in class.
 *
 */
