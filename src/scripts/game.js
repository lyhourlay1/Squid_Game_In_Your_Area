
class Game {
    constructor() {
  
    }
}

Game.prototype.isOver = function () {
    if(this.win || this.lose) console.log('Game Over')
    
}

Game.prototype.win = function (params) {
    
}
Game.prototype.lose = function (params) {
    
}




Game.DIM_X = 1000;
Game.DIM_Y = 600;


export default Game