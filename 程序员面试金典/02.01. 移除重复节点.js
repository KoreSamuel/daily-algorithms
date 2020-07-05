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
var removeDuplicateNodes = function (head) {
  let p = head;
  while (p) {
    let q = p;
    while (q.next) {
      if (q.next.val === p.val) {
        q.next = q.next.next;
      } else {
        q = q.next;
      }
    }
    p = p.next;
  }
  return head;
}