import GameView from "./game_view"
const colorSpace = 'srgb'


class Game {
    constructor() {
        // this.ele = ele
        // this.ele.innerHTML = "<button> Play </button>"
        // this.ele.addElementListener("click", ()=> this.handleClick())
    }
    // handleClick(){
        
    // }
}

Game.prototype.isOver = function (canvas, newPos, canvaRef) {
    if(this.win(newPos) || this.lose(canvas, canvaRef)){
        
        return true

    } 
    return false
}

Game.prototype.win = function (newPos) {
    if (newPos[1]< GameView.finishLine){
        alert('you win')
        return true
    }
    return false
}
Game.prototype.lose = function (canvas, canvaRef) {
    if(canvas.getImageData(0,0,1,1).data[0] === canvaRef[0]) {
        alert('you lost')
        return true
    }
    return false
}




Game.DIM_X = 1000;
Game.DIM_Y = 600;


export default Game