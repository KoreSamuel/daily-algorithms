/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 *
 */

// my solution
const moveZeros = arr => {
  const fill = arr.reduce((acc, cur) => {
    return cur !== 0 && acc.push(cur), acc
  }, [])
  return [...fill, ...Array(arr.length - fill.length).fill(0)]
}

// best practice
const moveZeros = arr => [...arr.filter(k => k !== 0), ...arr.filter(k => k === 0)];
