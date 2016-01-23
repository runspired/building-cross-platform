/*
 * With this exercise, we introduce "references".
 *
 * Excepting Javascript's 6 Primitive Types, everything
 * is an Object, and all object's are references.
 *
 * That's not entirely true, to be honest. Even the 6 primitive
 * types are object, and are always references. But unlike
 * other objects, primitives have values that cannot be changed.
 *
 * You can reassign a variable to a different primitive value, but
 * you don't ever actually change the primitive itself.  The easiest
 * way to conceptualize this, I've found, is to consider the absurdity
 * of trying to change the letter "a" to be the letter "b". You can
 * replace it, yes, but you can't fundamentally alter the alphabet
 * (or rather if you did, it would be a serious mistake).
 *
 * Javascript has two variants of equality operators.
 * `!=` and `==` which check "rough equality"
 * `!==` and `!==` which check "strict equality"
 *
 * In almost all cases, you should use the check for strict equality.
 *
 * What's the difference?
 *
 * `'1' == 1` but `'1' !== 1`
 *
 * Because Javascript has dynamic typing, it considers the string "1"
 * and the number 1 to be "roughly equal". Since they have different
 * Primitive types though, it does not consider them to be strictly equal.
 *
 * The check for strictness is actually a check based on reference.
 *
 * Let's consider the following objects.
 *
 * ```
 * const a = { hello: 'world' };
 * ```
 *
 * This object, a, has the property `hello` with the value `world`.
 * We can access the value of `world` by accessing `a.hello`, this syntax
 * is referred to as `dot notation`.  We can also access it "array style"
 * via `a["hello"]`.  These are equivalent.
 *
 * Now let's define another object.
 *
 * ```
 * const b = { hello: 'world' };
 * ```
 *
 * To the human eye, it's currently evident that a and b are equal. But are they?
 * The answer is that to Javascript, these objects are not equal at all, because
 * they do not reference the same object.  The check for equality does not care about
 * the "structure" of the objects being compared, only whether they have the same
 * reference.
 *
 * A reference is roughly a "pointer" or "id" to a specific piece of memory, so objects
 * with the same reference share the same memory on the computer and ergo are the
 * same thing.
 *
 * both `a == b` and `a === b` will return `false`.
 *
 * If we want to check whether `a` and `b` are equal in value (even if not in reference),
 * we'd need to either use a function designed to compare objects, or write our own.
 *
 * In this exercise, we will write two equality functions, the first
 * will just check references, the second will check "structure".
 */

// export a function `is` that strictly compares `a` and `b`
export function is(a, b) {
  return a === b;
}

// export a function `equal` that compares the structures of `a` and `b`.
// for this exercise, we're going to assume that all objects have the following
// shape, so we only need to compare values for that shape to determine equality
// that shape is
/*
    {
      top,
      right,
      bottom,
      left
    }
 */
// you can "brute force this", but ideally you will try to find an elegant solution
// using either a `for in` loop with `object.hasOwnProperty` or a `for` loop with `Object.keys`
// (you would have to look those things up on MDN.)
// for extra credit, make this work with arbitrary objects, and with arbitrary depth.
// to do so, you would need to utilize the `typeof` function

var list = Object.keys(example)
list = (key1, key2, key3, key 4)

export function equal(a, b) {
 for (var key in Object.keys(a)) {
   if (a.key !== b.key) {
     return false;
   }
 }
 return true;
 }
