import Phaser from "phaser";
import { useEffect } from "react";

type TetrominoShape = number[][];

// Define the grid size
const GRID_WIDTH = 10;
const GRID_HEIGHT = 20;

// Assume cellSize is the size of each cell in pixels
const cellSize = 32;

const xOffset = 0; // Set the x offset
const yOffset = 0; // Set the y offset

// Convert grid coordinates to pixel coordinates
function gridToPixel(gridX: number, gridY: number): Phaser.Math.Vector2 {
  const pixelX = gridX * cellSize + xOffset;
  const pixelY = gridY * cellSize + yOffset;
  return new Phaser.Math.Vector2(pixelX, pixelY);
}

// Create the game board grid
let grid: number[][] = createGrid(GRID_HEIGHT, GRID_WIDTH);

// Function to create a 2D grid
function createGrid(rows: number, cols: number): number[][] {
  const grid: number[][] = [];

  for (let row = 0; row < rows; row++) {
    grid[row] = [];

    for (let col = 0; col < cols; col++) {
      grid[row][col] = 0; // 0 will represent an empty square
    }
  }
  

  return grid;
}

class TetrisScene extends Phaser.Scene {
  // Define the current Tetromino
  private currentTetromino: Phaser.GameObjects.Sprite | null = null;

  // Define Tetromino shapes
  private tetrominoShapes: { [key: string]: TetrominoShape } = {
    I: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    O: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    T: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
  };

  constructor() {
    super({ key: "TetrisScene" });
    this.currentTetromino = null;
  }

  preload() {
    // Load assets
    this.load.image("I", "src/assets/tetris/shapes/I.png");
    this.load.image("J", "src/assets/tetris/shapes/J.png");
    this.load.image("L", "src/assets/tetris/shapes/L.png");
    this.load.image("O", "src/assets/tetris/shapes/O.png");
    this.load.image("S", "src/assets/tetris/shapes/S.png");
    this.load.image("T", "src/assets/tetris/shapes/T.png");
    this.load.image("Z", "src/assets/tetris/shapes/Z.png");

    this.load.image("board", "src/assets/tetris/board.png");
  }

  create() {
    // Create game objects and set up the board
    this.add.image(192, 352, "board"); // center of the board

    // Render the grid
    const gridGraphics = this.add.group();
    const cellSize = 32;
    const borderWidth = 1; // Set the border width
    const xOffset = 32; // Set the x offset
    const yOffset = 32; // Set the y offset
    for (let row = 0; row < GRID_HEIGHT; row++) {
      for (let col = 0; col < GRID_WIDTH; col++) {
        const x = col * cellSize + cellSize / 2 + xOffset;
        const y = row * cellSize + cellSize / 2 + yOffset;
        const rect = this.add.rectangle(x, y, cellSize, cellSize);
        rect.setStrokeStyle(borderWidth, 0xffffff); // Set the border color and width
        gridGraphics.add(rect);
      }
    }
  }

  private elapsedSeconds = 0;

  update(_time: number, delta: number) {
    // Handle keyboard input to move the current Tetromino
    // Move the Tetromino down automatically over time
    // Check and clear lines if completed

    this.elapsedSeconds += delta / 1000; // Convert delta to seconds

    if (this.elapsedSeconds >= 1) {
      this.spawnTetromino();
      this.elapsedSeconds = 0;
    }
  }

  private spawnTetromino() {
    // Select a random Tetromino type
    const types = Object.keys(this.tetrominoShapes);
    const type = Phaser.Utils.Array.GetRandom(types);

    // Load the sprite for the Tetromino
    const gridPosition = { x: 4, y: 1 }; // Set the initial grid position
    const pixelPosition = gridToPixel(gridPosition.x, gridPosition.y);

    this.currentTetromino = this.add.sprite(
      pixelPosition.x,
      pixelPosition.y,
      type
    );

    // Set the origin to the top-left corner
    if (this.currentTetromino) {
      this.currentTetromino.setOrigin(0, 0);
    }
  }
}

const TetrisGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 386, // Board's width
      height: 704, // Board's height
      parent: "tetris-game-container",
      scene: [TetrisScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div
      id="tetris-game-container"
      className="h-screen flex items-center justify-center"
    ></div>
  );
};

export default TetrisGame;
