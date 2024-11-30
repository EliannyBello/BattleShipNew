export type CellState = 'empty' | 'ship' | 'hit' | 'miss';

export type Board = CellState[][];

export type Ship = {
  length: number;
  positions: { row: number; col: number }[];
  hits: number;
};

export type GameState = 'setup' | 'playing' | 'gameOver';