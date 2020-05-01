/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let res = [];
  if (!root) return [];
  let queue = [root];
  while (queue.length) {
    let temp = [];
    let sum = 0;
    let count = 0;

    while (queue.length) {
      let curr = queue.shift();
      sum += curr.val;
      count++;
      if (curr.left) {
        temp.push(curr.left)
      }
      if (curr.right) {
        temp.push(curr.right)
      }
    }
    queue = temp;
    res.push(sum / count)
  }
  return res;
};
// @lc code=end

