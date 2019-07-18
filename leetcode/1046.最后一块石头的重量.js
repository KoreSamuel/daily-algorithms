/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  while (stones.length) {
    if (stones.length === 1) return stones.pop();
    stones = stones.sort((a, b) => b - a);
    let [a, b] = stones.splice(0, 2);
    a - b > 0 && stones.push(a - b);
  }
  return 0;
};
// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
