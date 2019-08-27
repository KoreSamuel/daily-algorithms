/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let base = 1;
  let temp = num;
  while (temp > 0) {
    temp = (temp / 2) | 0;
    base = base * 2;
  }
  return num ^ (base - 1);
};
// console.log(findComplement(5));
