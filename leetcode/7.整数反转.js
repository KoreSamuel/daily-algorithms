/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);
  const arr = Array.from(Math.abs(x) + '');
  const reversedArr = [...arr].map(() => arr.pop(), arr);
  const reverseNum = parseInt(reversedArr.join(''));
  return x > 0
    ? reverseNum > MAX
      ? 0
      : reverseNum
    : -reverseNum < MIN
    ? 0
    : -reverseNum;
};
