import GameView from "./game_view"
import Game from "./game"
class Button {
    constructor(ele, canvasEl, canvas, imageRock) {
        this.ele = ele;
        let src = '<img id="pause" src="./pics/circle.png" />';
        this.addImages(src)
        src = '<img id="continue" src="./pics/triangle.png" />';
        this.addImages(src)
        src = '<img id="end" src="./pics/square.png" />';
        this.addImages(src)

        document.getElementById('end').addEventListener("click",()=> this.handleClickEnd())
        document.getElementById('pause').addEventListener("click",()=> this.handleClickEnd())
    }
    addImages(src){
        const list = document.createElement("li")
        list.innerHTML = src;
        this.ele.appendChild(list)
    }

    handleClickEnd() {
        window.location.reload()  
    }

    handleClickPause(){

    }

    handleClickContinue(){
        
    }
}
export default Button