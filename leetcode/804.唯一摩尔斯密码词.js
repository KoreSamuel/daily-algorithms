/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let map = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  let hash = {};
  let base = 'a'.charCodeAt();
  words.forEach(w => {
    let h = [...w].reduce((acc, cur) => {
      acc += map[cur.charCodeAt() - base];
      return acc;
    }, '');
    if (!hash[h]) {
      hash[h] = 1;
    }
  });
  return Object.keys(hash).length;
};
