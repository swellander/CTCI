class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

//   4
// 4   4
//       5

const root = new Node(4);
const left = new Node(4);
const right = new Node(4);
const rightRight = new Node(5);

right.right = rightRight;
root.right = right;
root.left = left;

function longestsUnivaluePath(root) {
  debugger;
  let ans = 0;

  function arrowLength(node) {
    if (!node) return 0;
    let leftLength = arrowLength(node.left);
    let rightLength = arrowLength(node.right);
    let leftArrow = 0;
    let rightArrow = 0;
    if (node.left && node.left.val == node.val) leftArrow = leftLength + 1;
    if (node.right && node.right.val == node.val) rightArrow = rightLength + 1;
    ans = Math.max(ans, leftArrow + rightArrow);
    return Math.max(leftArrow, rightArrow);
  }

  arrowLength(root);
  return ans;
}

const output = longestsUnivaluePath(root);

console.log(output);
