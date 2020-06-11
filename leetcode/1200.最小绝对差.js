/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let left = 0, right = 1, res = [], c = Number.MAX_SAFE_INTEGER;

  while (right < arr.length) {
    let k = arr[right] - arr[left];

    if (k < c) {
      res = [];
      res.push([arr[left], arr[right]]);
      c = k;
    } else if (k == c) {
      res.push([arr[left], arr[right]]);
    }
    left++;
    right++;
  }
  return res;
};