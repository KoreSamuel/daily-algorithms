/**
 * Given two strings s1 and s2, we want to visualize how different the two strings are.
 * We will only take into account the lowercase letters (a to z).
 * First let us count the frequency of each lowercase letters in s1 and s2.
 *
 * s1 = "A aaaa bb c"
 * s2 = "& aaa bbb c d"
 * s1 has 4 'a', 2 'b', 1 'c'
 * s2 has 3 'a', 3 'b', 1 'c', 1 'd'
 *
 * So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters
 * when the maximum of their occurrences is less than or equal to 1.
 *
 * We can resume the differences between s1 and s2 in the following string: `"1:aaaa/2:bbb"` where 1 in `1:aaaa` stands for string s1 and `aaaa` because the maximum for a is 4.
 * In the same manner `2:bbb` stands for string s2 and `bbb` because the maximum for b is 3.
 *
 * The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1;
 * these letters will be prefixed by the number of the string where they appear with their maximum value and `:`. If the maximum is in s1 as well as in s2 the prefix is `=:`.
 *
 * In the result, substrings (a substring is for example `2:nnnnn` or `1:hhh`; it contains the prefix) will be in decreasing order of their length
 * and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint);
 * the different groups will be separated by '/'. See examples and "Example Tests".
 *
 * Hopefully other examples can make this clearer.
 *
 * s1 = "my&friend&Paul has heavy hats! &"
 * s2 = "my friend John has many many friends &"
 * mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
 *
 * s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
 * s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
 * mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
 *
 * s1="Are the kids at home? aaaaa fffff"
 * s2="Yes they are here! aaaaa fffff"
 * mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
 *
 */

// my solution
const mix = (s1, s2) => {
  const wc = s =>  [...s].reduce((acc, cur) => (cur.charCodeAt() > 96 && cur.charCodeAt() < 123 && (acc[cur] ? ++acc[cur] : acc[cur] = 1), acc) , {})
  let wc1 = wc(s1), wc2 = wc(s2);
  let keys = new Set([...Object.keys(wc1), ...Object.keys(wc2)]);
  let res = [];
  keys.forEach(k => {
    let c1 = wc1[k] || 0, c2 = wc2[k] || 0, c = Math.max(c1, c2);
    if (c > 1) {
      res.push((c1 > c2 ? 1 : c1 === c2 ? '=' : 2) + ':' + Array(c).fill(k).join(''))
    }
  });
  return res.sort((a, b) => b.length - a.length || (a < b ? -1 : 1)).join('/')
}

// 思路类似，只不过用正则过滤了非a-z字符
// best practice
function mix(s1, s2) {
  var counter = s => s.replace(/[^a-z]/g,'').split('').sort().reduce((x,y)=> (x[y] = 1 + (x[y]||0), x),{});
  s1 = counter(s1); s2 = counter(s2);
  var res = [], keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
  keys.forEach(key => {
    var c1 = s1[key]||0, c2 = s2[key]||0, count = Math.max(c1, c2);
    if (count>1) {
      // Math.sign() 返回一个数字的符号, 指示数字是正数，负数还是零
      // MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
      var from = [1, '=', 2][Math.sign(c2-c1)+1];
      var str = [...Array(count)].map(_=>key).join('');
      res.push(from+':'+str);
    }
  });
  return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}