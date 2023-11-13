import Phaser from "phaser";
import { useEffect } from "react";

class TetrisScene extends Phaser.Scene {
  constructor() {
    super({ key: "TetrisScene" });
  }

  preload() {
    // Load your Tetris assets here
    this.load.image("I", "assets/tetris/shapes/I.png");
    this.load.image("J", "assets/tetris/shapes/J.png");
    this.load.image("L", "assets/tetris/shapes/L.png");
    this.load.image("O", "assets/tetris/shapes/O.png");
    this.load.image("S", "assets/tetris/shapes/S.png");
    this.load.image("T", "assets/tetris/shapes/T.png");
    this.load.image("Z", "assets/tetris/shapes/Z.png");

    this.load.image("board", "src/assets/tetris/board.png");
  }

  create() {
    // Create game objects and set up the board
    this.add.image(384, 704, "board"); // center of the board
  }

  update() {
    // Game logic that updates every frame
  }
}

const TetrisGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 768, // Board's width
      height: 1408, // Board's height
      parent: "tetris-game-container",
      scene: [TetrisScene],
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="tetris-game-container"></div>;
};

export default TetrisGame;
