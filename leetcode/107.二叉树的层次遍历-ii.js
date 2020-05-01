/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let temp = [];
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      temp.push(cur.val);
    }
    res.unshift(temp);
  }
  return res;
};
// @lc code=end

