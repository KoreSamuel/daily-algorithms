/**
 * Write a function called that takes a string of parentheses, and determines
 * if the order of the parentheses is valid. The function should return true
 * if the string is valid, and false if it's invalid.
 *
 * Examples
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 *
 * Constraints
 * 0 <= input.length <= 100
 *
 */

// my solution
const validParentheses = parens => {
  let temp = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      temp += 1;
    } else {
      temp -= 1;
    }
    if (temp < 0) {
      return false
    }
  }
  return temp === 0;
}