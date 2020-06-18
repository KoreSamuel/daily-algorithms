/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'L') balance--;
    if (s[i] == 'R') balance++;
    if (balance == 0) count++;
  }
  return count;
};