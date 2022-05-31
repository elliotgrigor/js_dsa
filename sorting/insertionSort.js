/**
 * Sorting - Insertion Sort
 * ---------------------
 * Write a function which accepts an array of randomly arranged integers
 * and returns the sorted equivalent (ascending).
 */

function insertionSort(arr) {
  let start = 1;

  while (start < arr.length) {
    let static = arr[start];

    for (let i = start - 1; i >= 0; i--) {
      const [current, next] = [arr[i], arr[i + 1]];

      if (static < current) {
        /* move bigger value right */
        arr[i + 1] = current;
        /* on last iteration, if lowest, set static to first value */
        if (i === 0) arr[i] = static;
      }
      else {
        if (static <= next) {
          /**
           * when static falls between current and next,
           * set next to static, then stop
           */
          arr[i + 1] = static;
          break;
        }
      }
    }

    start++;
  }

  return arr;
}

console.log(insertionSort([])); // []
console.log(insertionSort([4, 9, 16, 5, 1])); // [1, 4, 5, 9, 16]
console.log(insertionSort([19, 12, 3, -1, 6])); // [-1, 3, 6, 12, 19]
