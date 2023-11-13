import PlayButton from "../components/PlayButton";
import tetrisCss from "../styles/tetris.module.css";
import {Tetris} from "../Game_Script/tetris"
const runGame = () => {
    return (event: React.MouseEvent) => {
        event.preventDefault();
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
            let t = new Tetris(canvas)
            t.GameRun()
       }
}
const Game2 = () => {
    return (
        <div>
        <div id={tetrisCss["canvas-cont"]}>
            <h1 className={tetrisCss["game_title"]}>Tetris</h1>
            <canvas id={tetrisCss["game_2_canvas"]}></canvas>
        </div>
        <div onClick={runGame()}><PlayButton/></div>
        <div className={tetrisCss["rulesDropdown"]}>
            <button id={tetrisCss["rules"]}>↓ Show Instructions ↓</button>
            <div className ={tetrisCss["rulesContent"]}>
            </div>
        </div>
        </div>
    );
  };

export default Game2