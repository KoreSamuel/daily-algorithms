/**
 * The rgb() method is incomplete.
 * Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * The valid decimal values for RGB are 0 - 255.
 * Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
 * The following are examples of expected output values:
 *
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 *
 */

// my solution
const rgb = (...args) => args.reduce((acc, cur) => cur <= 0 ? acc + '00' : cur > 255 ? 'FF' : acc + cur.toString(16).toUpperCase() , '')

// best practice
// 看了下其他solution，好像没有比我这个更精简的啦