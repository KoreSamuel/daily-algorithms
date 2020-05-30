/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let res = '';
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      temp += s[i];
    } else if (temp !== '') {
      res = res.length ? temp + ' ' + res : temp;
      temp = '';
    } else {
      continue;
    }
  }
  return temp.length ? (res.length ? temp + ' ' + res : temp) : res;
};