import  { CanvasView } from "../components/CanvasView";


const Game3 = () => {
    return (
        <body>
            <h1>Welcome to Flappy Bird!!</h1>
            <canvas id = "playField"></canvas>
        </body>
    )
};


function gameLoop (
    view: CanvasView
){}

function startGame(view: CanvasView) {}

const view = new CanvasView('#playField')

view.initPlayButton(startGame); 

export default Game3;