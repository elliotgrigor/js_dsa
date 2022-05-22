/**
 * Sliding Window - Problem 8
 * --------------------------
 * Given an array of integers and a number, write a function which finds the
 * maximum sum of a subarray with the length of the number passed to the
 * function.
 * 
 * Note: A subarray must consist of *consecutive* elements from the original
 * array.
 *   e.g. [100, 200, 300] -> [100, 200] true
 *                        -> [100, 300] false
 * 
 * Must have linear time complexity O(n) and constant space complexity O(1)
 */

function maxSubarraySum(nums, count) {
  /**
   * 1. Find the sum of first group of ${count} length
   * 2. Start loop at count+1
   * 3. Add current array value & subtract value outside of current window
   * 4. Compare current total to max total
   * 5. If larger, set max to current
   */
  
  if (count > nums.length) return null;

  let [max, current] = [0, null];
  let i = 0;

  while (i < count) {
    max += nums[i]; i++;
  }

  current = max;

  for (let j = i; j < nums.length; j++) {
    const currentVal = nums[j];
    const outOfRangeVal = nums[j - count];

    current += currentVal;
    current -= outOfRangeVal;

    if (max < current) max = current;
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
