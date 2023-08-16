import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 3, ncols = 3, chanceLightStartsOn = 0.5 }) {
  const genChanceLightIsOn = () => Math.random() < chanceLightStartsOn;
  const [board, setBoard] = useState(createBoard());

  // Create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let i = 0; i < nrows; i++) {
      let currRow = [];
      for (let i = 0; i < ncols; i++) {
        currRow.push(genChanceLightIsOn());
      }
      initialBoard.push(currRow);
    }
    return initialBoard;
  }

  function hasWon() {
    // Check the board in state to determine whether the player has won.
    for (let row of board) {
      if (row.includes(true)) {
        return false;
      }
    }
    return true;
  }

  function flipCellsAround(coord) {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // Make a (deep) copy of the oldBoard
      const newBoard = [...oldBoard];

      // In the copy, flip this cell and the cells around it
      flipCell(y, x, newBoard);
      flipCell(y - 1, x, newBoard);
      flipCell(y + 1, x, newBoard);
      flipCell(y, x - 1, newBoard);
      flipCell(y, x + 1, newBoard);

      // Return the copy
      return newBoard;
    });
  }

  function restart() {
    setBoard(createBoard());
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return (
      <div className="Board">
        <h1 className="Board-won">Congrats, you've Won!</h1>
        <button className="Board-restart" onClick={restart}>
          Restart
        </button>
      </div>
    );
  } else
    return (
      // make table board
      <div className="Board">
        <table className="Board-table">
          {board.map((row, y) => (
            <tr className="Board-row">
              {row.map((cell, x) => (
                <Cell
                  flipCellsAround={flipCellsAround}
                  isLit={cell}
                  coord={y + "-" + x}
                />
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
}

export default Board;

// How to pass coord of cell back to Board component
// Update better css styles
