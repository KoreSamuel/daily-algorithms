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
// BFS 保存了每层节点的值，最后将最后一层相加
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
  return res.pop().reduce((acc, cur) => acc + cur, 0);
};

// BFS 每层都相加，下一层将上一层覆盖，最后返回的就是最后一层的
var deepestLeavesSum = function (root) {
  const queue = [root];
  let res = 0;
  while (queue.length) {
    let len = queue.length;
    res = 0;
    while (len--) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      res += cur.val;
    }
  }
  return res;
};

// DFS
var deepestLeavesSum = function (root) {
  let maxLevel = -1;
  let total = 0;
  function dfs(node, level) {
    if (!node) return;
    if (level > maxLevel) {
      maxLevel = level;
      total = node.val;
    } else if (level === maxLevel) {
      total += node.val;
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1)
  }
  dfs(root, 0);
  return total;
}
