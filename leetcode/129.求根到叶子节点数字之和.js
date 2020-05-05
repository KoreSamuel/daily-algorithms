/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
// dfs
// var sumNumbers = function (root) {
//   const res = [];
//   helper(root, '', res);
//   return res.reduce((acc, cur) => acc + (+cur), 0);
// };
// function helper(root, cur, res) {
//   if (!root) return;
//   cur += root.val;
//   if (!root.left && !root.right) {
//     res.push(cur);
//     return;
//   }
//   helper(root.left, cur, res);
//   helper(root.right, cur, res);
// }

// bfs
var sumNumbers = function (root) {
  if (!root) return 0;
  const nodes = [[root, root.val]];
  const res = [];
  while (nodes.length) {
    const [node, number] = nodes.shift();
    if (!node.left && !node.right) {
      res.push(number);
    }
    if (node.left) nodes.push([node.left, `${number}${node.left.val}`]);
    if (node.right) nodes.push([node.right, `${number}${node.right.val}`]);
  }
  return res.reduce((acc, cur) => acc + (+cur), 0);
}
// @lc code=end

