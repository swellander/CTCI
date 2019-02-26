const Node = require("./longestUnivalueBST");

const root = new Node(4);
const right = new Node(4);
const rRight = new Node(4);
const rrRight = new Node(5);

root.right = right;
right.right = rRight;
rRight.right = rrRight;

function unival(root) {
  console.log("root", root);
  function recurse(node, prevVal) {
    if (node.val !== prevVal) return false;
    if (node.right) return recurse(node.right, node.val);
    if (node.left) return recurse(node.left, node.val);
  }
  const output = recurse(root, root.val);
  console.log("output", output);
}

unival(root);
