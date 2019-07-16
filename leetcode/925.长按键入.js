/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  let idx = 0;
  for (let i = 0; i < typed.length; ) {
    if (name[idx] === typed[i]) {
      idx++;
      i++;
    } else if (idx > 0 && name[idx - 1] === typed[i]) {
      i++;
    } else {
      return false;
    }
  }
  return idx === name.length;
};
