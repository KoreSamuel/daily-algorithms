/**
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

function replaceSpace(str){
  let result = '';
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] === ' ') {
      result += '%20';
    } else {
      result += str[i]
    }
  }
  return result;
}

function replaceSpace(str) {
  return [...str].reduce((acc, cur) => cur === ' ' ? acc + '%20' : acc + cur, '');
}