//Time: O(n^2) loop within a loop
//Space: O(1)

function smallestDifference(a1, a2) {
  //set min to infinity
  let min = Infinity;
  //set result = [];
  let result;
  //for each int in a1
  for (a of a1) {
    //for each int in a2
    for (b of a2) {
      //if abs(inta, intb) < min
      const diff = Math.abs(a - b);
      if (diff < min) {
        // min = new min
        //pair = [inta, intb];
        min = diff;
        result = [a, b];
      }
    }
  }
  return result;
}

const aList = [-5, 10, 20, 28, 3];
const bList = [26, 134, 135, 15, 17];

const output = smallestDifference(aList, bList);
console.log(output);
