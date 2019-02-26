const input = [1, 1, 2];
const output = getPermutations(input);
console.log(output);

function getPermutations(array) {
  if (!array.length) return [];
  //keep track of all unique combinations
  let permutations = [];
  // define a function recurse
  function recurse(array, history) {
    //base case if array has single e add history.concat(array) to permutations
    if (array.length < 2) return permutations.push(history.concat(array));
    //for each e in array
    array.forEach((e, i) => {
      //copy arr so as not to mutate
      const arrCopy = array.slice("");
      const base = arrCopy.splice(i, 1);
      // recurse with the e as the start of the permutation (added to history) and removed from array
      recurse(arrCopy, history.concat(base));
    });
  }

  recurse(array, []);
  return permutations;
}
