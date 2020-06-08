/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (const n of nums) {
    if (`${n}`.length % 2 === 0) {
      count++;
    }
  }
  return count;
};