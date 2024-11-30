export const BOARD_SIZE = 10;
export const SHIPS = [
  { name: 'Carrier', size: 5 },
  { name: 'Battleship', size: 4 },
  { name: 'Cruiser', size: 3 },
  { name: 'Submarine', size: 3 },
  { name: 'Destroyer', size: 2 },
];

export const createEmptyBoard = () => {
  return Array(BOARD_SIZE).fill(null).map(() => 
    Array(BOARD_SIZE).fill('empty')
  );
};

export const isValidPlacement = (board, ship, row, col, isHorizontal) => {
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

export const placeShip = (board, shipLength, row, col, isHorizontal) => {
  const newBoard = board.map(row => [...row]);
  const positions = [];

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