// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes, only nodes itself may be changed.
// Example:

// Given 1->2->3->4, you should return the list as 2->1->4->3.

const { LinkedList, printList } = require("../../util/linkedList");
const list = new LinkedList().generate(8);
function swapPairs(head) {
  //returns a listnode
  // debugger;
  if (!head.next) return head;
  if (!head.next.next) {
    const first = head.next;
    first.next = head;
    head.next = null;
    return first;
  } else {
    const first = head.next;
    head.next = swapPairs(head.next.next);
    first.next = head;
    return first;
  }
}

const swappedListHead = swapPairs(list.head);
printList(swappedListHead);
