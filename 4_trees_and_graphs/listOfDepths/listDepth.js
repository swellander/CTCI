//4.2
const { root } = require("../../util/bst");
const { printList } = require("../../util/linedList");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  addToTail(node) {
    let curr = this;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }
}

function isHead(num) {
  const depth = Math.log(num) / Math.log(2);
  return Number.isInteger(depth);
}

function listOfDepths(root) {
  let currNodeNum = 1;
  let queue = [root];
  let lists = [];
  let curr;

  while (queue.length) {
    curr = queue.shift();
    if (isHead(currNodeNum)) lists.push(new Node(curr.val));
    else lists[lists.length - 1].addToTail(new Node(curr.val));
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
    currNodeNum++;
  }

  return lists;
}

const lLists = listOfDepths(root);
console.log(lLists);

for (list of lLists) console.log(printList(list));
