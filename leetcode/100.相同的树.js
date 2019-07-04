/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSame = (p, q) => {
  if (p === null && q === null) return true;

  if ((p === null && q !== null) || (p !== null && q === null)) return false;

  if (p.val !== q.val) return false;

  return isSame(p.left, q.left) && isSame(p.right, q.right);
};
var isSameTree = function(p, q) {
  return isSame(p, q);
};
