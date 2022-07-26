class AutoPause { //cuando llamemos al THIS de la intercection va a usar el THIS de AUTOPAUSE
    constructor (){
      this.threshold = 0.25;
      this.handleIntersection = this.handleIntersection.bind(this);
      this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }  
    run (player) {
    this.player = player
    const observer = new IntersectionObserver (this.handlerIntercection, {threshold : this.threshold})   

    observer.observe (this.player.media)

    document.addEventListener ('visibilitychange', this.handleVisibilityChange)
    }

    handleIntersection(entries) {
        const entry = entries[0];
    
        const isVisible = entry.intersectionRatio >= this.threshold;
    
        if (isVisible) {
          this.player.play();
        } else {
          this.player.pause();
        }
      }
    
    handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';
        if (isVisible) {
          this.player.play();
        } else {
          this.player.pause();
        }
      }
    }
    
    export default AutoPause;
    