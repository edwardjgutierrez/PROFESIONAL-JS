const VERSION = "v1"

self.addEventListener ('install', event => { // este es el EVENTO para guardar un PRECACHE con los documentos para reproducir el media del conejo
    event.waitUntil (precache())
})





self.addEventListener ("fetch", event => {
    const request = event.request
    //get
    if (request.method != GET){
        return;
    }
    //buscar en cache
    event.respondWhit (cachedResponse(request))
})


async function precache (){
    const cache = caches.open (VERSION) // aca se crea la version del cache que queremos, le damos nombre de "v1" si queremos
    ;(await cache).addAll ([//estas son las direcciones de nuestros archivos cache
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/plugins/AutoPlay.js',
        '/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cachedResponse (request){
    const cache = await caches.open (VERSION)
    const response = await cache.match (request)
    return response || fetch (request)
}