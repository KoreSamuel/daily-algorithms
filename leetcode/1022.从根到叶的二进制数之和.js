/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function (root) {
  if (!root) return 0;
  const queue = [['' + root.val, root]];
  const res = [];
  while (queue.length) {
    let len = queue.length;
    while (len--) {
      let [val, cur] = queue.shift();
      if (cur.left) queue.push([val + cur.left.val, cur.left]);
      if (cur.right) queue.push([val + cur.right.val, cur.right]);
      if (!cur.left && !cur.right) res.push(val);
    }
  }
  return res.reduce((acc, cur) => acc + btd(cur), 0)
};

function btd(str) {
  let sum = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    sum += str[i] * 2 ** (str.length - i - 1);
  }
  return sum;
}
// @lc code=end

