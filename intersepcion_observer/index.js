//me traigo todos los boxes del HTML y lo pongo en una constante
const boxes = document.querySelectorAll(`.box`)

// el CALLBACK funciona como la impresora en consola
const callback =  (entries) => {
    entries.forEach (entry => { //por cada ENTRY que viene siendo por cada box
        if (entry.isIntersecting){ // entry.isIntersecting es el metodo de cada box que indica si se esta mostrando en pantalla
            console.log(entry.target.id, `is intersecting`) // que por cada ID vaya imprimiendo cual caja esta siendo interceptada 
        }
    })
}

const options = {
    // root: // elemento padre que es el view port
    // rootMargin: "200px" //es el margen de cada caja en nuestro caso 
    thershold: 0.5 // su valor es de 0 a 1, y corresponde al limite de division que queramos poner en cada caja en porcentaje
}

//INTERSECTION OBSERVER es un metodo constructor que recibe dos parametros (funcion, opcion) el segundo es opcional pero el primero es obligatorio. lo que hace es interseptar segun lo que se va mostrando en pantalla boleando el objeto que para nuestro caso son las cajas o boxes. OPTIONS es un objeto que recibe 3 propiedades (root,rootMargin, threshold) lo que pongamos en parametro de la opcion, es el limite desde donde va a interceptar 
const observer = new IntersectionObserver (callback, options)
// la constante boxes es un array de las cajas de HTML, entonces se le hace un FOREACH para cada caja y se le hace el objeto OBSERVER con su metodo OBSERVE de cada elemento
boxes.forEach (element => observer.observe(element))