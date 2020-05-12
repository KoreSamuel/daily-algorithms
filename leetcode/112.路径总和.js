/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
// 递归
// var hasPathSum = function (root, sum) {
//   if (root === null) return false;
//   sum -= root.val;
//   if (root.left === null && root.right === null) {
//     return sum === 0
//   }
//   return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
// };
// 迭代
var hasPathSum = function (root, num) {
  if (!root) return false;
  const queue = [[root, num - root.val]];
  while (queue.length) {
    let [node, curNum] = queue.shift();
    if (node.left) queue.push([node.left, curNum - node.left.val]);
    if (node.right) queue.push([node.right, curNum - node.right.val]);
    if (!node.left && !node.right && curNum === 0) return true;
  }
  return false;
}
// @lc code=end

