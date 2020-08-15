/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (!root) return true;
  const treeHeight = (node, depth) => {
    if (!node) return 0;
    const l = treeHeight(node.left, depth + 1);
    const r = treeHeight(node.right, depth + 1);
    return Math.max(l, r) + 1;
  };
  const hl = treeHeight(root.left, 0);
  const hr = treeHeight(root.right, 0);
  if (Math.abs(hl - hr) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end
