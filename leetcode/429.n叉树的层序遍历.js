/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length) {
    let temp = [];
    let len = queue.length;
    while (len--) {
      let cur = queue.shift();
      temp.push(cur.val);
      if (cur.children) {
        for (let i = 0; i < cur.children.length; i++) {
          queue.push(cur.children[i]);
        }
      }
    }
    res.push(temp);
  }
  return res;
};
levelOrder({ "$id": "1", "children": [{ "$id": "2", "children": [{ "$id": "5", "children": [], "val": 5 }, { "$id": "6", "children": [], "val": 6 }], "val": 3 }, { "$id": "3", "children": [], "val": 2 }, { "$id": "4", "children": [], "val": 4 }], "val": 1 })
// @lc code=end

