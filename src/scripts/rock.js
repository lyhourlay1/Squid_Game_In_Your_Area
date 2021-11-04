const rockWidth = 1627
const rockHeight = 2101

class Rock {
    constructor(pos, image){
        this.position = pos
        this.image = image
        // let imageRock = new Image()
        // imageRock.addEventListener('load', function () {
        //     // console.log(imageRock.width) //1627
        //     // console.log(imageRock.height) //2101
        // }, false)
        // imageRock.src = "../pics/rock.png"        
        this.size = [rockWidth * 0.01, rockHeight* 0.01]
    }

}
Rock.prototype.draw = function (pos, canvas ) {
    // let imageRock = new Image()
    // imageRock.addEventListener('load', function () {
    //     canvas.drawImage(imageRock, pos[0], pos[1], imageRock.width * 0.01, imageRock.height * 0.01)
    // }, false)
    // imageRock.src = "../pics/rock.png"
    // console.log(this.imageRock)
    canvas.drawImage(this.image, pos[0], pos[1], rockWidth * 0.01, rockHeight * 0.01)

}
export default Rock