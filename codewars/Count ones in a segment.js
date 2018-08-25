/**
 * Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 200000000000000) return sum of all '1'
 * occurencies in binary representations of numbersbetween 'left' and 'right' (including both)
 * Example:
 *    countOnes 4 7 should return 8, because:
 *    4(dec) = 100(bin), which adds 1 to the result.
 *    5(dec) = 101(bin), which adds 2 to the result.
 *    6(dec) = 110(bin), which adds 2 to the result.
 *    7(dec) = 111(bin), which adds 3 to the result.
 *    So finally result equals 8.
 * WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!
 *
 */

// my solution  timeout...
function countOnes(left, right) {
  const countOne = (function () {
    const cache = {};
    return (n) => {
      if (n in cache) return cache[n];
      else {
        let count = 0;
        while (n) {
          n = n & (n - 1);
          count++;
        }
        return cache[n] = count;
      }
    }
  })();
  const range = (s, e) => [...Array(e - s + 1).keys()].map(k => k + s);
  return range(left, right).reduce((acc, cur) => acc + countOne(cur), 0)
}

// 网上别人的解法
// 厉害了，归纳法总结出来的...
const countOnes = (left, right) => {
  const count = n => {
    let sum = 0;
    while (n) {
      let p = n.toString(2).length - 1;
      let p2 = 1 << p;
      n -= p2;
      sum += p * (p2 >> 1) + n + 1;
    }
    return sum;
  }
  return count(right) - count(left - 1)
}