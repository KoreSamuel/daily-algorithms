/**
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

// my solution
// 异或运算
const findOdd = A => A.reduce((acc, cur) => acc ^ cur, 0);

// best practice
// the same as mine