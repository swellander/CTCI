const input = [63, 82, 94, 9, 3, 16];
const output = findThreeLargestNumbers(input);
console.log(output); //[63, 82, 94];

function findThreeLargestNumbers(array) {
  // Write your code here.
  return array.sort((a, b) => a - b).slice(-3);
}
