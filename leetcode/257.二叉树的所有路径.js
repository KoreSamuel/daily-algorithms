/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = [];
  if (!root) return res;
  helper(root, [], res);
  return res;
};

function helper(root, cur, res) {
  if (!root) return;

  if (!root.left && !root.right) {
    cur += root.val;
    res.push(cur);
    return;
  } else {
    cur += root.val + '->'
  }
  helper(root.left, cur, res);
  helper(root.right, cur, res);
}
// @lc code=end

