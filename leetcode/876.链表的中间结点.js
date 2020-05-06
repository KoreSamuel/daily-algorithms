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
// 单指针
// var middleNode = function (head) {
//   let count = 1;
//   let p = head;
//   while (p.next) {
//     count++;
//     p = p.next;
//   }
//   count = Math.floor(count / 2);
//   while (count--) {
//     head = head.next;
//   }

//   return head;
// };

// 双指针
var middleNode = function (head) {
  let l1 = l2 = head;
  while (l2 && l2.next) {
    l1 = l1.next;
    l2 = l2.next.next;
  }
  return l1;
}
// @lc code=end

