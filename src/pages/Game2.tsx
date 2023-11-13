import PlayButton from "../components/PlayButton";
import tetrisCss from "../styles/tetris.module.css";

const Game2 = () => {
  return (
    <div id={tetrisCss["tetris-cont"]}>
      <div id={tetrisCss["canvas-cont"]}>
        <canvas id={tetrisCss["game_2_canvas"]}></canvas>
        <PlayButton />
      </div>
    </div>
  );
};

export default Game2;
