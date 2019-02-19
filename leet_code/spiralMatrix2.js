/*
Spiral Matrix II
=======================

Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */

function generateMatrix(n) {
  const matrix = new Array(n).fill(1).map(e => new Array(n).fill(""));
  if (!matrix.length) return [];
  const output = [];
  let i = 1;
  const total = matrix.length * matrix[0].length;
  let row = 0;
  let col = 0;
  let margin = 0;
  let height, width;
  //while loop with 4 steps (condition is while row or col are less than margin)
  while (i <= total) {
    width = matrix[0].length - margin;
    height = matrix.length - margin;
    matrix[row][col] = i;
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
  return matrix;
}

const output = spiralOrder(3);

console.table(output);
