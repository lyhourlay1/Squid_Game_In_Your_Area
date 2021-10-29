const Game = require("./Game")

class GameView {
    constructor(game, canvas) {
       this.game = game
    }

}
// GameView.prototype.start = function (ctx) {
//     setInterval(() => { this.game.moveObjects(ctx) }, 20)
// }

export default GameView