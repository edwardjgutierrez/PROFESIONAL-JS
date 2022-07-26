const video = document.getElementById ("video")



// EN ESTE CASO SE MUESTRA EL PASO A PASO MAS DETALLADO DE COMO FUNCIONA

// addEventListener ("visibilitychange", () =>{
//     console.log (document.visibilityState)
//     if(document.visibilityState === "visible"){
//         console.log("PLAY")
//         video.play()
//     } else {
//         console.log("PAUSE")
//         video.pause()
//     }
// })


// ACA ESTA CON UNA OPERACION CONDICIONAL TERNARIA 

addEventListener ("visibilitychange", () => document.visibilityState === "visible" ? video.play() : video.pause())