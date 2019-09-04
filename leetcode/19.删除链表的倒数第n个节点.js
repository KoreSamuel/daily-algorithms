/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head === null || n === 0) {
    return head;
  }
  let p = head;
  let q = head;
  while (n--) {
    q = q.next;
  }
  if (q === null) {
    return head.next;
  }

  while (q.next) {
    p = p.next;
    q = q.next;
  }

  p.next = p.next.next;
  return head;
};
