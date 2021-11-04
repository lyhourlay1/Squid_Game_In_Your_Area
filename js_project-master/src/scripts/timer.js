
class Timer {
    constructor(ele, time){
        this.clockEl = document.createElement("div")
        ele.appendChild(this.clockEl)
        this.time = time
        //this.beginClock()
    }
    beginClock(){
        let endTime = new Date(Date.parse(new Date()) + this.time * 60 * 1000)
        this.updateClock(endTime)
        const timeInterval =setInterval(()=>this.updateClock(endTime), 1000)
    }
    
    updateClock(endTime){
        let timeLeft = Date.parse(endTime)- Date.parse(new Date())
        console.log(timeLeft)
        var minLeft = Math.floor((timeLeft / 1000 / 60) % 60);
        let secLeft = Math.floor((timeLeft / 1000) % 60);
        this.clockEl.innerHTML = minLeft +": " + secLeft
        if (timeLeft <= 0) clearInterval(timeInterval)
    }

    pause(){

    }
    resume(){

    }
}
export default Timer