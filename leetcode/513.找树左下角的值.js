/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  let queue = [root];
  let cur = null;
  while (queue.length) {
    cur = queue.shift();
    if (cur.right) queue.push(cur.right)
    if (cur.left) queue.push(cur.left);
  }
  return cur.val;
};
// @lc code=end

