/**
 * Write a function that will find all the anagrams of a word from a list.
 * You will be given two inputs a word and an array with words.
 * You should return an array of all the anagrams or an empty array if there are none
 * For example:
 *
 * anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
 * anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
 * anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
 */

// my solution
function anagrams(word, words) {
  return words.filter((item) => {
    return [...item].sort().join() === [...word].sort().join();
  })
}

// best practice
String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}