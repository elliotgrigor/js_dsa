/**
 * Sorting - Merge Sort
 * --------------------
 * Write a function which accepts an array of randomly arranged integers
 * and returns the sorted equivalent (ascending).
 */

/* Problem A - Implement (sorted) array merger */
function merge(arr1, arr2) {
  let [i1, i2] = [0, 0];
  let result = [];

  let end = arr1.length > arr2.length ? arr1.length : arr2.length;

  while (i1 < end && i2 < end) {
    if (i1 >= arr1.length) {
      /* add remainder when one array loop finishes */
      result.push(...arr2.slice(i2));
      break;
    }

    if (i2 >= arr2.length) {
      /* add remainder when one array loop finishes */
      result.push(...arr1.slice(i1));
      break;
    }

    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    } else {
      result.push(arr2[i2]);
      i2++;
    }
  }

  return result;
}

console.log(merge([1, 5, 8], [-1, 3, 10, 13])); // [-1, 1, 3, 5, 8, 10, 13]

/* Problem B - Implement sorting algorithm */
function mergeSort(arr) {
  /**
   * No idea what's supposed to happen here.
   * I'll come back to it later... maybe.
   */
}

console.log(mergeSort([])); // []
console.log(mergeSort([4, 9, 16, 5, 1])); // [1, 4, 5, 9, 16]
console.log(mergeSort([19, 12, 3, -1, 6])); // [-1, 3, 6, 12, 19]
