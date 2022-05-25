/**
 * Recursion - Problem 11
 * ----------------------
 * Write a function which accepts a base an exponent. The function
 * should return the power of the base to the exponent. It should mimic
 * the functionality of Math.pow()
 * 
 * Negative numbers can be ignored.
 */

function power(base, exp) {
  /**
   * 1. If exponent is zero, return 1
   * 2. If exponent is 1, return the base
   * 3. Otherwise, return the result of base * base^exp--
   * 
   * n.b. 10^3 == 10^2 * 10 == 10^1 * 10 * 10
   */

  if (exp < 1) return 1;
  if (exp === 1) return base;

  return base * power(base, exp - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(5, 3)); // 125
console.log(power(10, 3)); // 1000
