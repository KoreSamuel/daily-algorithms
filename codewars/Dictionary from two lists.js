/**
 * There are two lists of different length. The first one consists of keys, the second one consists of values.
 * Write a function createDict(keys, values) that returns a dictionary created from keys and values.
 * If there are not enough values, the rest of keys should have a None (JS null)value.
 * If there not enough keys, just ignore the rest of values.
 *
 * Example 1:
 *
 *  keys = ['a', 'b', 'c', 'd']
 *  values = [1, 2, 3]
 * createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
 *
 * Example 2:
 *  keys = ['a', 'b', 'c']
 *  values = [1, 2, 3, 4]
 *  createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
 *
 */

// my solution
function createDict(keys, values){
  return keys.reduce((acc, cur, index) => {
    return Object.assign(acc, {[cur]: values[index] === undefined ? null : values[index]})
  }, {})
}

// best practice
function createDict(keys, values){
  return keys.reduce(function(o, v, i){
    return o[v] = i in values ? values[i] : null, o;
  }, {});
}