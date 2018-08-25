/**
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
 * array = [[1, 2, 3],
 *         [4, 5, 6],
 *         [7, 8, 9]]
 * snail(array) #=> [1,2,3,6,9,8,7,4,5]
 *
 * For better understanding, please follow the numbers of the next array consecutively:
 *
 * array = [[1, 2, 3],
 *          [8, 9, 4],
 *          [7, 6, 5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 *
 */

// my solution
const snail = array => {
  let result = [];
  while (array.length) {
    // right
    result = [...result, ...array.shift()];
    // down
    for (let i = 0; i < array.length; i++) {
      result = [...result, array[i].pop()];
    }
    // left
    result = [...result, ...(array.pop() || []).reverse()];
    // up
    for (let j = array.length - 1; j >= 0; j--) {
      result = [...result, array[j].shift()]
    }
  }
  return result;
}

// best practice
// 看了一下其实思想和我的solution一样，模拟遍历
// 往后在看到一个票数不算多，但我认为是目前最简短精悍的solution
function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}