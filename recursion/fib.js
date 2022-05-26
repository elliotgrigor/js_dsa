/**
 * Recursion - Problem 15
 * ----------------------
 * Write a recursive function which accepts a number and returns the nth
 * number in the Fibonacci sequence.
 */

function fib(n) {
  /**
   * 1. Track iteration, current & previous numbers
   * 2. Save current number before adding previous number onto it
   * 3. Overwrite previous number with saved "current" number
   * 4. Recur with n, new numbers, and iteration +1
   * 5. When iteration matches n, return current number
   */

  let numbers = { current: 1, previous: null };

  function recur(n, numbers, i = 1) {
    if (i === n) return numbers.current;

    const temp = numbers.current;

    numbers.current += numbers.previous || 0;
    numbers.previous = temp;

    return recur(n, numbers, i + 1);
  }

  return recur(n, numbers);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317,811
console.log(fib(35)); // 9,227,465
