/**
 * Frequency Counter - Problem 1
 * -----------------------------
 * Given two arrays, return true if each value in the first array has a matching
 * squared value in the second. Each number must have a corresponding value.
 * i.e. one square can't be applied to two values in the first array, and vice
 * versa.
 */

function squaresMatch(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let [arr1Counter, arr2Counter] = [{}, {}];

  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];
    let arr1CounterVal = arr1Counter[val1];
    let arr2CounterVal = arr2Counter[val2];

    /**
     * If value doesn't exist for the key (the current array value) in the
     *   counter object, initialise it.
     * Otherwise, increment it.
     */
    if (!arr1CounterVal) {
      arr1Counter[val1] = 1;
    } else {
      arr1Counter[val1] = arr1CounterVal += 1;
    }

    /**
     * Same applies here as above
     */
    if (!arr2CounterVal) {
      arr2Counter[val2] = 1;
    } else {
      arr2Counter[val2] = arr2CounterVal += 1;
    }
  }

  console.log(arr1Counter);
  console.log(arr2Counter);

  for (let key in arr1Counter) {
    key = parseInt(key);

    if (arr2Counter[key**2] !== arr1Counter[key]) {
      return false;
    }
  }

  return true;
}

if (squaresMatch(
    [1, 1, 1, 2, 2, 3, 3, 3, 3],
    [9, 1, 7, 1, 9, 4, 9, 4, 1],
  )) {
  console.log("It's a match!");
} else {
  console.log('Not a match.');
}
