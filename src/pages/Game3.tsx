import  { CanvasView } from "../components/CanvasView";
import PlayButton from "../components/PlayButton";
import {Tube} from './sprites/Tube'


const Game3 = () => {
    return (
        <body>
            <div id="score"></div>
            <h1>Welcome to Flappy Bird!!</h1>
            <PlayButton  />
            <canvas id = "playField"></canvas>
        </body>
    )
};

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView){
    view.drawInfo
    gameOver = false;
}


function gameLoop (
    view: CanvasView,
    tubes: Tube[],
){}

function startGame(view: CanvasView) {}

const view = new CanvasView('#playField')

view.initPlayButton(startGame); 

export default Game3;

//next steps