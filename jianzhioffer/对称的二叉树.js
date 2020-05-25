/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  let queue = [root, root];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left, right.right, left.right, right.left);
  }
  return true;
};