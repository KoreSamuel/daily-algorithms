/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const numA = 'A'.charCodeAt();
  const numZ = 'Z'.charCodeAt();
  function all(word) {
    return [...word].every(
      w => w.charCodeAt() >= numA && w.charCodeAt() <= numZ
    );
  }
  function no(word) {
    return [...word].every(w => w.charCodeAt() < numA || w.charCodeAt() > numZ);
  }
  function head(word) {
    return [...word].every((w, idx) => {
      return idx === 0 ? all(w) : no(w);
    });
  }
  return all(word) || no(word) || head(word);
};
