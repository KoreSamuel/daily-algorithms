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
var mirrorTree = function (root) {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    let cur = queue.shift();
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
    let temp = cur.left;
    cur.left = cur.right;
    cur.right = temp;
  }
  return root;
};