
const bodyWidth = 117
const bodyHeight = 256
class Player {
    constructor(pos=[500,540]) {
        this.position = pos
        let bodyImage = new Image()
        bodyImage.addEventListener('load', function () {
        //    console.log(bodyImage.width) // 117
        //    console.log(bodyImage.height) // 256
        }, false)
        bodyImage.src = "../pics/body.png"
        this.size = [bodyWidth * 0.2, bodyHeight* 0.2]
    }
}
Player.prototype.draw =function(pos,canvas) {
    let bodyImage = new Image()
    bodyImage.addEventListener('load', function () {
        canvas.drawImage(bodyImage, pos[0], pos[1], bodyImage.width * 0.2, bodyImage.height * 0.2)
    }, false)
    bodyImage.src = "../pics/body.png"
}

export default Player