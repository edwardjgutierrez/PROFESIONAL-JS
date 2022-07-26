const urlBulbasaur = `https://pokeapi.co/api/v2/pokemon/1/`

fetch (urlBulbasaur)// 
//RESPONSE es la interfas de la AIP FETCH
    .then (response => response.text ()) //el servidor nos envia una respuesta con la solicitud del FETCH y la pasamos a .json hecho por objetos y arrays, ya que los datos del URL vienen en un formato no legible facilmente
    .then (data =>{
        console.log (data) 
    }) // aca imprimo la informacion que extraje anteriormente en .json
    .catch (err => console.log (err))