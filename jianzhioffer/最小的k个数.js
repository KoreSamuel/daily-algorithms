/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (!k) return [];
  let res = Array(k).fill(Number.MAX_SAFE_INTEGER);
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of arr) {
    if (min > num || num < res[k - 1]) {
      res = pushTemp(res, num);
      min = num;
    }
  }
  return res;
};
function pushTemp(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i]) {
      arr.splice(i, 0, num);
      arr.pop();
      return arr;
    }
  }
}