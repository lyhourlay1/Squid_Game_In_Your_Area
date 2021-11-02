const Game = require("./Game")
// const Pieces = require("./pieces")

import Player from "./player"
import Rock from "./rock"
const speed = 3
const canvaWidth = 1000
const canvaHeight =600
const startingPoint = 40


class GameView {
    constructor(game, canvas) {
        this.game = game
        this.canvas = canvas
        this.rocks =[]
        this.addFinishLine(canvas)
        this.addRocks(canvas)
        this.addDoll(canvas)
    }
}
GameView.finishLine = 30

GameView.prototype.keyHandler= function (player) {
    player.draw([500,540], this.canvas)
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown'){
            if (this.isValidMove([0, speed], player)) {
                this.move([0, speed], player)
            }
        }
        else if (event.key === 'ArrowUp') {
            if (this.isValidMove([0, -1*speed], player)){
                this.move([0, -1*speed], player)
            }
        } 
        else if (event.key === 'ArrowRight') {
            if(this.isValidMove([speed, 0],player)) this.move([speed,0],player)
        }
        else if (event.key === 'ArrowLeft') {
            if(this.isValidMove([-1*speed, 0], player)) this.move([-1 * speed,0],player)
        }
    })
}

GameView.prototype.isValidMove = function(dir, player){
    let newPos = [player.position[0] + dir[0], player.position[1] + dir[1]]
    //check if player new postion has passed the finished line
    if (this.game.isOver(this.canvas, newPos)){
        //replay button 
        console.log("replay")
    }
    else{
        let maxWidth= player.size[0]
        let maxHeight= player.size[1]
       
        if ((newPos[0] + maxWidth) > canvaWidth || (newPos[1] + maxHeight) > canvaHeight || newPos[0]< 0 || newPos[1]<0) return false
        for(let i=0; i< this.rocks.length; i++){
            maxHeight = player.size[1]
            let rockX = this.rocks[i].position[0]
            let rockY = this.rocks[i].position[1]
            if (rockY < player.position[1]) maxHeight = this.rocks[i].size[1] 
            if (Math.abs(newPos[1] - rockY) < maxHeight && Math.abs(newPos[0] - rockX) < maxWidth)  return false
        }
        return true
    }

}
GameView.prototype.move = function (dir, player) {
    this.canvas.clearRect(player.position[0], player.position[1], player.size[0] , player.size[1] )
    player.position = [player.position[0] + dir[0], player.position[1] + dir[1]]
    player.draw(player.position, this.canvas)
}

GameView.prototype.start = function (ctx) {
    //console.log(Player)
    const player = new Player([500,540])
    this.keyHandler(player)
}


GameView.prototype.addDoll = function (canvas) {
    let imageRock = new Image()
    imageRock.addEventListener('load', function () {
        canvas.drawImage(imageRock, 500, 0, imageRock.width * 0.03, imageRock.height * 0.03)
    }, false)
    imageRock.src = "../pics/doll.png"
}
GameView.prototype.addFinishLine = function (canvas) {
    canvas.beginPath();
    canvas.moveTo(0, GameView.finishLine);
    canvas.lineTo(1000, GameView.finishLine);
    canvas.stroke();
}
GameView.prototype.addRocks = function (canvas) {
    // generate 100  postions 
    let posArr = []
    let i=0
    while(i< 15){
        let x = 1000 * Math.random()
        let y = (600-100) * Math.random() + startingPoint
        let rock = new Rock([x,y])
        rock.draw([x,y] , this.canvas)
        this.rocks.push(rock)
        i++
    }
}
export default GameView