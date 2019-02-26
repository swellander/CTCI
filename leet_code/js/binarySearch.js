//TODO: fix this - doesn't work as is

function binarySearch(array, target) {
  //left and right pointers
  let left = 0;
  let right = array.length - 1;
  let midIdx;
  let midVal;
  //grab mid el between left and right pointers
  //while there are still elements to be checked
  while (left < right) {
    //midIdx = difference / 2 plus the left
    midIdx = Math.ceil((right - left) / 2 + left);
    midVal = array[midIdx];
    //if midVal == target return midVal idx
    if (midVal === target) return midIdx;
    if (midVal > target) right = midIdx - 1;
    else left = midIdx + 1;
  }
  return -1;
}

const arr = [1, 2, 3, 111];
const target = 111;
const output = binarySearch(arr, target);

console.log(output);
