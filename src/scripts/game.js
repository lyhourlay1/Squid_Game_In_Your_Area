import GameView from "./game_view"

class Game {
    constructor() {
  
    }
}

Game.prototype.isOver = function (canvas, newPos) {
    if(this.win(newPos)) return true
    return false
}

Game.prototype.win = function (newPos) {
    if (newPos[1]< GameView.finishLine){
        return true
    }
    return false
}
Game.prototype.lose = function (params) {
    return false
}




Game.DIM_X = 1000;
Game.DIM_Y = 600;


export default Game