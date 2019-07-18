/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let atext = text.split(' ');
  const res = [];
  for (let i = 0; i < atext.length - 2; ) {
    if (atext[i] === first && atext[i + 1] === second) {
      res.push(atext[i + 2]);
      i = i + 2;
    } else {
      i++;
    }
  }
  return res;
};
