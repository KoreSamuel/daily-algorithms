/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  var stack = []
  var count = 0
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count++
      if (count >= 2) {
        stack.push(S[i])
      }
    } else if (S[i] === ')') {
      count--
      if (count >= 1) {
        stack.push(S[i])
      }
    }
  }
  return stack.join('')
};
// @lc code=end

