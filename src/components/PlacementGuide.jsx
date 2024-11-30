import React from 'react';
import { RotateCw } from 'lucide-react';
import { SHIPS } from '../utils/boardUtils';

const PlacementGuide = ({ currentShipIndex, isHorizontal, onRotate }) => {
  const currentShip = SHIPS[currentShipIndex];

  if (!currentShip) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-lg">{currentShip.name}</p>
          <div className="flex items-center gap-1">
            {Array(currentShip.size).fill(null).map((_, i) => (
              <div key={i} className="w-6 h-6 bg-gray-600"></div>
            ))}
          </div>
        </div>
        <button
          onClick={onRotate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <RotateCw className="w-5 h-5" />
          {isHorizontal ? 'Horizontal' : 'Vertical'}
        </button>
      </div>
    </div>
  );
};

export default PlacementGuide;