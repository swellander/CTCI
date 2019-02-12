// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// function reverseString(arr) {
//   debugger;
//   if (arr.length === 1) return arr;
//   const last = arr.pop();
//   arr = reverseString(arr).unshift(last);
// }

// const strArr = ["H", "a", "n"];
// reverseString(strArr);
// console.log(strArr);

// let maxLength = 0;
// let currEdges = 0;

// ourFunc(head, prevVal, maxLength, currEdges)

//is cur val same as prevVal => maxLength++
//ourFunc(leftChild, 4, 0)

//     4
//   4   4

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const left = new Node(4);
const right = new Node(4);
const root = new Node(4);
root.right = right;
root.left = left;

function univalue(root, prevVal, edgeCount) {
  debugger;
  if (!root) return;
  if (root.value !== prevVal) {
    edgeCount = 0;
  } else {
    edgeCount++;
  }
  univalue(this.left, this.val, edgeCount);
  univalue(this.right, this.val, edgeCount);
}

let count = 0;

univalue(root, null, count);
