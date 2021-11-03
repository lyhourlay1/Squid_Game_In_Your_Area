import Example from "./scripts/example"
import GameView from "./scripts/game_view"
import Game from "./scripts/game"

window.addEventListener('DOMContentLoaded', function (event) {
    
    //v.start(ctx)
    console.log("webpack is working!")
    const main = document.getElementById("main")
    const exam = new Example(main)
    
    
    const canvas = document.getElementById("game-canvas")
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;
    const canvasEl = canvas.getContext('2d');
    
    
    
    
    const button = document.createElement("button")
    const node = document.createTextNode("Play")
    button.appendChild(node)
    main.appendChild(button)
    
    button.addEventListener("click", ()=> {
        canvasEl.clearRect(0,0, canvas.width, canvas.height)
        let game = new Game();
        let v = new GameView(game,canvasEl);
        v.start()
        setInterval( () =>{ 
            //document.getElementById("hwa").play() 
            v.addGreenLight()
            setTimeout(()=>{
                v.addFinishLine()
            },4500)
        }, 7000)
    })
})