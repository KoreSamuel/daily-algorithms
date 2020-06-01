/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  let idx = 0;
  for (const n of pushed) {
    stack.push(n);
    while (stack.length && stack[stack.length - 1] === popped[idx]) {
      stack.pop();
      idx += 1;
    }
  }
  return !stack.length;
};
// @lc code=end

