function MediaPlayer (config) {
        this.media = config.el
        this.plugins = config.plugins || [] // el ARRAY vacio funciona como valor predeterminado para que el codigo siga funcionando asi no tengamos plugins, es decir "X priguin o [] que significa nada"
        this._initPlugins(); // con este metodo se inicializan los plugins
    }    

MediaPlayer.prototype._initPlugins =  function () {
    this.plugins.forEach(plugin => {
    plugin.run(this) //THIS se refiere a MediaPlayer, es la instancia de MediaPlayer       
    }); //este es el prototipo del metodo this._initPlugins, donde dice que por cada pligin 
}
        MediaPlayer.prototype.play = function () {
            this.media.play()
        }

        MediaPlayer.prototype.pause = function () {
            this.media.pause()
        }

        MediaPlayer.prototype.mute = function () {
            this.media.muted =  true
        }

        MediaPlayer.prototype.unmute = function () {
            this.media.muted = false
        }

        MediaPlayer.prototype.togglePlay = function() {
        if (this.media.paused) {
             this.play();
        } else {
            this.pause();
          }
        };
        MediaPlayer.prototype.unmuteMute = function () { 
            this.media.muted ? this.media.muted = false : this.media.muted = true;
          };
  
export default MediaPlayer
