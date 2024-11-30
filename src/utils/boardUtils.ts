import { Board, Ship } from '../types/game';

export const BOARD_SIZE = 10;
export const SHIPS = [
  { name: 'Carrier', size: 5 },
  { name: 'Battleship', size: 4 },
  { name: 'Cruiser', size: 3 },
  { name: 'Submarine', size: 3 },
  { name: 'Destroyer', size: 2 },
];

export const createEmptyBoard = (): Board => {
  return Array(BOARD_SIZE).fill(null).map(() => 
    Array(BOARD_SIZE).fill('empty')
  );
};

export const isValidPlacement = (
  board: Board,
  ship: number,
  row: number,
  col: number,
  isHorizontal: boolean
): boolean => {
  if (isHorizontal) {
    if (col + ship > BOARD_SIZE) return false;
    for (let i = 0; i < ship; i++) {
      if (board[row][col + i] !== 'empty') return false;
    }
  } else {
    if (row + ship > BOARD_SIZE) return false;
    for (let i = 0; i < ship; i++) {
      if (board[row + i][col] !== 'empty') return false;
    }
  }
  return true;
};

export const placeShip = (
  board: Board,
  shipLength: number,
  row: number,
  col: number,
  isHorizontal: boolean
): { newBoard: Board; shipPositions: { row: number; col: number }[] } => {
  const newBoard = board.map(row => [...row]);
  const positions: { row: number; col: number }[] = [];

  for (let i = 0; i < shipLength; i++) {
    if (isHorizontal) {
      newBoard[row][col + i] = 'ship';
      positions.push({ row, col: col + i });
    } else {
      newBoard[row + i][col] = 'ship';
      positions.push({ row: row + i, col });
    }
  }

  return { newBoard, shipPositions: positions };
};