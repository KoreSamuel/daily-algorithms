/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const list = [];
  while (head !== null) {
    list.push(head.val);
    head = head.next;
  }
  let l = 0,
    r = list.length - 1;
  while (l < r) {
    if (list[l] === list[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
