/**
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

 * Examples:
 * ```
 * solution('abc') // should return ['ab', 'c_']
 * solution('abcdef') // should return ['ab', 'cd', 'ef']
 * ```
 */

// my solution
function solution(str){
  let strs = str.length % 2 === 0 ? str : str + '_';
  return [...strs].reduce((acc, cur, index) => {
    return index && index !== strs.length - 1 &&  (index + 1) % 2 === 0 ? acc + cur + ',' : acc + cur;
  }, '').split(',');
}

//best practice
function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

function solution(str){
  return (str + "_").match(/../g);
}