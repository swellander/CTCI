//imagine a robot sitting on the upper left cornder of a grid with r rows and c columns. the robot can only move in two directions, right and down, but certain cells are off limits such that the robot cannot step on them. design an algo to find a path for the robot from the top left to the bottom right.

const rows = 6;
const cols = 10;
const badCells = [[2, 1], [1, 0], [2, 2], [4, 2], [2, 4]];

function bot(rows, cols, badCells) {
  //construct the Board
  const Board = new Array(rows).fill(0).map(row => new Array(cols).fill(" "));
  //populate bad cells
  badCells.forEach(coords => (Board[coords[0]][coords[1]] = "X"));
  console.table(Board);

  let pathFound = false;

  function findPath([y, x], board) {
    if (y === rows || x === cols) return false;
    const cell = Board[y][x];
    if (cell === "X") return false;

    board = board.slice("");
    if (y == rows - 1 && x == cols - 1) {
      board[y][x] = "!";
      console.table(board);
      return true;
    }
    //if bad cell return false
    board[y][x] = "O";
    return findPath([y + 1, x], board) || findPath([y, x + 1], board);
  }
  return findPath([0, 0], Board);
}

const output = bot(rows, cols, badCells);

console.log(output);
