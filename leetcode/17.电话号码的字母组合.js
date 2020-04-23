/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  }
  const res = [];
  for (let num of digits) {
    let word = map[num];
    if (res.length === 0) {
      res.push(...word);
    } else {
      let temp = [];
      for (let i = 0; i < res.length; i++) {
        for (let j = 1; j < word.length; j++) {
          temp.push(res[i] + word[j]);
        }
        res[i] += word[0];
      }
      res.push(...temp)
    }
  }
  return res;
};
// console.log(letterCombinations('234'))
// @lc code=end

