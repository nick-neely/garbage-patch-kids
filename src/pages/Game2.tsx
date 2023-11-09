import tetrisCss from "../styles/game_2_style.css"

const Game2 = () => {
    return (
        <div id="canvas-cont">
            <h1 class="game_title">Tetris</h1>
            <canvas id="game_2_canvas"></canvas>
        </div>
        <ul>
            <li class="game-menu"><button>Play Game</button></li>
            <li class="game-menu"><button>Full Screen</button></li>
        </ul>

        <div class="rulesDropdown">
            <button id="rules">↓ Show Instructions ↓</button>
            <div class="rulesContent">
        
            </div>
        </div>
    );
  };

export default Game2