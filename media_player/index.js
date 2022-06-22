import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js" //aca esta el plugin

const video = document.querySelector ("video")
const playButton = document.querySelector("#playPause");
const muteButton = document.querySelector('#unmuteMute')

const player = new MediaPlayer ({el: video, plugins: [new AutoPlay()]});

playButton.onclick = () => player.togglePlay ()
muteButton.onclick = () => player.unmuteMute ()