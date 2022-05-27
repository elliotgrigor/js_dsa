/**
 * Divide & Conquer - Binary Search
 * -----------------------------
 * Write a function which accepts a sorted array and a value, and
 * returns the index at which the value is stored. Otherwise, return -1.
 */

function binarySearch(sortedArray, searchTerm) {
  /**
   * 1. Get middle value of current window
   * 2. If middle value == searched value, return current index
   * 3. If less than searched value, shrink window from left
   * 4. If greater than searched value, shrink window from right
   * 5. If result not set, return -1
   */

  let [lPtr, rPtr] = [0, sortedArray.length - 1];
  let result = -1;

  while (lPtr <= rPtr) {
    const mid = rPtr - Math.floor((rPtr - lPtr) / 2);
    
    if (sortedArray[mid] === searchTerm) {
      result = mid;
      break;
    }

    /* ignore values to left of middle */
    if (sortedArray[mid] < searchTerm) lPtr = mid + 1;
    /* ignore values to right of middle */
    if (sortedArray[mid] > searchTerm) rPtr = mid - 1;
  }

  return result;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
   40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
  10,
)); // 2
console.log(binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
   40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
  95,
)); // 16
console.log(binarySearch(
  [5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
   40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
  100,
)); // -1
