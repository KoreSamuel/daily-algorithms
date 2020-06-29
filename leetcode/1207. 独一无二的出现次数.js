/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let m = new Map();
  for (const n of arr) {
    m.set(n, (m.get(n) || 0) + 1);
  }
  const t = {};
  for (const n of m.values()) {
    if (n in t) {
      return false;
    }
    t[n] = true;
  }
  return true;
};