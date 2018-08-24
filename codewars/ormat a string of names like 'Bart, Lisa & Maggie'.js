/**
 * Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
 * Example:
 *
 * list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // returns 'Bart, Lisa & Maggie'
 * list([ {name: 'Bart'}, {name: 'Lisa'} ]) // returns 'Bart & Lisa'
 * list([ {name: 'Bart'} ]) // returns 'Bart'
 * list([]) // returns ''
 * Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 *
 */

// my solution
function list(names){
  return names.length === 1 || names.length === 0 ? names[0] ? names[0].name :  '' :  names.reduce((acc, cur, index) => {
    return index + 2 !== names.length ? index + 1 === names.length ? acc + cur.name : acc + cur.name + ', ' : acc + cur.name + " & "
  }, '')
}

// best practice
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }