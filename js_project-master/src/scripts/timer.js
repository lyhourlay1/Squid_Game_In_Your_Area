
class Timer {
    constructor(ele, time){
        this.clockEl = document.createElement("div")
        ele.appendChild(this.clockEl)
        this.time = time * 60 * 1000
        //this.beginClock()
        this.pause = true
        this.timeInterval
        this.timeLeft = this.time
    }
    beginClock(){
        this.pause= false
        let endTime = new Date(Date.parse(new Date()) + this.timeLeft)
        this.updateClock(endTime)
        this.timeInterval =setInterval(()=>this.updateClock(endTime), 1000)
    }
    
    updateClock(endTime){
        this.timeLeft = Date.parse(endTime)- Date.parse(new Date())
        //console.log(timeLeft)
        var minLeft = Math.floor((this.timeLeft / 1000 / 60) % 60);
        let secLeft = Math.floor((this.timeLeft / 1000) % 60);
        this.clockEl.innerHTML = minLeft +": " + secLeft
        if (this.timeLeft <= 0) clearInterval(this.timeInterval)
    }
}
export default Timer