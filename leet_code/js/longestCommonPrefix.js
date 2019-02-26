// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function(strs) {
  let lcp = "";
  if (!strs.length) return "";
  const firstWord = strs[0];
  for (let i = 0; i < firstWord.length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      const currWord = strs[j];
      if (firstWord[i] !== currWord[i]) return lcp;
    }
    lcp += firstWord[i];
  }
  return lcp;
};

const input = ["flower", "flow", "flight", "h"];
const output = longestCommonPrefix(input);
console.log(output);
