class Rock {
    constructor(pos){
        this.position = pos
        let imageRock = new Image()
        imageRock.src = "../pics/rock.png"
        this.size = [imageRock.width * 0.01, imageRock.height * 0.01]
    }

    draw(pos, canvas){
        let imageRock = new Image()
        imageRock.addEventListener('load', function () {
            canvas.drawImage(imageRock, pos[0], pos[1], imageRock.width * 0.01, imageRock.height * 0.01)
        }, false)

        imageRock.src = "../pics/rock.png"
        //canvas.drawImage(imageRock, pos[0], pos[1], imageRock.width * 0.01, imageRock.height * 0.01)
    }
}
export default Rock