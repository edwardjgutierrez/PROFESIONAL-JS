// Sirve para controlar iteraciones. se usa con un asterisco despues de la palabra function, con esto ya podemos usar el YIELD, el cual funciona exactamente que un return solo que el YIELD no termina la funcion como si lo hace un RETURN


console.log (" ----------------- aca vamos a iterar una suma en ciclo  -----------------  ")
function* generatorFunction (){
    for (i = 0; i < 3; i++){
    yield console.log(i)
    // yield console.log("hola")
    // yield console.log("cara")
    // yield console.log("de")
    // yield console.log("bola")
    yield "21"
    yield "22"
    yield "23"
    yield "24"
    }
}

//para su ejecucion se debe pasar LA FUNCION GENERADORA a una constante
const generator = generatorFunction ()

// se ejecutia de la siguiente manera cuantasw veces queramos
generator.next()
generator.next()
generator.next()
generator.next()
generator.next()
    
//aca generamos un oibjeto para que se eimprime en consola los valores de NEXT el cual tiene valur y done, donde value son los valores de YIELD y done es el el valor de si ya termina la iteracion, si es que ponemos algun limite
console.log(generator.next())


//aca hacemos un SPREAD OPERATOR para convertir los datos de un ARRAY en argumentos normales, con eso cada iteracion se va guardando en un array
const numeros = [...generatorFunction()]

// aca imprimios el array con los datos
console.log(numeros)






console.log (" ----------------- aca vamos a iterar con WHILE TRUE la serie de fibonacci  -----------------  ")

function* fibonacci (){
    let a = 1
    let b = 1
    while (true){
        const nextNumber= a + b
        a = b
        b = nextNumber
        yield nextNumber
    }
}

const fibo = fibonacci()

console.log (fibo.next())
console.log (fibo.next())
console.log (fibo.next())
console.log (fibo.next())
console.log (fibo.next())
console.log (fibo.next())
console.log (fibo.next())