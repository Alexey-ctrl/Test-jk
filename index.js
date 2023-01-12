function isSolved(board) {
  board[3] = [];
  board[4] = [];
  for (let i = 0; i < 3; i++) {
    board[3].push(board[i][i]);
    board[4].push(board[2 - i][i]);
  }

  let hasEmpty = false;
  for (const row of board) {
    let rowWin = 0;
    for (const cell of row) {
      if (cell === 0) {
        hasEmpty = true;
        rowWin = 0
      } else if (rowWin === cell || rowWin === -1) {
        rowWin = cell;
      } else {
        rowWin = 0
      }
    }
    if (rowWin === 1 || rowWin === 2) return rowWin;
  }

  if (hasEmpty) return -1;
  return 0;
}

console.log(isSolved([
  [2,2,2],
  [0,1,1],
  [1,0,0]
]));
