const Game = require("./Game")
// const Pieces = require("./pieces")

const speed = 3
import Player from "./player"
class GameView {
    constructor(game, canvas) {
       this.game = game
       this.canvas = canvas
       this.rocks =[]
       this.addFinishLine(canvas)
       this.addRocks(canvas)
       this.addDoll(canvas)
       
       //this.addPlayer(canvas)
       //this.start()
    }
}

GameView.prototype.keyHandler= function (player) {
    player.draw([500,540], this.canvas)
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown'){
            this.move([0, speed], player)
        }
        else if (event.key === 'ArrowUp') {
            this.move([0,-1*speed], player)
        }
        else if (event.key === 'ArrowRight') {
            this.move([1,0],player)
        }
        else if (event.key === 'ArrowLeft') {
            this.move([-1,0],player)
        }
    })
}

GameView.prototype.isValidMove = function(player, ){

}

GameView.prototype.move = function (dir, player) {
    player.position = [player.position[0]+ dir[0], player.position[1] + dir[1]]
    this.canvas.clearRect(player.position[0], player.position[1], player.size[0] - dir[0], player.size[1] - dir[1])
    player.draw(player.position, this.canvas)
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
    canvas.moveTo(0, 30);
    canvas.lineTo(1000, 30);
    canvas.stroke();
}
GameView.prototype.addRocks = function (canvas) {
    // generate 100  postions 
    let posArr = []
    let i=0
    while(i< 20){
        let x = 1000 * Math.random()
        let y = (600-100) * Math.random() + 30
        let imageRock = new Image()
        imageRock.addEventListener('load', function () {
            canvas.drawImage(imageRock, x,y, imageRock.width*0.01, imageRock.height*0.01)
        }, false)
        imageRock.src ="../pics/rock.png"
        i++
    }
}
GameView.prototype.start = function (ctx) {
    //console.log(Player)
    const player = new Player([500,540])
    this.keyHandler(player)

}

export default GameView