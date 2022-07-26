function AutoPlay (){}

AutoPlay.prototype.run = function (player) {
    player.mute(), // se reproduce automaticamente al abrir la pantalla
    player.play() // para que el DOM no ponga problema, se debe reproducir en mute
}
export default AutoPlay