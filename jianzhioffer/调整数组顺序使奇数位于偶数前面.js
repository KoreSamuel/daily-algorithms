/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  return nums.filter(n => n % 2 === 1).concat(nums.filter(n => n % 2 === 0));
};

var exchange = function (nums) {
  let l = 0, r = nums.length - 1;
  let t = undefined;
  while (l < r) {
    if (nums[l] % 2 !== 0) {
      l++;
      continue;
    }
    if (nums[r] % 2 !== 1) {
      r--;
      continue;
    }
    t = nums[l];
    nums[l] = nums[r];
    nums[r] = t;
    l++;
    r--;
  }
  return nums;
};
console.log(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1]))