/*
Degree Of An Array
==========================

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  //generate a memo of potential degrees
  const memo = nums.reduce((memo, curr) => {
    if (curr in memo) memo[curr]++;
    else memo[curr] = 1;
    return memo;
  }, {});

  //get nums with highest degree
  let max = -Infinity;
  const degrees = Object.values(memo);
  const highestDegree = degrees.sort((a, b) => b - a)[0];

  //add all nums tied for highest degree into an array
  const feqNums = [];
  for (key in memo) {
    if (memo[key] === highestDegree) feqNums.push(key);
  }

  const candidates = [];
  feqNums.forEach(num => {
    num = Number(num);
    const start = nums.indexOf(num);
    const end = nums.lastIndexOf(num) + 1;

    candidates.push(nums.slice(start, end));
  });

  //sort for shortest sub array
  return candidates.sort((a, b) => a.length - b.length)[0].length;
};

const input = [1, 2, 2, 3, 1, 4, 2];
const output = findShortestSubArray(input); //6
console.log(output);
