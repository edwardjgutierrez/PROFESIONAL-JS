let desarrollo = new Promise (function(resuelve, rechaza) { // en esta variable se guarda la NUEVA PROMESA la cual una f() que tiene como parametro (el resultado bueno y resultado malo)
  setTimeout(() => {
    const proyecto = "PRODUCTO ENTREGADO"
    let aleatorio =Math.random()
    console.log (aleatorio)
    if (aleatorio < 0.4)
    {
      resuelve (proyecto) // aca se pone que quiere recibor el resultado bueno
    }
    else {
      rechaza ("PRODUCTO ENTREGADO") // aca se pone que quiere recibor el resultado bueno
    }
  }, 1500);
})

desarrollo // se puede pones con estos saltos que se veran abajo como syntactic sugar, es mucho mas legible a que la linea sea de corrido
  .then((proyecto) => console.log(proyecto)) // con THEN se formula como se quere mostrar el reasultado BUENO, en este caso en con console.log
  .catch((error) => console.log (error)) // con CATCH se formula como se quere mostrar el reasultado MALO, en este caso en con console.log
  .finally(() => console.log ("PROCESO NO ENTREGADO")) // con FINALLY se puede decir que pare de reproducir algo, que pare de traer informacion o lo que sea que seal el proyecto, para este caso se representa con un console.log diciendo que la ejecucion del codigo termono
