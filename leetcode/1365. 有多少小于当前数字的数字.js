/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let prev = [...nums];
  prev.sort((a, b) => a - b);
  return nums.map(n => prev.indexOf(n));
};