import tetrisCss from "../styles/tetris.module.css"

const Game2 = () => {
    return (
        <body>
        <div id={tetrisCss["canvas-cont"]}>
            <h1 className={tetrisCss["game_title"]}>Tetris</h1>
            <canvas id={tetrisCss["game_2_canvas"]}></canvas>
        </div>
        <ul>
            <li className={tetrisCss["game-menu"]}><button>Play Game</button></li>
            <li className="game-menu"><button>Full Screen</button></li>
        </ul>

        <div className={tetrisCss["rulesDropdown"]}>
            <button id={tetrisCss["rules"]}>↓ Show Instructions ↓</button>
            <div className ={tetrisCss["rulesContent"]}>
        
            </div>
        </div>
        </body>
    );
  };

export default Game2