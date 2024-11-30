import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import PlacementGuide from './components/PlacementGuide';
import { createEmptyBoard, SHIPS, isValidPlacement, placeShip } from './utils/boardUtils';

function App() {
  const [playerBoard, setPlayerBoard] = useState(createEmptyBoard());
  const [computerBoard, setComputerBoard] = useState(createEmptyBoard());
  const [playerShips, setPlayerShips] = useState([]);
  const [computerShips, setComputerShips] = useState([]);
  const [currentShipIndex, setCurrentShipIndex] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [gameState, setGameState] = useState('setup');
  const [currentPlayer, setCurrentPlayer] = useState('player');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (gameState === 'setup' && currentShipIndex === SHIPS.length) {
      placeComputerShips();
      setGameState('playing');
    }
  }, [currentShipIndex, gameState]);

  const placeComputerShips = () => {
    let newBoard = createEmptyBoard();
    let ships = [];

    SHIPS.forEach(({ size }) => {
      let placed = false;
      while (!placed) {
        const isHorizontal = Math.random() < 0.5;
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        if (isValidPlacement(newBoard, size, row, col, isHorizontal)) {
          const { newBoard: updatedBoard, shipPositions } = placeShip(newBoard, size, row, col, isHorizontal);
          newBoard = updatedBoard;
          ships.push({ length: size, positions: shipPositions, hits: 0 });
          placed = true;
        }
      }
    });

    setComputerBoard(newBoard);
    setComputerShips(ships);
  };

  const handlePlayerBoardClick = (row, col) => {
    if (gameState !== 'setup') return;

    const currentShip = SHIPS[currentShipIndex];
    if (!currentShip) return;

    if (isValidPlacement(playerBoard, currentShip.size, row, col, isHorizontal)) {
      const { newBoard, shipPositions } = placeShip(playerBoard, currentShip.size, row, col, isHorizontal);
      setPlayerBoard(newBoard);
      setPlayerShips([...playerShips, { length: currentShip.size, positions: shipPositions, hits: 0 }]);
      setCurrentShipIndex(prev => prev + 1);
    }
  };

  const handleComputerBoardClick = (row, col) => {
    if (gameState !== 'playing' || currentPlayer !== 'player') return;
    if (computerBoard[row][col] === 'hit' || computerBoard[row][col] === 'miss') return;

    const newBoard = [...computerBoard];
    const isHit = computerBoard[row][col] === 'ship';
    newBoard[row][col] = isHit ? 'hit' : 'miss';
    setComputerBoard(newBoard);

    if (isHit) {
      const updatedShips = computerShips.map(ship => {
        if (ship.positions.some(pos => pos.row === row && pos.col === col)) {
          return { ...ship, hits: ship.hits + 1 };
        }
        return ship;
      });
      setComputerShips(updatedShips);

      if (updatedShips.every(ship => ship.hits === ship.length)) {
        setGameState('gameOver');
        setWinner('player');
        return;
      }
    }

    setCurrentPlayer('computer');
    setTimeout(computerMove, 1000);
  };

  const computerMove = () => {
    let row, col;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (playerBoard[row][col] === 'hit' || playerBoard[row][col] === 'miss');

    const newBoard = [...playerBoard];
    const isHit = playerBoard[row][col] === 'ship';
    newBoard[row][col] = isHit ? 'hit' : 'miss';
    setPlayerBoard(newBoard);

    if (isHit) {
      const updatedShips = playerShips.map(ship => {
        if (ship.positions.some(pos => pos.row === row && pos.col === col)) {
          return { ...ship, hits: ship.hits + 1 };
        }
        return ship;
      });
      setPlayerShips(updatedShips);

      if (updatedShips.every(ship => ship.hits === ship.length)) {
        setGameState('gameOver');
        setWinner('computer');
        return;
      }
    }

    setCurrentPlayer('player');
  };

  const handleNewGame = () => {
    setPlayerBoard(createEmptyBoard());
    setComputerBoard(createEmptyBoard());
    setPlayerShips([]);
    setComputerShips([]);
    setCurrentShipIndex(0);
    setIsHorizontal(true);
    setGameState('setup');
    setCurrentPlayer('player');
    setWinner(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Battleship</h1>
        
        <GameStatus
          gameState={gameState}
          currentPlayer={currentPlayer}
          winner={winner}
          onNewGame={handleNewGame}
        />

        {gameState === 'setup' && (
          <PlacementGuide
            currentShipIndex={currentShipIndex}
            isHorizontal={isHorizontal}
            onRotate={() => setIsHorizontal(!isHorizontal)}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Tu Tablero</h2>
            <Board
              board={playerBoard}
              onCellClick={handlePlayerBoardClick}
              isPlayerBoard={true}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Tablero del Computador</h2>
            <Board
              board={computerBoard}
              onCellClick={handleComputerBoardClick}
              isPlayerBoard={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;