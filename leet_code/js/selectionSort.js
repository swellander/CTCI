//Implement selection sort recursively

function selectionSort(array) {
  function recurse(array, i) {
    //if past last index in array return array
    if (i === array.length) return array;
    //keep track of min value and index
    let min = {
      val: Infinity,
      index: null
    };
    //for each element in sub array
    array.slice(i).forEach((e, j) => {
      //if smaller than min, set min.index to curr recursive index + loop index (i.e. the index of the current element)
      if (e < min.val) min = { val: e, index: j + i };
    });
    //swap array[i] with element at min index

    [array[i], array[min.index]] = [array[min.index], array[i]];
    //recurse (array, i+1)
    return recurse(array, i + 1);
  }
  return recurse(array, 0);
}

const one = [2, 1];
const two = [3, 2, 1];
const three = [4, 6, 1, 3, 2, 5];

const inputs = [one, two, three];

inputs.forEach(input => console.log(selectionSort(input)));
