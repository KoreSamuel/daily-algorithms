/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  function traverse(node) {
    if (node !== null) {
      node.children.forEach(n => {
        traverse(n);
      });
      res.push(node.val);
    }
  }
  traverse(root);
  return res;
};
// @lc code=end

