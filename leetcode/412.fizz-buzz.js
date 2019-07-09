/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let res = [];
  while (n) {
    if (n % 3 === 0 && n % 5 === 0) {
      res.unshift('FizzBuzz');
    } else if (n % 3 === 0) {
      res.unshift('Fizz');
    } else if (n % 5 === 0) {
      res.unshift('Buzz');
    } else {
      res.unshift(`${n}`);
    }
    n--;
  }
  return res;
};
