import Example from "./scripts/example"
import GameView from "./scripts/game_view"
import Game from "./scripts/game"
import Button from "./scripts/buttons"
import Instruction from "./scripts/instruction"
import Timer from "./scripts/timer"
window.addEventListener('DOMContentLoaded', function (event) {
    
    //v.start(ctx)
    // console.log("webpack is working!")
    const main = document.getElementById("main")
    let timer = new Timer(main, 1.5)
    document.body.style.backgroundColor = "black";
    
    
    
    const canvas = document.getElementById("game-canvas")
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
    const canvasEl = canvas.getContext('2d');
    
    let imageRock = new Image()
    imageRock.addEventListener('load', function () {
        // console.log(imageRock.width) //1627
        // console.log(imageRock.height) //2101
    }, false)
    imageRock.src = "pics/rock.png"
    
    let imageBody = new Image()
    imageBody.addEventListener('load', function () {
        // console.log(imageRock.width) //1627
        // console.log(imageRock.height) //2101
    }, false)
    imageBody.src = "pics/body.png"
    
    const flexLeft = document.getElementsByClassName("top-left-flex")
    
    const button = document.createElement("button")
    // button.innerHTML = '<img src="./pics.circle.png" />';
    const node = document.createTextNode("Play")
    button.classList.add("play-button")
    button.appendChild(node)
    const exam = new Example(flexLeft[0])
    flexLeft[0].appendChild(button)
    
    const flexBox = document.getElementsByClassName("flex-container")
    const buttons = document.createElement("ul")
    flexBox[0].appendChild(buttons)


    const button1= new Instruction(buttons)

    
    button.addEventListener("click", ()=> {
        button.style.display = 'block';
        button.style.display = 'none';
        timer.beginClock()
        canvasEl.clearRect(0,0, canvas.width, canvas.height)
        const game = new Game(timer);
        const v = new GameView(game,canvasEl, imageRock, imageBody);
        v.start()
        const buttonNav = new Button(buttons, canvasEl, canvas, imageRock, timer, v)
        setTimeout(()=>{
            document.getElementById("hwa").play()
            v.addGreenLight()
            setTimeout(()=>{
                v.addFinishLine()
            },4500)
        },1000)
        window.interval = setInterval( () =>{ 
            window.time = setTimeout(()=>{
                v.addFinishLine()
            },4500)
            document.getElementById("hwa").play() 
            v.addGreenLight()
        }, 7000)
    })
})
