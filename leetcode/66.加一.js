/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 0;
  const result = digits.reduceRight((acc, cur, index) => {
    let sum = index === digits.length - 1 ? cur + 1 : cur + carry;
    carry = 0;
    if (sum > 9) {
      acc.unshift(sum % 10);
      carry = 1;
    } else {
      acc.unshift(sum);
    }
    return acc;
  }, []);
  carry && result.unshift(carry);
  return result;
};
