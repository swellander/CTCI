// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const { Node, LinkedList, printList } = require("../../util/linkedList");

const aList = new LinkedList(1);
aList.insert(2);
aList.insert(4);

const bList = new LinkedList(1);
bList.insert(3);
bList.insert(4);

printList(aList.head);
printList(bList.head);

const output = mergeTwoLists(aList.head, bList.head);
printList(output); // Output: 1->1->2->3->4->4

function mergeTwoLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return null;
  let head, tail;
  let a = l1;
  let b = l2;
  //initialize
  if (a.val < b.val) {
    head = tail = a;
    a = a.next;
  } else {
    head = tail = b;
    b = b.next;
  }
  while (a && b) {
    if (a.val > b.val) {
      tail.next = b;
      tail = b;
      b = b.next;
    } else {
      tail.next = a;
      tail = a;
      a = a.next;
    }
  }
  tail.next = a ? a : b;
  return head;
}
