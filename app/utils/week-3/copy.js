// export a function named `copy`
// which takes an object or an array and returns a shallow copy
// of the object or the array

// a "shallow" copy means that you return a new object/array,
// with identical keys/indeces to the original pointing at
// the same references for the value for each key or index

// you can use Object.prototype.toString to detect if something is
// an object or is an array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

export default function copy(obj) {
  if (!obj) {
    return obj;
  }
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    const ret = [];
    for (let i = 0; i < obj.length; i++) {
      ret[i] = obj[i];
    }
    return ret;
  }
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    const ret = {};
    for(let i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    return ret;
  }
  return obj;
}

