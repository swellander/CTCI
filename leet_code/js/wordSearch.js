// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  //maintain a word exists flag
  let exists = false;
  //loop over every letter in board
  board.forEach((row, i) => {
    row.forEach((col, j) => {});
  });
  //recurse on subproblem
}

//subProblem:
//check if current word being searched for is an empty string
//if it is: flip flag to true;
//check all adjecent letters for a match with first letter in input str
//if no match found: return;
//if match found:
//slice first letter off of input str and recurse on matched cell
//also pass info on the cell that you are coming from

function getAdjacentCoords([y, x]) {
  const top = [y - 1, x];
  const bottom = [y + 1, x];
  const left = [y, x - 1];
  const right = [y, x + 1];

  return [top, bottom, left, right];
}
