/*
Magic index
==============

A magic index in an array arr[0...n-1] is defined to be an index such that arr[i] === i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array arr.
*/

function magicIndex(arr, brace = 0) {
  //if arr has only 1 el and el is not magic index: return -1
  if (!arr.length) return -1;
  //grab mid index and value
  const midIdx = Math.floor(arr.length / 2); //['x', ' ']
  const midVal = arr[midIdx];
  const absIdx = midIdx + brace;
  //if mid value is greater than mid index + brace
  if (midVal > absIdx) return magicIndex(arr.slice(0, midIdx), brace);
  //return recurse on left half not including mid Value/index
  //else if mid val is less than mid index + brace
  if (midVal < absIdx)
    return magicIndex(arr.slice(midIdx + 1), brace + midIdx + 1);
  //return recurse on right half with brace + right half length + 1
  //else magic index is found
  return absIdx;
  //return midIndex + brace
}

const array = [-4, -2, 0, 1, 3, 6, 7, 10];
const output = magicIndex(array);
console.log(output); //5
