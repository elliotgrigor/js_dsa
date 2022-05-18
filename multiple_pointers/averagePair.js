/**
 * Multiple Pointers - Problem 6
 * -----------------------------
 * Given a sorted array of integers and a target average, determine if there is
 * a pair of values in the array where the average pair equals the target
 * average. There may be more than one pair that matches the average target.
 * 
 * Must have linear time complexity O(n) and constant space complexity O(1).
 */

function averagePair(ascendingNumbers, targetAvg) {
  /**
   * 1. Check array for value matching targetAvg
   * 2. Compare this value to its immediate neighbour
   * 3. If same value, done -> return true
   *      e.g. [...8, 8...] -> (8+8)/2 = 8
   * 4. Start loop at array values that are just below and just above the
   *      targetAvg
   * 5. Find average of current pair
   * 6. If lower than target, use next highest value
   * 7. If higher than target, use next lowest value
   * 8. Once real average matches target, done -> return true
   * 9. Otherwise, no matching average -> return false
   */
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
