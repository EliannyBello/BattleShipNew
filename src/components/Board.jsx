import React from 'react';
import Cell from './Cell';

const Board = ({ board, onCellClick, isPlayerBoard }) => {
  return (
    <div className="grid grid-cols-10 gap-0 bg-blue-100 p-2 rounded-lg shadow-lg">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            state={cell}
            onClick={() => onCellClick(rowIndex, colIndex)}
            isPlayerBoard={isPlayerBoard}
          />
        ))
      ))}
    </div>
  );
};

export default Board;