const printList = head => {
  let outputStr = "";
  let curr = head;
  while (curr) {
    if (!curr.next) outputStr += curr.val;
    else outputStr += `${curr.val} => `;
    curr = curr.next;
  }
  return outputStr;
};

module.exports = { printList };
