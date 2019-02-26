// Array Index & Element Equality
// Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

// Examples:

// input: arr = [-8,0,2,5]
// output: 2 # since arr[2] == 2

// input: arr = [-1,0,3,6]
// output: -1 # since no index in arr satisfies arr[i] == i.
// Constraints:

// [time limit] 5000ms

// [input] array.integer arr

// 1 ≤ arr.length ≤ 100
// [output] integer

function indexEqualsValueSearch(array) {
  //keep track of lowest index
  let lowIdx = null;
  let midIdx;
  let midVal;
  function recurse(subArr) {
    //basecase
    if (!subArr.length) return;
    //grab middle val from mid index
    midIdx = Math.floor(subArr.length / 2);
    midVal = subArr[midIdx];
    //reasign midIdx to absolute idx of top level array
    midIdx = array.indexOf(midVal);
    //recurse on left half
    //if midVal > midIdx
    if (midVal > midIdx) recurse(subArr.slice(0, midIdx));
    //if midVal < midIdx
    else if (midVal < midIdx) recurse(subArr.slice(midIdx + 1));
    //if midVal === midIdx: set lowest to midIdx
    else {
      lowIdx = midIdx;
      recurse(subArr.slice(0, midIdx));
    }
  }

  //call recurse
  recurse(array);
  return lowIdx ? lowIdx : -1;
  //if lowest index !== null return lowest index
  //else return -1
}

const input = [-8, 1, 2, 5];
const input2 = [-1, 0, 3, 6];
const output = indexEqualsValueSearch(input);
const output2 = indexEqualsValueSearch(input2);

console.log(output);
console.log(output2);
