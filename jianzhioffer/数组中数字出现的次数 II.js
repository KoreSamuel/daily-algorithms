/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const m = {};
  for (const n of nums) {
    if (m[n]) {
      m[n]++
    } else {
      m[n] = 1;
    }
  }
  for (const [k, v] of Object.entries(m)) {
    if (v === 1) {
      return k;
    }
  }
};