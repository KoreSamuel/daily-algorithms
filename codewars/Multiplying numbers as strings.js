/**
 * This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
 *
 * The arguments are passed as strings.
 * The numbers may be way very large
 * Answer should be returned as a string
 * The returned "number" should not start with zeros e.g. 0123 is invalid
 *
 * Note: 100 randomly generated tests!
 *
 */
const multiply = (a, b) => {
  // 倒序后放到数组里
  a = [...a.replace(/^0+/, '')].reverse(), b = [...b.replace(/^0+/, '')].reverse();
  const aLen = a.length, bLen = b.length;
  // 声明一个存放结果的数组，长度不超过aLen + bLen
  let c = Array(aLen + bLen).fill(0);
  // 缓存进位
  let t = 0;
  // 模拟乘法过程
  for (let i = 0; i < aLen; i++) {
    let j = void 0;
    for (j = 0; j < bLen; j++) {
      t += c[i + j] + a[i] * b[j]; // c[i + j]可能存有前一轮相乘结果
      c[i + j] = t % 10; // 取个位存进c[i + j]
      t = t / 10 | 0; // 缓存进位
    }
    while (t) { // 一轮相乘后的最后进位
      c[i + j++] += t % 10;
      t = t / 10 | 0;
    }
  }
  c = c.reverse().join('').replace(/^0+/, '');
  return c || '0'
}
console.log(multiply("1020303004875647366210", "2774537626200857473632627613")) // '2830869077153280552556547081187254342445169156730'

// best practice
// emmmm `recuceRight`
function multiply(a, b) {
  return a.split('').reduceRight((p, a, i) =>
    b.split('').reduceRight((p, b, j) => {
      const mul = (a - '0') * (b - '0');
      const p1 = i + j;
      const p2 = p1 + 1;
      const sum = mul + valOrZero(p[p2]);

      p[p1] = valOrZero(p[p1]) + Math.floor(sum / 10);
      p[p2] = sum % 10;

      return p;
    }, p)
    , []).join('').replace(/^0+(?=\d)/, '');
}

function valOrZero(v) {
  return v || 0;
}