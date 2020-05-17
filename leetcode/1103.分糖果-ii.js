/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const res = new Array(num_people).fill(0);
  let idx = 0;
  let count = 0;
  while (candies) {
    idx = 0
    while (idx < num_people) {
      if (candies > (num_people * count + idx + 1)) {
        res[idx] += (num_people * count + idx + 1);
      } else {
        res[idx] += candies;
      }
      idx++;
      candies -= (num_people * count + idx);
      if (candies <= 0) {
        return res;
      }
    }
    count++;
  }
};
// @lc code=end

