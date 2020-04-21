/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  const res = [];
  helper(root, res);
  return res;
};

function helper(root, res) {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, res);
    }
    res.push(root.val);
    if (root.right !== null) {
      helper(root.right, res)
    }
  }
}
// @lc code=end

