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

/** DFS */
var maxDepth = function (root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/** BFS */
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let count = 0
  while (queue.length) {
    let len = queue.length;
    count++;
    while (len--) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return count;
};