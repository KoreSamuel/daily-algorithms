/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  let minDep = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    minDep = Math.min(minDepth(root.left), minDep);
  }
  if (root.right) {
    minDep = Math.min(minDepth(root.right), minDep);
  }

  return minDep + 1;

};
// @lc code=end

