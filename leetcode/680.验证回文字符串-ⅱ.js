/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let [left, right, flag] = [0, s.length - 1, 0];
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else if (flag) {
      return false;
    } else {
      if (s[left + 1] === s[right]) {
        left += 2;
        right--;
        flag = 1;
      } else if (s[left] === s[right - 1]) {
        left++;
        right -= 2;
        flag = 1;
      } else {
        return false;
      }
    }
  }
  return true;
};
/** why????
  ✘ Wrong Answer
  ✘ 458/460 cases passed (N/A)
  ✘ testcase: '"aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"'
  ✘ answer: false
  ✘ expected_answer: true
  ✘ stdout:
 */
