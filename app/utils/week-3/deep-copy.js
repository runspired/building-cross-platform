// export a default function named `deepCopy`
// which an object and returns a deep copy of the object.
// deepCopy should be able to handle "recursive" objects.

// Recursive objects are objects which reference themselves,
// or which contain another object which references either itself
// or the original object

// you may want to use your "Map" implementation to track objects
// you've seen previously.  You can import it with
// import Map from './map';

/* Example:

 Given the object below:
 ```
 {
   a: 1,
   b: 2,
   e: {
     a: 4,
     b: 5,
     c: 6
   },
   f: [1, { a: '6' }, 3, 4],
   g: function() {}
 }
 ```

 Knowing that the values of `e`, `f`, and `g` are references:
 For a `deep` copy. `e` and `f` will also be copies, any objects
 or arrays with them will also need to be copied.

 All functions (e.g. `g`) should be copied by reference.

 Detecting a recursive object is easy.
 A strict `===` between two references will tell you whether they are the same,
 similarly, given the objects referenced by the variables `one`, `two` and `three`,
 if you have an array containing these objects `[one, two, three]`, it is possible
 to do an easy check to see if the object is within the array.

 */
import Map from './map';

export default function deepCopy(a, seen) {
  if (!a) {
    return a;
  }
  seen = seen || new Map();

  const cached = seen.get(a);
  if (cached) {
    return cached;
  }

  if (isArray(a)) {
    let arr = [];
    seen.set(a, arr);

    for (let i = 0; i < a.length; i++) {
      arr[i] = deepCopy(a[i], seen);
    }

    return arr;
  }

  if (isObject(a)) {
    let obj = {};
    seen.set(a, obj);

    for (let i in a) {
      if (a.hasOwnProperty(i)) {
        obj[i] = deepCopy(a[i], seen);
      }
    }

    return obj;
  }

  return a;
}

function getType(obj) {
  return Object.prototype.toString.call(obj);
}

function exists(a) {
  return a !== undefined && a !== null;
}

function inArray(arr, value) {
  return arr.indexOf(value) !== -1;
}

function pushUnique(arr, value) {
  if (!inArray(arr)) {
    arr.push(value);
  }
}

function isArray(obj) {
  return getType(obj) === '[object Array]';
}

function isObject(obj) {
  return getType(obj) === '[object Object]';
}
