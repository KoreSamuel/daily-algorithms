/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let len = T.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    let cur = T[i];
    let has = false;
    for (let j = i; j < len; j++) {
      if (T[j] - cur > 0) {
        res.push(j - i);
        has = true;
        break;
      }
    }
    if (!has) res.push(0)
  }
  return res;
};
// @lc code=end

