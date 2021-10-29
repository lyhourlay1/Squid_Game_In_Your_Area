import Example from "./scripts/example"
import GameView from "./scripts/game_view"
import Game from "./scripts/game"

window.addEventListener('DOMContentLoaded', function (event) {
    
    //v.start(ctx)
    console.log("webpack is working!")
    const main = document.getElementById("main")
    const exam = new Example(main)

    const canvas = document.getElementById("game-canvas")
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
    const canvasEl = canvas.getContext('2d');
    
    const game = new Game();
    const v = new GameView(game,canvasEl);
})