/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */

//  从根节点开始，每次迭代弹出当前栈顶元素，并将其孩子节点压入栈中，先压右孩子再压左孩子。
var preorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    // 调换此处顺序可改为中序和后序
    const cur = queue.pop();
    res.push(cur.val);
    if (cur.right) queue.push(cur.right);
    if (cur.left) queue.push(cur.left);
  }
  return res;
};
// @lc code=end

