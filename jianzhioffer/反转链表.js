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
var reverseList = function (head) {
  const t = [];
  while (head !== null) {
    t.push(head.val);
    head = head.next;
  }
  head = new ListNode(t.pop())
  while (t.length) {
    head.next = new ListNode(t.pop());
    head = head.next;
  }
  return head;
};