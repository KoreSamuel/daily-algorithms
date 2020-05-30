/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  const max = 2 ** 31 - 1, min = -(2 ** 31);
  let res = 0;
  let temp = '';
  str = str.trim();
  if (/\+|\-|[0-9]/.test(str[0])) {
    for (let i = 1; i < str.length; i++) {
      if (/[0-9]/.test(str[i])) {
        temp += str[i]
      } else {
        break;
      }
    }
  } else {
    return res;
  }
  if (str[0] === '+') {
    res = +temp;
  } else if (str[0] === '-') {
    res = -temp;
  } else {
    res = +(str[0] + temp);
  }
  return res > max ? max : res < min ? min : res;
};