/**
 * Sorting - Selection Sort
 * ------------------------
 * Write a function which accepts an array of randomly arranged integers
 * and returns the sorted equivalent (ascending).
 */

function selectionSort(arr) {
  let start = 0;

  while (start < arr.length - 1) {
    /* indices, not values */
    const next = start + 1;
    let min = start;
    let minSet = false;

    for (let i = next; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        min = i;
        minSet = true;
      }
    }

    /* only switch if min has been changed */
    if (minSet) [arr[start], arr[min]] = [arr[min], arr[start]];

    start++;
  }

  return arr;
}

console.log(selectionSort([])); // []
console.log(selectionSort([4, 9, 16, 5, 1])); // [1, 4, 5, 9, 16]
console.log(selectionSort([19, 12, 3, -1, 6])); // [-1, 3, 6, 12, 19]
