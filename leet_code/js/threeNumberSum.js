// function threeNumberSum(nums, targetSum) {
//   const perm = {};
//   function getPerms(array, history) {
//     if (history.length === 3) {
//       const sum = history.reduce((a, b) => a + b);
//       if (sum == targetSum) {
//         const sortedHist = history.sort((a, b) => a - b);
//         const strSum = JSON.stringify(sortedHist);
//         if (!perm[strSum]) perm[strSum] = sortedHist;
//       }
//       return;
//     } else {
//       array.forEach((el, i) => {
//         const copy = array.slice("");
//         const base = copy.splice(i, 1);
//         getPerms(copy, history.concat(base));
//       });
//     }
//   }
//   function sortArray(a1, a2) {
//     for (let i = 0; i < a1.length; ++i) {
//       if (a1[i] > a2[i]) return 1;
//       if (a1[i] < a2[i]) return -1;
//     }
//   }
//   getPerms(nums, []);

//   return Object.values(perm).sort(sortArray);
// }

//Algo Expert solution:
//Time: O(n^2) two loops
//Space: O(n) if every combination summed to target
//------------------
function threeNumberSum(nums, targetSum) {
  //maintain an accumulator array;
  nums = nums.sort((a, b) => a - b);
  const acc = [];
  //for each num in nums
  nums.forEach((curr, i) => {
    //don't need advance curr to the last element;
    if (i === nums.length - 1) return;
    //initialize two ratchets, left and right
    //left at i + 1, right at last index of nums
    let left = i + 1;
    let right = nums.length - 1;
    //while left < right:
    while (left < right) {
      const sum = curr + nums[left] + nums[right];
      //if sum of curr num, left and right is less than targetSum:
      //increment left by one
      if (sum < targetSum) left++;
      //else if greater:
      //decrement right by one
      else if (sum > targetSum) right--;
      //else (equal):
      else {
        //add [all three] into accumulator
        acc.push([curr, nums[left], nums[right]]);
        //move both ratchets inward
        left++;
        right--;
      }
    }
  });
  //return accumulator
  return acc;
}

const input = [12, 3, 1, 2, -6, 5, -8, 6];
const output = threeNumberSum(input, 0);

console.log(output);
