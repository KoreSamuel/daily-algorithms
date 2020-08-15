/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;
  const temp = [];
  while (head) {
    temp.push(head.val);
    head = head.next;
  }
  const helper = (left, right) => {
    if (left > right) return null;
    const p = ((left + right) / 2) | 0;
    const root = new TreeNode(temp[p]);
    root.left = helper(left, p - 1);
    root.right = helper(p + 1, right);
    return root;
  };
  return helper(0, temp.length - 1);
};
// @lc code=end
