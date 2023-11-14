import FlappyCss from "../styles/flappybird.module.css";
import PlayButton from "../components/PlayButton";
import React from "react";

const Game3 = () => {
  return (
    <div>
      <div id={FlappyCss["flappy-cont"]}>
        <div id={FlappyCss["arcade-screen"]}>
          <canvas id={FlappyCss["flappy-canvas"]}></canvas>
          <div id={FlappyCss["game"]}></div>
          <div id={FlappyCss["block"]}>Block</div>
          <div id={FlappyCss["hole"]}></div>
          <div id={FlappyCss["charcter"]}></div>

          <PlayButton />
        </div>
      </div>
      <script src="flappy_game.js"></script>
    </div>
  );
};

export default Game3;

//next steps
