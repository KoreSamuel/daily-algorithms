/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let s = head;
  let f = head.next;
  while (s !== f) {
    if (f === null || f.next === null) return false;
    s = s.next;
    f = f.next.next;
  }
  return true;
};
// @lc code=end

