/**
 * Sort "array" so that all elements with the value of zero are moved to the
 * end of the array, while the other elements maintain order.
 * [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
 * Zero elements also maintain order in which they occurred.
 * [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
 *
 * Do not use any temporary arrays or objects. Additionally, you're not able
 * to use any Array or Object prototype methods such as .shift(), .push(), etc
 *
 * the correctly sorted array should be returned.
 */

//  my solution
// 比较老实的解法，标记后再遍历标记字符串
const removeZeros = array => {
  let idx = 0;
  let temp = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      temp += '-'; // 标记为0
    } else if (array[i] === '0') {
      temp += '_'; // 标记为'0'
    } else {
      array[idx++] = array[i]; // 其余按新的索引顺序存进array
    }
  }
  for(let i = 0; i < temp.length; i++) {
    if (temp[i] === '-') {
      array[idx++] = 0
    } else {
      array[idx++] = '0'
    }
  }
  return array;
}

// best practice
function removeZeros(array) {
  var end = array.length;
  for (var i = 0; i < end; i++) {
      if (array[i] === 0 || array[i] === "0") {
          arrayShiftToEnd(array, i);
          i--;
          end--;
      }
  }
  return array;
}

function arrayShiftToEnd(array, n) {
  var end = array[n]
  for(var i = n; i <  array.length; i++) {
      array[i] = array[i + 1]
  }
  array[array.length - 1] = end;

  return array
}