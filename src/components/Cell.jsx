import React from 'react';

const Cell = ({ state, onClick, isPlayerBoard }) => {
  const getCellClass = () => {
    const baseClass = "w-10 h-10 border border-gray-400 cursor-pointer transition-colors";
    
    switch (state) {
      case 'empty':
        return `${baseClass} bg-blue-200 hover:bg-blue-300`;
      case 'ship':
        return `${baseClass} ${isPlayerBoard ? 'bg-gray-600' : 'bg-blue-200 hover:bg-blue-300'}`;
      case 'hit':
        return `${baseClass} bg-red-500`;
      case 'miss':
        return `${baseClass} bg-gray-400`;
      default:
        return baseClass;
    }
  };

  return (
    <div
      className={getCellClass()}
      onClick={onClick}
    />
  );
};

export default Cell;