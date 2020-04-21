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
  const stack = [[false, root]];
  while (stack.length) {
    const [visited, node] = stack.pop();
    if (!node) continue;
    if (!visited) {
      stack.push([false, node.right]);
      stack.push([true, node]);
      stack.push([false, node.left]);
    } else {
      res.push(node.val)
    }
  }
  return res;
};

// @lc code=end

