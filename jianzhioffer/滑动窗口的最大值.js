/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return [];
  const res = [];
  for (let i = 0; i <= nums.length - k; i++) {
    console.log(nums.slice(i, k + i))
    res.push(Math.max.apply(null, nums.slice(i, k + i)))
  }
  return res;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)