const input = [23, 43, 59, 18, 31, 91, 76, 74, 37, 89];
const output = bubbleSort(input);
console.log(output);

function bubbleSort(array) {
  //if only one element in array: return array (already sorted)
  if (array.length === 1) return array;
  for (let i = 0; i < array.length - 1; ++i) {
    // console.log(array[i]);
    //if curr is larger than neighbor: swap
    if (array[i] > array[i + 1])
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }
  return bubbleSort(array.slice(0, -1)).concat(array.slice(-1));
}
