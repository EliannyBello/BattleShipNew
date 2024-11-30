import React from 'react';
import Cell from './Cell';
import { Board as BoardType } from '../types/game';

interface BoardProps {
  board: BoardType;
  onCellClick: (row: number, col: number) => void;
  isPlayerBoard: boolean;
}

const Board: React.FC<BoardProps> = ({ board, onCellClick, isPlayerBoard }) => {
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