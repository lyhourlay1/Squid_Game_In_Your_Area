class Player {
    constructor(pos=[500,540]) {
        this.position = pos
        let bodyImage = new Image()
        bodyImage.src = "../pics/body.png"
        this.size = [bodyImage.width * 0.2, bodyImage.height * 0.2]
    }
    draw(pos,canvas) {
        let bodyImage = new Image()
        bodyImage.addEventListener('load', function () {
            canvas.drawImage(bodyImage, pos[0], pos[1], bodyImage.width * 0.2, bodyImage.height * 0.2)
        }, false)
        bodyImage.src = "../pics/body.png"
        //canvas.drawImage(bodyImage, pos[0], pos[1], bodyImage.width * 0.2, bodyImage.height * 0.2)
    }
}

export default Player