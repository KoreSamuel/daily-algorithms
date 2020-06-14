/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
  const s = new Set();
  const queue = [root];
  while (queue.length) {
    let cur = queue.shift();
    if (cur.left) queue.push(cur.left);
    s.add(cur.val);
    if (cur.right) queue.push(cur.right);
  }
  const temp = Array.from(s).sort((a, b) => a - b);

  return temp.length === 1 ? -1 : temp[1];
};
// @lc code=end

