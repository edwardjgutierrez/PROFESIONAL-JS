class AutoPause {
    constructor (){
        this.threshold = 0.25,
        this.handlerIntercection = this.handlerIntercection.bind(this) //cuando llamemos al THIS de la intercection va a usar el THIS de AUTOPAUSE
    }  
    run (player) {
    this.player = player

    const observer = new IntersectionObserver (this.handlerIntercection, {threshold : this.threshold})   

    observer.observe (this.player.media)

    addEventListener ("visibilitychange", () =>{
           if(document.visibilityState === "visible"){
            this.player.play()
        } else {
            this.player.pause()
        }
    })


    }
    handlerIntercection(entries){

        const entry = entries [0];

        const isVisible =  entry.intersectionRatio >= this.threshold

        if (isVisible){
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause