/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  const res = [];
  function traverse(node) {
    if (node !== null) {
      traverse(node.left);
      traverse(node.right);
      res.push(node.val);
    }
  }
  traverse(root)
  return res;
};
// @lc code=end

