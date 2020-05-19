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
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let flag = true;
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    while (len--) {
      let cur = queue.shift();
      temp.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    res.push(flag ? temp : temp.reverse());
    flag = !flag;
  }
  return res;
};