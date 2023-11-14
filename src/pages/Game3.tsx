import FlappyCss from "../styles/flappybird.module.css";
import PlayButton from "../components/PlayButton";
import React from "react";

const Game3 = ()  => {
    return (
    
        <body>
            <div id="flappy-cont">
                <div id="arcade-screen">
                <canvas>
                    <div id={FlappyCss['game']}></div>
                    <div id= {FlappyCss['block']}>Block</div>
                    <div id = {FlappyCss["hole"]}></div>
                    <div id ={FlappyCss["charcter"]}></div>
                </canvas>
                <PlayButton/>
                </div>
            </div>
            <script src="flappy_game.js"></script>    
        </body>
    )
};


export default Game3;

//next steps