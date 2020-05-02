/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// BFS
// var isSymmetric = function (root) {
//   if (!root) return true;
//   let queue = [root, root];
//   while (queue.length) {
//     let left = queue.shift();
//     let right = queue.shift();
//     if (!left && !right) continue;
//     if (!left || !right) return false;
//     if (left.val !== right.val) return false;
//     queue.push(left.left, right.right, left.right, right.left);
//   }
//   return true;
// };
// 递归
var isSymmetric = function (root) {
  return helper(root, root);
}
function helper(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  if (t1.val !== t2.val) return false;
  return helper(t1.left, t2.right) && helper(t1.right, t2.left);
}
// @lc code=end

