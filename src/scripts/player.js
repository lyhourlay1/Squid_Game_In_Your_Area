class Player {
    constructor(pos) {
        this.position = pos
        let bodyImage = new Image()
        bodyImage.src = "../pics/body.png"
        this.size = [bodyImage.width * 0.2, bodyImage.height * 0.2]
    }
}
Player.prototype.draw =function(pos,canvas) {
    let imageRock = new Image()
    imageRock.addEventListener('load', function () {
        canvas.drawImage(imageRock, pos[0], pos[1], imageRock.width * 0.2, imageRock.height * 0.2)
    }, false)
    imageRock.src = "../pics/body.png"
}

export default Player