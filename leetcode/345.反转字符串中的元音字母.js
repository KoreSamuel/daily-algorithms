/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr = [...s];
  let [l, r] = [0, s.length - 1];
  let temp = '';
  while (l <= r) {
    if (/[aeiou]/i.test(arr[l]) && /[aeiou]/i.test(arr[r])) {
      temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    } else {
      if (!/[aeiou]/i.test(arr[r])) {
        r--;
      }
      if (!/[aeiou]/i.test(arr[l])) {
        l++;
      }
    }
  }
  return arr.join('');
};
// reverseVowels('Euston saw I was not Sue.');
