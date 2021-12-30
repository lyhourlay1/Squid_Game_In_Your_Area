class Modal{
    constructor(messages, timer){
        const main = document.getElementsByClassName("left-flex")
        const close = document.createElement("button")
        close.classList.add("close")
        const modal = document.createElement("div")
        modal.classList.add("modal")
        const message = document.createElement("div")
        message.classList.add("message")
        const closeNode =  document.createTextNode("Close")
        const messageNode = document.createTextNode(messages)

        message.append(messageNode)
        modal.append(message)
        main[0].append(modal)
        modal.append(close)
        close.append(closeNode)
        if( !timer.pause){
            // console.log(timer)
            timer.pause = true
            document.getElementById("hwa").pause()
            clearInterval(window.interval)
            clearTimeout(window.time)
            clearInterval(timer.timeInterval)
            // this.timeLeft = timer.timeLeft
            // this.v.addFinishLine()
        }
        close.addEventListener("click",()=> this.handleClickClose())
    }

    handleClickClose(){
        window.location.reload()

    }

    
}
export default Modal