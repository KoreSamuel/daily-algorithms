/**
 * At a job interview, you are challenged to write an algorithm to check if a given string,
 * s, can be formed from two other strings, part1 and part2.
 * The restriction is that the characters in part1 and part2 are in the same order as in s.
 * The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
 * For example:
 *
 * 'codewars' is a merge from 'cdw' and 'oears':
 *     s:  c o d e w a r s   = codewars
 * part1:  c   d   w         = cdw
 * part2:    o   e   a r s   = oears
 *
 */




// my solution
// isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am') 这个测试用例不能通过
// 调试后发现是part1.part2出现同时满足s当前字符时没有判断导致
function isMerge(s, part1, part2) {
  let sarr = [...s], p1 = [...part1], p2 = [...part2];
  while(sarr.length) {
    let c = sarr[0], c1 = p1[0], c2 = p2[0];
    if (c === c2) {
      sarr.shift();
      p2.shift()
    } else if (c === c1) {
      sarr.shift();
      p1.shift();
    } else {
      return false
    }
  }
  return s.length === part1.length + part2.length
}
// 阅读别人的方案后，改了一半，所有方案里都用了递归的样子
function isMerge(s, part1, part2) {
  for (let i = 0; i < s.length; i++) {
    if ( part1[0] === s[i] && part2[0] === s[i] ) {
      return isMerge(s.slice(i + 1), part1.slice(1), part2) || isMerge(s.slice(i + 1), part1, part2.slice(1));
    }
    else if( part1[0] === s[i] ) part1 = part1.slice(1);
    else if( part2[0] === s[i] ) part2 = part2.slice(1);
    else return false;
  }
  return !part1 && !part2;
}

// best practice
function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}