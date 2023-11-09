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
          className={[SnakeCss["snake-canvas"], SnakeCss["ArcadesScreen"]].join(
            " "
          )}
        ></canvas>
      </div>
    </div>
  );
};
export default Game1;
