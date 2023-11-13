import FlappyCss from "../styles/flappybird.module.css";
import PlayButton from "../components/PlayButton";
const Game3 = ()  => {
    return (
        
        <body>
            <canvas>
            <div className={FlappyCss['game']}></div>
            <div className= {FlappyCss['block']}>Block</div>
            <div className = {FlappyCss["hole"]}></div>
            <div className ={FlappyCss["charcter"]}></div>
            </canvas>
            <PlayButton  />
            <script src="flappy_game.js"></script>
        </body>
    )
};


export default Game3;

//next steps