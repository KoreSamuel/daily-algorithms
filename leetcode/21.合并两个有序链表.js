/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
// var mergeTwoLists = function(l1, l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

var mergeTwoLists = function (l1, l2) {

  let ph = new ListNode(0);
  let l = ph;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      l.next = l1;
      l1 = l1.next;
    } else {
      l.next = l2;
      l2 = l2.next;
    }
    l = l.next
  }

  l.next = l1 === null ? l2 : l1;
  return ph.next;
}
