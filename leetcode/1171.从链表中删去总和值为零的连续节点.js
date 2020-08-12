/*
 * @lc app=leetcode.cn id=1171 lang=javascript
 *
 * [1171] 从链表中删去总和值为零的连续节点
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
var removeZeroSumSublists = function (head) {
  // convert to an array
  const originArray = [];
  while (head !== null) {
    originArray.push(head.val);
    head = head.next;
  }

  // deal the originArray
  for (let i = 0; i < originArray.length; i++) {
    let p = i,
      q = i;
    let prefixSum = originArray[i];
    if (prefixSum === 0) {
      originArray.splice(i, 1);
      i--;
    } else {
      for (let j = i + 1; j < originArray.length; j++) {
        prefixSum += originArray[j];
        q++;
        if (prefixSum === 0) {
          originArray.splice(i, q - p + 1);
          i--;
          break;
        }
      }
    }
  }

  // convert originArray to linkList
  let ph = null;
  if (originArray.length) {
    ph = new ListNode(originArray[0]);
    let cur = ph;
    for (let i = 1; i < originArray.length; i++) {
      cur.next = new ListNode(originArray[i]);
      cur = cur.next;
    }
  }

  return ph;
};

// @lc code=end
