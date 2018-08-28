/**
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * // should be 6: [4, -1, 2, 1]
 *
 * Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
 * If the list is made up of only negative numbers, return 0 instead.
 * Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 *
 */

// my solution

const maxSequence = arr => {
  let sum = 0;
  let max = arr[0] || 0;

  for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] > sum + arr[i]) {
          sum = arr[i];
      } else {
          sum = sum + arr[i];
      }

      if (max < sum) {
          max = sum;
      }
  }

  return max < 0 ? 0 : max;
}

// best practice
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}