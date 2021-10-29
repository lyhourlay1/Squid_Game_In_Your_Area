const GameView = require("./game_view");
const Game = require("./game");


window.Game = Game;
window.GameView = GameView;

window.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext('2d');
    const v = new GameView(ctx);
    v.start(ctx)
})
console.log("webpack is working!")
console.log("test is working!")