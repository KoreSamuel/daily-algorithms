/**
 * Given the string representations of two integers, return the string representation of the sum of those integers.
 * For example:
 *
 * sumStrings('1','2') // => '3'
 *
 * A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
 *
 */

// my solution
const sumStrings = (a, b) => {
  const arra = [...a], arrb = [...b];
  const result = []
  let flag = 0;
  while (arra.length || arrb.length) {
    let va = +arra.pop() || 0, vb = +arrb.pop() || 0;
    result.unshift((va + vb + flag) % 10);
    flag = va + vb + flag > 9;
  }
  flag && result.unshift(1);
  return result.join('').replace(/^0+/, '')
}

// best practice
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}
