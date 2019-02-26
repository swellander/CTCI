//Iterative solution
//Time: O(n^2)
//Space: O(1)

function insertionSort(array) {
  //loop through the whole array
  array.forEach((el, i) => {
    debugger;
    //loop over all elements to the left
    //check each el to the left of curr
    let curr;
    for (let j = i - 1; j >= 0; --j) {
      //if array[j] < el:
      curr = array[j];
      if (curr < el) {
        //remove el
        array.splice(i, 1);
        //insert el at j+1
        array.splice(j + 1, 0, el);
        return;
      }
    }
    //if this line of code is reached, that means that all nums to the left of el are greater than el
    //and el should be inserted at beginning
    array.splice(i, 1);
    array.splice(0, 0, el);
  });
  return array;
  //if el is greater than curr, insert to the right of el
}

//Recursive solution?
// function recursiveInsertionSort(array)
//   if (array.length === 1) return array;
//   let el = array[array.length-1];

// }

const input = [93, 29, 68, 81, 11, 46, 4, 31, 60, 46];
const output = insertionSort(input);

console.log(output);
