/**
 * A digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n. If that value has two digits,
 * continue reducing in this way until a single-digit number is produced.
 * This is only applicable to the natural numbers.
 * Here's how it works
 *
 * digital_root(16)
 * => 1 + 6
 * => 7
 *
 * digital_root(132189)
 * => 1 + 3 + 2 + 1 + 8 + 9
 * => 24 ...
 * => 2 + 4
 * => 6
 *
 */

// my solution
function digital_root(n) {
  let r = sum(n);
  return r > 9 ? sum(r) : r;
}
const sum = n => [...('' + n)].reduce((acc, cur) => acc + +cur, 0);

// best practice
// 666~~~
function digital_root(n) {
  return (n - 1) % 9 + 1;
}