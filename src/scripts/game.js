import GameView from "./game_view"
// import Modal from "./modal"
const endingPoint = 60


class Game {
    constructor(timer) {
        this.timer=timer
    }
}

Game.prototype.isOver = function (canvas, newPos, canvaRef) {
    if(this.win(newPos) || this.lose(canvas, canvaRef)){
        
        return true

    } 
    return false
}

Game.prototype.win = function (newPos) {
    if (newPos[1]< GameView.finishLine){
        // new Modal('you win')
        return true
    }
    return false
}
Game.prototype.lose = function (canvas, canvaRef) {
    if(canvas.getImageData(0,endingPoint+2,1,1).data[0] !== canvaRef[0] || this.timer.timeLeft<=0) {
        // console.log(canvas.getImageData(0,endingPoint+2,1,1).data[0])
        // new Modal('you lost')
        return true
    }
    return false
}




Game.DIM_X = 1000;
Game.DIM_Y = 600;


export default Game