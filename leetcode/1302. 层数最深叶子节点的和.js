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
var deepestLeavesSum = function (root) {
  const res = [];
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    let temp = [];
    while (len--) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      temp.push(cur.val);
    }
    res.push(temp);
  }
  return res.pop().reduce((acc, cur) => acc + cur, 0)
};