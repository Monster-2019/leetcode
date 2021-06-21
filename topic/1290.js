/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let str = ''
  do {
    str += head.val
    head = head.next
  } while (head !== null)
  return parseInt(str, 2)
};

// 88ms 43.32%; 38.2mb 7.89%;