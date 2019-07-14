/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let hash = {};
  for (let i = 0; i < cpdomains.length; i++) {
    let cur = cpdomains[i];
    let [num, ds] = cur.split(' ');
    let dr = ds.split('.');
    let t = '';
    while (dr.length) {
      t = t.length ? `${dr.pop()}.${t}` : dr.pop();
      if (hash[t]) {
        hash[t] += +num;
      } else {
        hash[t] = +num;
      }
    }
  }
  return Object.entries(hash).map(([k, v]) => `${v} ${k}`);
};
