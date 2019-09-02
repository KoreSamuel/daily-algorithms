/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let res = new ListNode(0);
  let r = res;
  while (l1 || l2) {
    let a = (l1 && l1.val) || 0;
    let b = (l2 && l2.val) || 0;
    let temp = a + b + carry;
    carry = temp > 9 ? 1 : 0;
    r.next = new ListNode(temp % 10);
    r = r.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) r.next = new ListNode(1);
  return res.next;
};
