/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let multi = 1, sum = 0;

  while (n > 0) {
    let cur = n % 10;
    n = (n / 10) | 0;
    multi *= cur;
    sum += cur;
  }
  return multi - sum;
};