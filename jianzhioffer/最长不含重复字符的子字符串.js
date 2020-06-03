/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) {
      temp += s[i];
    } else {
      if (temp.length > max) {
        max = temp.length;
      }
      let idx = temp.indexOf(s[i]);
      temp = temp.slice(idx + 1) + s[i];
    }
  }
  return temp.length > max ? temp.length : max;
};