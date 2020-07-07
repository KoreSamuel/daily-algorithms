/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let p = head;
  let q = head.next;
  p.next = swapPairs(q.next);
  q.next = p;
  return q;
};

/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let hack = new ListNode(0);
  hack.next = head;
  let prev = hack;
  while (head && head.next) {
    let p = head;
    let q = head.next;

    prev.next = q;
    p.next = q.next;
    q.next = p;

    prev = p;
    head = p.next;
  }
  return hack.next;
};
// @lc code=end

