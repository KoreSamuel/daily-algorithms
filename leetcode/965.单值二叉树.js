/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) return false;
  let queue = [root];
  const temp = root.val;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (cur.val !== temp) {
        return false;
      }
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return true;
};
// @lc code=end

