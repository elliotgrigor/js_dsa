/**
 * Sorting - Bubble Sort
 * ---------------------
 * Write a function which accepts an array of randomly arranged integers
 * and returns the sorted equivalent (ascending).
 */

function bubbleSort(arr) {
  let last = arr.length - 1;

  while (last > 0) {
    /* push next largest number to end */
    for (let i = 0; i <= last; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    /* set new end */
    last--;
  }

  return arr;
}

console.log(bubbleSort([])); // []
console.log(bubbleSort([4, 9, 16, 5, 1])); // [1, 4, 5, 9, 16]
console.log(bubbleSort([19, 12, 3, -1, 6])); // [-1, 3, 6, 12, 19]
