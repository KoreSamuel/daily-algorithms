/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const s = new Set();
  let max = 0, min = 14;
  for (const n of nums) {
    if (n === 0) continue;
    max = max > n ? max : n;
    min = min > n ? n : min;
    if (s.has(n)) return false;
    s.add(n);
  }
  return max - min < 5;
};