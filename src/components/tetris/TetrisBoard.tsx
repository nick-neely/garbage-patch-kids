import React from 'react';

// Define the type for each cell in the grid
interface Cell {
  color: string; // Or any other properties each cell might have
}

// Define the type for the props that Gameboard will receive
interface GameboardProps {
  grid: Cell[][];
  activeTetromino: any; // Replace 'any' with the actual type of activeTetromino
}

const TetrisBoard = ({ grid, activeTetromino }: GameboardProps) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {grid.map((row: Cell[], y: number) => (
        row.map((cell: Cell, x: number) => (
          <div key={`${x}-${y}`} style={{
            position: 'absolute',
            left: `${x * 10}%`,  // Assuming 10 cells wide
            top: `${y * 10}%`,   // Assuming 20 cells tall
            width: '10%',        // Based on cell count
            height: '10%',
            backgroundColor: cell.color,
            border: '1px solid white'
          }} />
        ))
      ))}
    </div>
  );
};

export default TetrisBoard;
