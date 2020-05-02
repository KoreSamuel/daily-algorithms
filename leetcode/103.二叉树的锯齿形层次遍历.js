/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  let isRight = true;
  while (queue.length) {
    let temp = [];
    let curRes = [];
    while (queue.length) {
      let cur = queue.shift();
      curRes.push(cur.val);
      if (cur.left) temp.push(cur.left)
      if (cur.right) temp.push(cur.right);
    }
    queue = temp;
    if (isRight) {
      res.push(curRes);
    } else {
      res.push(curRes.reverse());
    }
    isRight = !isRight;
  }
  return res;
};
// @lc code=end

