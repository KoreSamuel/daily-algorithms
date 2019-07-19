/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let [pre1, pre2, temp] = [0, 0, 0];
  let resArr = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case '+':
        temp = pre1 + pre2;
        resArr.push(temp);
        pre1 = pre2;
        pre2 = temp;
        break;
      case 'D':
        temp = pre2 * 2;
        resArr.push(temp);
        pre1 = pre2;
        pre2 = temp;
        break;
      case 'C':
        resArr.pop();
        pre2 = pre1;
        pre1 = resArr[resArr.length - 2];
        break;
      default:
        temp = +ops[i];
        resArr.push(temp);
        pre1 = pre2;
        pre2 = temp;
        break;
    }
  }
  return resArr.reduce((acc, cur) => acc + cur, 0);
};
