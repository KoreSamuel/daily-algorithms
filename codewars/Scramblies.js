/**
 * Complete the function scramble(str1, str2) that returns true
 * if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
 *
 * Notes:
 *    · Only lower case letters will be used (a-z). No punctuation or digits will be included.
 *    · Performance needs to be considered
 *
 * Examples：
 *
 * scramble('rkqodlw', 'world') ==> True
 * scramble('cedewaraaossoqqyt', 'codewars') ==> True
 * scramble('katas', 'steak') ==> False
 *
 */

// my solution
// Completed in 11283ms.... and 12000ms timeout...
function scramble(str1, str2) {
  const wc = s => [...s].reduce((acc, cur) => ((acc[cur] ? ++acc[cur] : acc[cur] = 1), acc), {});
  const wc1 = wc(str1), wc2 = wc(str2);
  for (const k in wc2) {
    if (wc2[k] > (wc1[k] || 0)) {
      return false;
    }
  }
  return true;
}

// best practice
// Completed in 10941ms...好像没快多少
const scramble = (str1, str2) => {
  const wc1 = [...str1].reduce((acc, cur) => ((acc[cur] ? ++acc[cur] : acc[cur] = 1), acc), {});
  return [...str2].every(k => --wc1[k] >= 0);
}
