/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 1;
  let p = head;
  while (p.next) {
    count++;
    p = p.next;
  }
  count = Math.floor(count / 2);
  while (count--) {
    head = head.next;
  }

  return head;
};
// @lc code=end

