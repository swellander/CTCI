var permuteUnique = function(nums) {
  if (!nums.length) return [];

  let permutations = [];

  function recurse(arr, history) {
    //base case => if arr only has 1 el: add history + el to permutations and return to leave frame
    if (arr.length === 1) return permutations.push(history.concat(arr));
    //loop over each el in arr
    arr.forEach((el, i) => {
      //check if current el is not same as prev el
      if (el !== arr[i - 1]) {
        //make a copy of the array so that mutation does interfere with each path
        const copyArr = arr.slice("");
        //pull out the current element
        copyArr.splice(i, 1);
        //recurse on remaining elements with current element added to history
        recurse(copyArr, history.concat(el)); //NOTE: Array.prototype.concat() returns the concatted array. while .push() does not
      }
      //if el is same as prev el: skip path entirely
    });
  }
  //sort nums array first so that duplicates are grouped TODO: think of a way to not have to use sort.()
  recurse(nums.sort(), []);
  return permutations;
};

const input = [1, 2, 1];
const output = permuteUnique(input);
console.log(output);
