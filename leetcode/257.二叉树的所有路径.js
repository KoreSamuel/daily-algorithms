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
// 递归
// var binaryTreePaths = function (root) {
//   const res = [];
//   if (!root) return res;
//   helper(root, [], res);
//   return res;
// };

// function helper(root, cur, res) {
//   if (!root) return;

//   if (!root.left && !root.right) {
//     cur += root.val;
//     res.push(cur);
//     return;
//   } else {
//     cur += root.val + '->'
//   }
//   helper(root.left, cur, res);
//   helper(root.right, cur, res);
// }

// BFS 迭代
var binaryTreePaths = function (root) {
  if (!root) return [];

  const nodes = [[root, `${root.val}`]];
  const res = [];

  while (nodes.length) {
    let [node, path] = nodes.shift();

    if (node.left === null && node.right === null) {
      res.push(path);
    }
    if (node.left) {
      nodes.push([node.left, `${path}->${node.left.val}`]);
    }
    if (node.right) {
      nodes.push([node.right, `${path}->${node.right.val}`]);
    }
  }
  return res;
}

// @lc code=end

