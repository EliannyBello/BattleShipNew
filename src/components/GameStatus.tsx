import React from 'react';
import { GameState } from '../types/game';
import { Swords, Trophy } from 'lucide-react';

interface GameStatusProps {
  gameState: GameState;
  currentPlayer: 'player' | 'computer';
  winner: 'player' | 'computer' | null;
  onNewGame: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ gameState, currentPlayer, winner, onNewGame }) => {
  return (
    <div className="text-center mb-8">
      {gameState === 'setup' && (
        <div className="text-2xl font-bold text-blue-600">
          Place your ships on the board
        </div>
      )}
      
      {gameState === 'playing' && (
        <div className="flex items-center justify-center gap-3">
          <Swords className="w-6 h-6" />
          <span className="text-2xl font-bold text-blue-600">
            {currentPlayer === 'player' ? "Your turn" : "Computer's turn"}
          </span>
        </div>
      )}
      
      {gameState === 'gameOver' && (
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <span className="text-3xl font-bold text-blue-600">
              {winner === 'player' ? 'You won!' : 'Computer won!'}
            </span>
          </div>
          <button
            onClick={onNewGame}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default GameStatus;