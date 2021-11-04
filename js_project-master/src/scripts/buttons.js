import GameView from "./game_view"
import Game from "./game"
class Button {
    constructor(ele, canvasEl, canvas, imageRock, timer) {
        this.ele = ele;
        let src = '<img id="pause" src="./pics/circle.png" />';
        this.addImages(src)
        src = '<img id="continue" src="./pics/triangle.png" />';
        this.addImages(src)
        src = '<img id="end" src="./pics/square.png" />';
        this.addImages(src)


        this.timeLeft= timer.timeLeft

        document.getElementById('end').addEventListener("click",()=> this.handleClickEnd())
        document.getElementById('pause').addEventListener("click",()=> this.handleClickPause(timer))
        document.getElementById('continue').addEventListener("click",()=> this.handleClickContinue(timer))
    }
    addImages(src){
        const list = document.createElement("li")
        list.innerHTML = src;
        this.ele.appendChild(list)
    }

    handleClickEnd() {
        window.location.reload()  
    }

    handleClickPause(timer){
        if( !timer.pause){
            console.log(timer)
            timer.pause = true
            clearInterval(timer.timeInterval)
            this.timeLeft = timer.timeLeft
            console.log(timer)
        }
    }

    handleClickContinue(timer){
        
        console.log(timer.timeLeft)
        if(timer.pause){
            timer.pause = false
            // timer.timeLeft = this.timeLeft
            timer.beginClock()
        }

    }
}
export default Button