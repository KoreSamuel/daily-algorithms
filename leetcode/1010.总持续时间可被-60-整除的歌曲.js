/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let count = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        count++;
      }
    }
  }
  return count;
};
// @lc code=end

