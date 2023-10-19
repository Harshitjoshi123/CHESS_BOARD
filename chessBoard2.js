function solveChessboard() {
    const boardSize = 10;
    const chessboard = Array.from({ length: boardSize }, () =>
        Array(boardSize).fill(0)
    );

    const possible_x_move = [0, 0, -3, 3, 2, 2, -2, -2];
    const possible_y_move = [-3, 3, 0, 0, -2, 2, -2, 2];
  
  
    function isSafe(x, y) {
        return x >= 0 && y >= 0 && x < boardSize && y < boardSize && chessboard[x][y] === 0;
    }


    return function solve(x, y) {
        const places = [];

        for (let i = 0; i < 10; i++) {
            const nextX = x + possible_x_move[i];
            const nextY = y + possible_y_move[i];
            if(isSafe(nextX,nextY)){
              places.push([nextX,nextY])
            }
        }
        return places
    }
}

const solution = solveChessboard();
console.log(solution(5,5))
