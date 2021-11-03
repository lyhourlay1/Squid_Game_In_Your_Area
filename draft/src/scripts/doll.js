class Doll{
    constructor() {
    }
    
    draw(pos, canvas){
        let imageDoll = new Image()
        imageDoll.src = "../pics/doll.png"
        canvas.drawImage(imageDoll, pos[0], pos[1], imageDoll.width * 0.03, imageDoll.height * 0.03)
    }
}
export default Doll
