/**
 * Recursion - Problem 12
 * ----------------------
 * Write a function which accepts a number and returns the factorial of
 * that number.
 * 
 * n.b. A factorial is the product of an integer and all the integers
 * below it.
 *   e.g. factorial 4 (4!) = 24, because 4 * 3 * 2 * 1
 * 
 * Factorial 0 (0!) is always 1.
 */

function factorial(num) {
  /**
   * 1. If num is 0, return 1
   * 2. Recursion must stop at 1, so...
   * 3. If num is 1, return num
   * 4. Otherwise, multiply num by result of factorial num-1
   */

  if (num === 0) return 1;
  if (num === 1) return num;
  return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
