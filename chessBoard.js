function solveChessboard() {
  const boardSize = 10;
  const chessboard = Array.from({ length: boardSize }, () =>
    Array(boardSize).fill(0)
  );

  const possible_x_move = [0, 0, -3, 3, 2, 2, -2, -2, -3, -3];
  const possible_y_move = [-3, 3, 0, 0, -2, 2, -2, 2, -1, 1];

  function isSafe(x, y) {
    return x >= 0 && y >= 0 && x < boardSize && y < boardSize && chessboard[x][y] === 0;
  }

  function solve(x, y, moveCount) {
    chessboard[x][y] = moveCount;

    if (moveCount === boardSize * boardSize) {
      return true;
    }

    for (let i = 0; i < 10; i++) {
      const nextX = x + possible_x_move[i];
      const nextY = y + possible_y_move[i];

      if (isSafe(nextX, nextY) && solve(nextX, nextY, moveCount + 1)) {
        return true;
      }
    }

    chessboard[x][y] = 0;
    return false;
  }

  if (solve(0, 0, 1)) {
    return chessboard;
  }

  return null;
}

const solution = solveChessboard();

if (solution) {
  for (let row of solution) {
    console.log(row.join('\t'));
  }
} else {
  console.log("No solution exists.");
}
