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
var sumNumbers = function (root) {
  const res = [];
  helper(root, '', res);
  return res.reduce((acc, cur) => acc + (+cur), 0);
};
function helper(root, cur, res) {
  if (!root) return;
  cur += root.val;
  if (!root.left && !root.right) {
    res.push(cur);
    return;
  }
  helper(root.left, cur, res);
  helper(root.right, cur, res);

}
// @lc code=end

