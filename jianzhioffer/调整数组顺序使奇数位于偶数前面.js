/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  return nums.filter(n => n % 2 === 1).concat(nums.filter(n => n % 2 === 0));
};