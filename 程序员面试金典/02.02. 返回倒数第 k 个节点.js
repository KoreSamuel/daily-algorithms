/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  let p = head, q = head;
  while (--k) {
    p = p.next;
  }
  while (p.next) {
    p = p.next;
    q = q.next;
  }
  return q.val;
};