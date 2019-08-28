/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */
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
var findTilt = function(root) {
  let res = 0;
  (function po(node) {
    if (node === null) {
      return null;
    }
    let suml = po(node.left);
    let sumr = po(node.right);
    res += Math.abs(suml - sumr);
    return suml + sumr + node.val;
  })(root);
  return res;
};
