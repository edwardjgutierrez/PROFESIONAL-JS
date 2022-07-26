import MediaPlayer from "./mediaPlayer.js" //aca esta el archivo de el reproductos
import AutoPlay from "./plugins/AutoPlay.js" //aca esta el archivo donde esta el plugin AutoPlay  
import AutoPause from "./plugins/AutoPause.js" // aca esta el plugin que pasusa cuando damos scroll down y cuando cambiamos de pestañas (intercector obverver y cisibility change)

const video = document.querySelector ("video")
const playButton = document.querySelector("#playPause");
const muteButton = document.querySelector('#unmuteMute')

const player = new MediaPlayer ({// esta es la lista de pluguins, donde ponemos los que vamos creando
    el: video, 
    plugins: [new AutoPlay()], 
    plugins: [new AutoPause()]
});

playButton.onclick = () => player.togglePlay ()
muteButton.onclick = () => player.unmuteMute ()

if ("serviceWorker" in navigator){ //este IF detecta si el navegador soporta el SERVICE WORKERS
    navigator.serviceWorker.register ("/sw.js")
    .catch(error => {console.log (error.mensagge)})
}
