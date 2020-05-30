/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
// var isValidBST = function (root) {
//   if (!root) return true;
//   const queue = [[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, root]];
//   while (queue.length) {
//     let [min, max, cur] = queue.shift();
//     if (cur.val <= min || cur.val >= max) {
//       return false;
//     }
//     if (cur.left) queue.push([min, cur.val, cur.left])
//     if (cur.right) queue.push([cur.val, max, cur.right])
//   }
//   return true;
// };
var isValidBST = function (root) {
  const stack = [];
  let temp = Number.MIN_SAFE_INTEGER;
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= temp) return false;
    temp = root.val;
    root = root.right;
  }
  return true;
}
// @lc code=end

