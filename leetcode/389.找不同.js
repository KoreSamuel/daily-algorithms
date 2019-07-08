/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let as = [...s];
  let at = [...t];
  let idx = -1;
  for (let i = 0; i < as.length; i++) {
    idx = at.indexOf(as[i]);
    at.splice(idx, 1);
  }
  return at[0];
};
