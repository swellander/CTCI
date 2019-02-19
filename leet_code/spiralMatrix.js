/*
Sprial matrix
=====================

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  if (!matrix.length) return [];
  const output = [];
  let i = 0;
  const total = matrix.length * matrix[0].length;
  let row = 0;
  let col = 0;
  let margin = 0;
  let height, width;
  //while loop with 4 steps (condition is while row or col are less than margin)
  while (i < total) {
    width = matrix[0].length - margin;
    height = matrix.length - margin;
    output.push(matrix[row][col]);
    //1. go right
    if (row === margin && col < width - 1) col++;
    //2 go down
    else if (col === width - 1 && row < height - 1) row++;
    //3 go left
    else if (row === height - 1 && col > margin) col--;
    //4 go up
    else if (col === margin && row > 1 + margin) row--;
    else {
      margin++;
      col++;
    }

    //else at last element of this margin
    i++;
    //increase margin by 1
  }
  return output;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

const output = spiralOrder(matrix); // [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,16,17]

console.log(output);
