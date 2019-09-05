/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  // 倒序后放到数组里
  let a = [...num1.replace(/^0+/, '')].reverse();
  let b = [...num2.replace(/^0+/, '')].reverse();
  const aLen = a.length,
    bLen = b.length;
  // 声明一个存放结果的数组，长度不超过aLen + bLen
  let c = Array(aLen + bLen).fill(0);
  // 缓存进位
  let t = 0;
  // 模拟乘法过程
  for (let i = 0; i < aLen; i++) {
    let j = void 0;
    for (j = 0; j < bLen; j++) {
      t += c[i + j] + a[i] * b[j]; // c[i + j]可能存有前一轮相乘结果
      c[i + j] = t % 10; // 取个位存进c[i + j]
      t = (t / 10) | 0; // 缓存进位
    }
    while (t) {
      // 一轮相乘后的最后进位
      c[i + j++] += t % 10;
      t = (t / 10) | 0;
    }
  }
  c = c
    .reverse()
    .join('')
    .replace(/^0+/, '');
  return c || '0';
};
