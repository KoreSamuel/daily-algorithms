/**
 * A format for expressing an ordered list of integers is to use a comma separated list of either
 *
 *     · individual integers
 *     · or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.
 *       The range includes all integers in the interval including both endpoints.
 *       It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
 *
 * Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
 * Example:
 *
 * solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 * // returns "-6,-3-1,3-5,7-11,14,15,17-20"
 *
 */

// my solution
function solution(list){
  return splitArr(list).reduce((acc, cur) => {
    return Array.isArray(cur) && cur.length > 2 ? acc.push(cur.shift() + '-' + cur.pop()) : acc.push(cur.toString()), acc;
  }, []).join(',')
}
const splitArr = (list) => {
  let result = [list[0]];
  let temp = [];
  for (let i = 1; i < list.length; i++) {
    let last = result[result.length - 1];
    let cur = list[i];
    if (last + 1 === cur) {
      result[result.length - 1] = cur
      temp.length ? temp.push(cur) : temp.push(last, cur);
    } else {
      if (temp.length) {
        result[result.length - 1] = temp;
        result.push(cur);
        temp = [];
      } else {
        result.push(cur);
      }
    }
  }
  if (temp.length) {
    result[result.length - 1] = temp;
  }
  return result;
}

// best practice
function solution(list){
  for(var i = 0; i < list.length; i++){
    var j = i;
    while(list[j] - list[j+1] == -1) j++;
    if(j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);
  }
  return list.join();
}