import GameView from "./game_view"
import Game from "./game"
class Instruction {
    constructor(ele) {
        this.ele = ele;
        let src = '<img id="pause" src="./pics/circle.png" />';
        this.addImages(src)
        src = '<img id="continue" src="./pics/triangle.png" />';
        this.addImages(src)
        this.addButtonsOnPause(src)

        src = '<img id="end" src="./pics/square.png" />';
        this.addImages(src)
        this.addButtonsOnPause(src)

        src = "<div> Objective: Walk across the board to get to the finish line(green or red space). You can only walk when the music is playing or when green light is signaliing</div>"
        this.addImages(src)
        src = "<div>Instruction: Use Chrome for full user experience 1. Click Play button to start the game 2. Circle Button is for pause 3. Triangle button is for continue after pause 4. Square button is for end game 5. Press up, down, right, and left arrrow to navigate </div> "
        this.addImages(src)

        src = '<a href="https://www.linkedin.com/in/lyhour/"><img id="linkedin" src="./pics/linkedin.png" /></a>';
        this.addImages(src)
        src = '<a href="https://github.com/lyhourlay1"><img id="github" src="./pics/github-logo.png" /></a>';
        this.addImages(src)

        src ='<h3> Designed by Lyhour Lay</h3>'
        this.addImages(src)

    }
    addImages(src){
        const list = document.createElement("li")
        list.classList.add('right-side-components');
        list.innerHTML = src;
        this.ele.appendChild(list)
    }

    addButtonsOnPause(src){
        const pauseCanvas = document.getElementById("pause-canvas")
        const pauseEle = document.createElement("div")
        pauseEle.innerHTML = src;
        pauseCanvas.appendChild(pauseEle)
    }
}
export default Instruction