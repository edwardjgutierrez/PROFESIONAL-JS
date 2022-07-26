//se genera un objeto madre
const persona ={
    nombre : "",
    apellido: "",
    edad: 0
}

//aca generamos el MANEJADOR donde ponemos los parametros para generar mas objetos o HANDLER tambien le dicen trampas
const manejador = {
    set (obj,prop,valor){        
        
        if (Object.keys(obj).indexOf(prop)===-1) // tambein se puede poner resticciones, aca formulamos mla validacion para que no ingrese un parametro adicional al que se tiene en el objeto madre
        {console.error(" ´" + prop + "´ " + " No se puede ingresar un parametro adicional")}
        else {
        obj[prop]=valor // aca lo que digo es "al OBJETO (obj) por cada PROPIEDAD [prop] dele VALOR (valor)", con esto se puede dar valor a cada propiedad como se va a indicar despues
         }
    }
}

//aca creamos nuestro PROXY el cual va a guardar lso valores
const edw = new Proxy (persona, manejador)
//asi se le da el valor al objeto madre desde afuera
edw.nombre = "Edward",
edw.apellido = "Gutierrez",
edw.edad = 31,
edw.altura = 1.68,


console.log(edw)

const jua = new Proxy (persona, manejador)

jua.nombre = "Juana"
jua.apellido = "De Arco"
jua.edad = 28    
jua.pais = "Francia"


console.log(persona)