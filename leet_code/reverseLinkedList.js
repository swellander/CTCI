/*
Reverse Linked List
==========================

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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
 * @return {ListNode}
 */

//1 => 2 => 3
//1 => 3 => 2
//3 => 2 => 1

const { printList, LinkedList } = require("../util/linkedList");

//Recursive solution
//===================================================================
var reverseList = function(head) {
  //base case - if head does not have a next return head
  if (!head.next) return head;
  //recurrence relation - set the return of recurse on head.next to head
  const top = reverseList(head.next);
  let node = top;
  while (node.next) node = node.next;
  node.next = head;
  head.next = null;
  return top;
};

//Iterative solution
//===================================================================
var reverseListIteratively = function(head) {
  //grab end of list
  //keep track of tail
  //while tail !== old head 
    //get last node
    
};



const list = new LinkedList();
list.generate(10);

printList(list.head);
printList(reverseList(list.head));
