/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s.length) return ' ';
  const hash = {};
  for (const c of s) {
    if (!hash[c]) {
      hash[c] = 1;
    } else {
      hash[c]++;
    }
  }
  for (const i in hash) {
    if (hash[i] === 1) {
      return i;
    }
  }
  return ' ';
};
console.log(firstUniqChar("leetcode"))