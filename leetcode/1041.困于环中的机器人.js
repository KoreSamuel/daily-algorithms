/*
 * @lc app=leetcode.cn id=1041 lang=javascript
 *
 * [1041] 困于环中的机器人
 */
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  // 循环四次后能回到原点(0,0)的符合
  instructions = instructions.repeat(4);
  let px = 0,
    py = 0;
  let x = 1;
  for (let i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case 'G':
        if (x === 1) {
          py += 1;
        } else if (x === 2) {
          px -= 1;
        } else if (x === 3) {
          py -= 1;
        } else if (x === 4) {
          px += 1;
        }
        break;
      case 'L':
        x += 1;
        x = x > 4 ? 1 : x;
        break;
      case 'R':
        x -= 1;
        x = x < 1 ? 4 : x;
        break;
      default:
        break;
    }
  }
  return px === 0 && py === 0;
};
// console.log(isRobotBounded('GGLLGG'));
