// export a default function named `deepEqual`
// which takes two objects, and does a deep comparison
// to determine if they are equal
// deepEqual should be able to handle "recursive" objects.

// Recursive objects are objects which reference themselves,
// or which contain another object which references either itself
// or the original object


// useful things to know
// Object.keys https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

export default function deepEqual(a, b, seen) {
  if (!exists(a) || !exists(b)) {
    return false;
  }
  if (a === b) {
    return true;
  }
  if (getType(a) !== getType(b)) {
    return false;
  }
  seen = seen || [];
  if (inArray(seen, a)) {
    // do something
  }

  if (isArray(a)) {
    pushUnique(seen, a);
    pushUnique(seen, b);
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i], seen)) {
        return false;
      }
    }
    return true;
  }

  if (isObject(a)) {
    pushUnique(seen, a);
    pushUnique(seen, b);
    for (let i in a) {
      if (a.hasOwnProperty(i)) {
        if (!deepEqual(a[i], b[i], seen)) {
          return false;
        }
      }
    }
    return true;
  }

  return a === b;
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
