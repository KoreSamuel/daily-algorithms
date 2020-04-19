/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  let level = 0;
  let queue = [root];
  while (queue.length) {
    res[level] = [];
    let levelCount = queue.length;
    while (levelCount--) {
      const shift = queue.shift();
      res[level].push(shift.val);
      if (shift.left) queue.push(shift.left);
      if (shift.right) queue.push(shift.right);
    }
    level++;
  }
  return res;
};
// @lc code=end

