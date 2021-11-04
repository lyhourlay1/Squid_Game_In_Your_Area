//const Game = require("./Game")
// const Pieces = require("./pieces")
import Game from "./game"
import Player from "./player"
import Rock from "./rock"
const speed = 3
const canvaWidth = 1000
const canvaHeight = 600 
const startingPoint = 520
const endingPoint = 30


class GameView {
    constructor(game, canvas, image) {
        this.game = game
        this.canvas = canvas
        this.rocks =[]
        this.players =[]
        this.canvaRef
        this.addFinishLine(canvas)
        this.imageRock = image
        this.addRocks(canvas)
        this.addDoll(canvas)
        this.addPlayer()
    }
}
GameView.finishLine = 30

GameView.prototype.keyHandler= function (player) {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown'){
            if (this.isValidMove([0, speed], player)) {
                this.move([0, speed], player)
            }
        }
        else if (event.key === 'ArrowUp') {
            // console.log(this.isValidMove([0, speed], player))
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
    if (this.game.isOver(this.canvas, newPos, this.canvaRef)){
        //replay button 
        // clearInterval(window.interval)
        // this.canvas.clearRect(0,0, canvaWidth,canvaHeight)
        // this.rocks=[]
        // this.players[0].position = [500,540]
        window.location.reload()
        // console.log("replay")
    }
    else{
        let maxWidth= player.size[0]
        let maxHeight= player.size[1]
       
        if ((newPos[0] + maxWidth) > canvaWidth || (newPos[1] + maxHeight) > canvaHeight || newPos[0]< 0 || newPos[1]<0) return false
        
        // debugger
        for(let i=0; i< this.rocks.length; i++){
            maxHeight = player.size[1]
            let rockX = this.rocks[i].position[0]
            let rockY = this.rocks[i].position[1]
            if ((rockY + this.rocks[i].size[1]) < newPos[1]) maxHeight = this.rocks[i].size[1]
            if (Math.abs(newPos[1] - rockY) < (maxHeight+speed) && Math.abs(newPos[0] - rockX) < (maxWidth+speed))  return false
        }
        return true
    }

}
GameView.prototype.move = function (dir, player) {
    //this.canvas.clearRect(player.position[0], player.position[1], player.size[0]+5 , player.size[1]+5 )
    this.canvas.clearRect(0, endingPoint+player.size[1]-10, canvaWidth, canvaHeight)
    player.position = [player.position[0] + dir[0], player.position[1] + dir[1]]
    player.draw(player.position, this.canvas)
    // console.log(this.rocks)
    this.rocks.forEach(el=>{
        el.draw(el.position, this.canvas)
    })
    // this.addDoll(this.canvas)
}

GameView.prototype.start = function (ctx) {
    // console.log(this.players)
    this.keyHandler(this.players[0])
}
GameView.prototype.addPlayer= function() {
    let i = 0
    while (i < 1) {
        let player = new Player([500,540])
        player.draw([500,540], this.canvas)
        this.players.push(player)
        i++
    }}

GameView.prototype.addDoll = function (canvas) {
    let imageDoll = new Image()
    imageDoll.addEventListener('load', function () {
        canvas.drawImage(imageDoll, 500, 0, imageDoll.width * 0.022, imageDoll.height * 0.022)
    }, false)
    imageDoll.src = "pics/doll.png"
}
GameView.prototype.addFinishLine = function (canvas) {
    this.canvas.fillStyle = "#ff0000";
    this.canvas.fillRect(0, 0, canvaWidth, endingPoint)
    this.canvaRef = this.canvas.getImageData(0,0,1,1).data
    this.addDoll(this.canvas)
}
GameView.prototype.addRocks = function (canvas) {
    // generate 100  postions 
    let i=0
    while(i< 45){
        let x = canvaWidth * Math.random()
        let y = (endingPoint - (startingPoint)) * Math.random() + (startingPoint)
        let rock = new Rock([x,y], this.imageRock)
        rock.draw([x,y] , canvas)
        this.rocks.push(rock)
        i++
        // console.log(this.rocks)
    }
}
GameView.prototype.addGreenLight = function () {
    this.canvas.fillStyle = "#00FF00";
    this.canvas.fillRect(0,0,1000, endingPoint) 
    this.addDoll(this.canvas)
}
export default GameView