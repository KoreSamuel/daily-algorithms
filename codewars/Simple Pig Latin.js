/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 *
 */

// my solution
const pigIt = str => str.split(' ').map(item => {
  item = item.charCodeAt() >= 'A'.charCodeAt() ? [...item] : item;
  return Array.isArray(item) ? (item.push(item.shift()), item).join('') + 'ay' : item
}).join(' ');
console.log(pigIt('Pig latin is cool !'), pigIt('Hello world !'))

// best practice
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');