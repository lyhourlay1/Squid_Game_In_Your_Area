class Example {
    constructor(ele){
        this.ele = ele;
        this.ele.innerHTML = "<h1> Squid Game!</h1>"
        this.ele.addEventListener("click", ()=> this.handleClick())
    }
    handleClick(){
        this.ele.children[0].innerText = "Red Light Green Light!"
    }
}
export default Example