const Game = require("./game")


function GameView(ctx) {
    this.game = new Game(ctx)
}


module.exports = GameView;