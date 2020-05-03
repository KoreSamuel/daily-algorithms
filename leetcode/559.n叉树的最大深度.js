/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  if (!root) return 0;
  for (let i = 0; i < root.children.length; i++) {
    let depth = maxDepth(root.children[i]);
    max = max > depth ? max : depth;
  }
  return max + 1;

};
// @lc code=end

