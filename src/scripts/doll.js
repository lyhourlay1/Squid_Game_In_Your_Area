class Doll{
    constructor(width, height, rotate=0, xPos, yPos) {
        this.width= width
        this.height = height
        this.rotate = rotate
        this.xPos = xPos
        this.yPos = yPos
    }
}

Doll.prototype.move = function(){
    this.rotate +=0.01
    this.xPos+=1
}

Doll.prototype.render= function (canvas) {
    canvas.translate(this.xPos, this.yPos)
    canvas.rotate(this.rotate)
    
}