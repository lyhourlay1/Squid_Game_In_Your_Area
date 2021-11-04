import Example from "./scripts/example"
import GameView from "./scripts/game_view"
import Game from "./scripts/game"
import Button from "./scripts/buttons"
import Timer from "./scripts/timer"

window.addEventListener('load', function (event) {
    
    //v.start(ctx)
    // console.log("webpack is working!")
    const main = document.getElementById("main")
    const exam = new Example(main)
    let timer = new Timer(main, 1.5)
    
    
    const canvas = document.getElementById("game-canvas")
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
    const canvasEl = canvas.getContext('2d');
    
    let imageRock = new Image()
    imageRock.addEventListener('load', function () {
        // console.log(imageRock.width) //1627
        // console.log(imageRock.height) //2101
    }, false)
    imageRock.src = "../pics/rock.png"
    
    
    const button = document.createElement("button")
    // button.innerHTML = '<img src="./pics.circle.png" />';
    const node = document.createTextNode("Play")
    button.appendChild(node)
    main.appendChild(button)

    const flexBox = document.getElementsByClassName("flex-container")
    const buttons = document.createElement("ul")
    flexBox[0].appendChild(buttons)
    const button1 = new Button(buttons, canvasEl, canvas, imageRock, timer)
    
    button.addEventListener("click", ()=> {
        button.style.display = 'block';
        button.style.display = 'none';
        timer.beginClock()
        canvasEl.clearRect(0,0, canvas.width, canvas.height)
        let game = new Game(timer);
        let v = new GameView(game,canvasEl, imageRock);
        v.start()
        window.interval = setInterval( () =>{ 
            document.getElementById("hwa").play() 
            v.addGreenLight()
            setTimeout(()=>{
                v.addFinishLine()
            },4500)
        }, 7000)
    })
})