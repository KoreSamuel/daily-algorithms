/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const temp = [];
  function inorder(node, list) {
    if (node === null) return;
    inorder(node.left, list);
    list.push(node.val);
    inorder(node.right, list);
  }
  inorder(root, temp);
  const res = new TreeNode(0);
  let cur = res;
  for (const n of temp) {
    cur.right = new TreeNode(n);
    cur = cur.right;
  }
  return res.right;
};
// @lc code=end

