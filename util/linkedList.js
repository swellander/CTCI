const printList = head => {
  let outputStr = "";
  let curr = head;
  while (curr) {
    if (!curr.next) outputStr += curr.val;
    else outputStr += `${curr.val} => `;
    curr = curr.next;
  }
  console.log("List: ", outputStr);
};

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = val ? new Node(val) : null;
    return this;
  }
  forEach(func) {
    let current = this.head;
    while (current) {
      func(current);
      current = current.next;
    }
  }
  insert(val) {
    const node = new Node(val);
    let current = this.head;
    if (!current) {
      this.head = node;
      return;
    }
    while (current.next) current = current.next;
    current.next = node;
  }
  generate(numberOfNodes) {
    let index = 1;
    while (numberOfNodes >= index) {
      this.insert(index);
      index++;
    }
    return this;
  }
}

module.exports = { LinkedList, printList };
