/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

function Find(target, array){
  const len = array.length;
  for (let i = 0; i < len; ) {
    let result = binarySearch(array[i], target);
    if (result === -1) {
      i++;
    } else {
      return true;
    }
  }
  return false;
}
const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.ceil((left + right) / 2);
    if (arr[mid] > value) {
      right = mid - 1;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      return mid
    }
  }
  return -1;
}