/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const a1 = convertListToArray(l1);
  const a2 = convertListToArray(l2);
  let carry = 0;
  const t = [];
  while (a1.length || a2.length) {
    let t1 = a1.pop() || 0;
    let t2 = a2.pop() || 0;
    let sum = t1 + t2 + carry;
    carry = sum > 9 ? 1 : 0;
    t.push(sum % 10);
  }
  if (carry) t.push(carry);

  let res = new ListNode(t.pop());
  let r = res;
  while (t.length) {
    r.next = new ListNode(t.pop());
    r = r.next;
  }
  return res;
};

function convertListToArray(list) {
  const t = [];
  while (list) {
    t.push(list.val);
    list = list.next;
  }
  return t;
}

// @lc code=end
