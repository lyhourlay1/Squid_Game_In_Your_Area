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
        src = "<p>Objective: Walk across the board to get to the finish line(green or red space). You can only walk when the music is playing or when green light is signaliing</p>"
        this.addImages(src)
        src = "<p>Instruction: 1. Click Play button to start the game 2. Circle Button is for pause 3. Triangle button is for continue after pause 4. Square button is for end game 5. Press up, down, right, and left arrrow to navigate </p> "
        this.addImages(src)

        src = '<a href="https://www.linkedin.com/in/lyhour/"><img id="linkedin" src="./pics/linkedin.png" /></a>';
        this.addImages(src)
        src = '<a href="https://github.com/lyhourlay1"><img id="github" src="./pics/github.png" /></a>';
        this.addImages(src)

        src ='<h3> Designed by Lyhour Lay</h3>'
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