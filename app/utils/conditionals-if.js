/*
 * export a function named `bloodType` which
 * expects a number and returns
 * `A` if the number is greater than 1.
 * `B` if the number is less than 1.
 * and `O` if the number is 1.
 *
 * Do this without using `else`.
 */

export function bloodType(number) {
  if (isNaN(number)) {
    return error;
  }
  if (number > 1) {
    return 'A';
  }
  if (number < 1) {
    return 'B';
  }
  if (number = 1) {
    return 'O';
  }
}

/*
 * export a function named `advancedBloodType` which
 * expects two numbers and returns
 * `A` if the first number is greater than 1.
 * `B` if the first number is less than 1.
 * and `O` if the first number is 1.
 *
 * The return should be modified to include
 * `+` if the second number is > 0, and `-` if
 * the second number <= 0;
 *
 * Do this without using `else`.
 */

export function advancedBloodType(a, b) {
  if (isNaN(number)) {
    return error;
  }
  if (a > 1 && b > 0) {
    return 'A+';
  }
  if (a > 1 && b <= 0) {
    return 'A-';
  }
  if (a < 1 && b > 0) {
    return 'B+';
  }
  if (a < 1 && b <= 0) {
    return 'B-';
  }
  if (a = 0 && b > 0) {
    return '0+';
  }
  if (a = 0 && b <= 0) {
    return '0-';
  }
}

/*
 * export a function named `getType` which takes
 * a string (type) where:
 *
 * type will be one of `a`, `b`, `c`, `d`.
 *
 * then finds the "number" for that type where:
 *
 * (a=1, b=2,c=3, d=4)
 *
 * then returns the square of that number.
 *
 * do this using if, else if, else
 */

export function getType(string) {
  let number = 0;
  if (string === 'a') {
    number = 1;
  } else if (string === 'b') {
    number = 2;
  } else if (string === 'c') {
    number = 3;
  } else {
    number = 4;
  }
  return number * number;
}

/*
 * export a function named `getTypeB` which takes
 * a string (type) where:
 *
 * type will be one of `a`, `b`, `c`, `d`, `e`.
 *
 * then finds the "number" for that type where:
 *
 * (a=1, b=2,c=3, d=4, e=5)
 *
 * then returns the square + 1 of that number.
 *
 * do this using a `switch` statement
 */
export function getTypeB(string) {
  let number = 0;
  switch (string) {
    case 'a':
      number = 1;
      break;
    case 'b':
      number = 2;
      break;
    case 'c':
      number = 3;
      break;
    case 'd':
      number = 4;
      break;
    case 'e':
      number = 5;
      break;
    default:
      number = 0;
      break;
    }
  return (number * number) + 1;
}
