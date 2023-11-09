
import PlayButton from "../components/PlayButton";
import SnakeCss from "../styles/snake.module.css";

const Game1 = () => {
  return (
    <div className={SnakeCss["snake-container"]}>
      <div>
        <img
          src="images/snekbanner.png"
          alt="snekbanner"
          className={SnakeCss["snake-img"]}
        />
      </div>
      <div className={SnakeCss["ArcadeScreen"]}>
        <canvas
          className={`${SnakeCss["snake-canvas"]} ${SnakeCss["ArcadeScreen"]}`}
        ></canvas>
        <PlayButton />
      </div>
    </div>
  );
};
export default Game1;
