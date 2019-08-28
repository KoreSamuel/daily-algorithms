/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countA = 0;
  let countL = '';
  for (const i in s) {
    if (s[i] === 'A') {
      countA++;
      countL = '';
      if (countA > 1) {
        return false;
      }
    } else if (s[i] === 'L') {
      countL++;
      if (countL > 2) {
        return false;
      }
    } else {
      countL = '';
    }
  }
  return countA < 2 && countL < 3;
};
console.log(checkRecord('PPALLL'));
