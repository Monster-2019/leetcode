/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let result = []
    let node = head
    while (node !== null) {
        result.splice(0, 0, node.val)
        node = node.next
    }
    return result
}

// 108ms 23.64%; 39.9mb 51.28%;