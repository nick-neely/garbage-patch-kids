import Phaser from "phaser";
import { useEffect } from "react";
import TetrisCss from "../styles/tetris.module.css"

class TetrisScene extends Phaser.Scene {
  constructor() {
    super({ key: "TetrisScene" });
  }

  preload() {
    // Load assets
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
    this.add.image(192, 352, "board"); // center of the board
  }

  update() {
    // Game logic that updates every frame
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

  return <div id="tetris-game-container" className={TetrisCss["tetris-game"]}></div>;
};

export default TetrisGame;
