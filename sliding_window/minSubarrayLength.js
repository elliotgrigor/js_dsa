/**
 * Sliding Window - Problem 9
 * --------------------------
 * Write a function which accepts two parameters - an array of positive
 * integers, and a positive integer - and returns the minimal length of
 * a contiguous subarray of which the sum is greater than or equal to
 * the integer passed to the function. If not, return 0 instead.
 *   e.g. [2, 3, 1, 2, 4, 3], 7 -> [2, 3, 1, 2] = 8 (length: 4)
 *                              -> [3, 1, 2, 4] = 10 (length: 4)
 *                              -> [1, 2, 4] = 7 (length: 3)
 *                              -> [2, 4, 3] = 9 (length: 3)
 *                              -> [4, 3] = 7 (length: 2) == shortest
 * 
 * Must have linear time complexity O(n) and constant space complexity
 * O(1)
 */

function minSubarrayLength(nums, target) {
  /**
   * 1. Loop over array, setting window start and end to index 1
   * 2. If total < target, increase window and add new value
   * 3. If total >= target, set window length if it's smallest &
   *      remove first value from the current window
   * 4. If the the end of the window exceeds the array size, stop
   */
}

console.log(minSubarrayLength([2, 3, 1, 2, 4, 3], 7)); // 2, because [4,3]
console.log(minSubarrayLength([2, 1, 6, 5, 4], 9)); // 2, because [5,4]
console.log(minSubarrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 9)); // 1, because [62]
console.log(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubarrayLength([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubarrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
