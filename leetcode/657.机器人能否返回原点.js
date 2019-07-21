/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  const hash = { R: 1, U: 1, L: -1, D: -1 };
  let [x, y] = [0, 0];
  for (const c in moves) {
    let cur = moves[c];
    if (cur === 'R' || cur === 'L') {
      x += hash[cur];
    } else {
      y += hash[cur];
    }
  }
  return !(x || y);
};
