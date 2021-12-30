import GameView from "./game_view"
import Game from "./game"
class Button {
    constructor(ele, canvasEl, canvas, imageRock, timer, v) {
        // this.ele = ele;
        // let src = '<img id="pause" src="./pics/circle.png" />';
        // this.addImages(src)
        // src = '<img id="continue" src="./pics/triangle.png" />';
        // this.addImages(src)
        // src = '<img id="end" src="./pics/square.png" />';
        // this.addImages(src)
        // src = "<div> Objective: Walk across the board to get to the finish line(green or red space). You can only walk when the music is playing or when green light is signaliing</div>"
        // this.addImages(src)
        // src = "<div>Instruction: Use Chrome for full user experience 1. Click Play button to start the game 2. Circle Button is for pause 3. Triangle button is for continue after pause 4. Square button is for end game 5. Press up, down, right, and left arrrow to navigate </div> "
        // this.addImages(src)

        // src = '<a href="https://www.linkedin.com/in/lyhour/"><img id="linkedin" src="./pics/linkedin.png" /></a>';
        // this.addImages(src)
        // src = '<a href="https://github.com/lyhourlay1"><img id="github" src="./pics/github-logo.png" /></a>';
        // this.addImages(src)

        // src ='<h3> Designed by Lyhour Lay</h3>'
        // this.addImages(src)


        this.timeLeft= timer.timeLeft
        this.v = v

        document.getElementById('end').addEventListener("click",()=> this.handleClickEnd())
        document.getElementById('pause').addEventListener("click",()=> this.handleClickPause(timer))
        document.getElementById('continue').addEventListener("click",()=> this.handleClickContinue(timer))

    }
    addImages(src){
        const list = document.createElement("li")
        list.classList.add('right-side-components');
        list.innerHTML = src;
        this.ele.appendChild(list)
    }

    handleClickEnd() {
        window.location.reload()  
    }

    handleClickPause(timer){
        const display = document.getElementById("pause-canvas")
        display.style.display = "flex"
        if( !timer.pause){
            // console.log(timer)
            timer.pause = true
            document.getElementById("hwa").pause()
            clearInterval(window.interval)
            clearTimeout(window.time)
            clearInterval(timer.timeInterval)
            this.timeLeft = timer.timeLeft
            this.v.addFinishLine()
        }
        // const canvas = document.getElementById("pause-canvas")
        // canvas.classList.add("pause");

        // canvas.width = Game.DIM_X;
        // canvas.height = Game.DIM_Y;
        // const canvasEl = canvas.getContext('2d');
        // canvasEl.clearRect(0,0, canvas.width, canvas.height)

    }

    handleClickContinue(timer){
        const displayCont = document.getElementById("pause-canvas")
        displayCont.style.display = "none"
        //console.log(timer.timeLeft)
        if(timer.pause){
            timer.pause = false
            // timer.timeLeft = this.timeLeft
            timer.beginClock()
            
            setTimeout(()=>{
                document.getElementById("hwa").load()
                document.getElementById("hwa").play()
                this.v.addGreenLight()
                setTimeout(()=>{
                    this.v.addFinishLine()
                },4500)
            },1000)
            window.interval = setInterval( () =>{ 
                window.time = setTimeout(()=>{
                    this.v.addFinishLine()
                },4500)
                document.getElementById("hwa").play() 
                this.v.addGreenLight()
            }, 7000)
        }
    }
}
export default Button