/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let p = head;
  let q = head.next;
  let temp = null;
  head.next = null;
  while (q !== null) {
    temp = q.next;
    q.next = p;
    p = q;
    q = temp;
  }
  head = p;
  return head;
};
