//------------------------------------------------------------ TIPADO, TIPOS BASICOS

// BOOLEAN - si quertemos dar valor de string a un booleano ya declarado como a continuacion, TS nos va a arrojar un error, cosa que no haria JS
let muted : boolean = true;
muted = false;
console.log(muted)




//NUMEROS - si ponemos algun numero en estring, TS nos indica que la variables "resulado" no puede ser ejecutada
let age= 6;
let numerador : number = 42;
let denominador : number = age;
let resultado = numerador/denominador;
console.log(resultado);





//STRINGS
let nombre: string = "Edward";
let saludo = "hola";
console.log(saludo + " " +  nombre);




//ARRAY o ARREGLO - se declara primero el tipo de dato y despues si es o no arreglo con [] 
let people: string [] = [];
people = ["Isabell", "Nicole", "Raul"];
// si bien, TS nos indica que no podemos poner numeros en un array de tipo strings, a la larga nos deja incluir
people.push (1000); 
console.log(people);
//asi se delcara una variable hibrida de strings y numeros en este caso
let peopleAndNumbers: Array <string | number> = [];
peopleAndNumbers.push ("Edward");
peopleAndNumbers.push (1000);
console.log(peopleAndNumbers);





// ENUMS es un conjunto de constantes, es propio de TS. Se debe poner el string si queremos llamar el string, de lo contrario solo nos va a imprimir su posicion (0, 1, 2, etc). SI uno tiene dato strings, todos deben ser strings
enum Colors {
    rojo = "Red",
    verde= "Green",
    azul= "Blue"
}
let colorFavorito: Colors = Colors.rojo
console.log ("mi color favorito es el " + colorFavorito)




// ANY es cuando no sabemos que variable es
let comodin: any = "joker"
comodin = {type: "Wildcard"}
console.log(comodin)




//OBJECT es parecido al ENUM, solo que si o si las variables que estan dentro del objeto deben tener un contenido, para este caso es "Wildcard"
let someObjects: object = {
    type: "Wildcard"
};
console.log(someObjects);


//--------------------------------------------------------------------------FUNCIONES 

//en los parametros debemos poner que tipo de dato se debe ingresar (NUMBER), por fuera tambien ponemos el dato que nos debe regresar (NUMBER)
function add (a: number, b: number): number {
    return a+b;
};
let suma=  add (2,3);
console.log("la funcion nos da " + suma);

function createrAdder (a: number): (number) => number {
    return function (b: number){
        return b-a
    };
};
const addFour = createrAdder (4); //aca esta cogiendo el valor de A
const fourPlus6 = addFour (6); //aca esta cogiendo el valor de B
console.log("La resta de esta funcion compuesta es de " + fourPlus6);
//al poner el signo de interrogacion en LASTNAME, damos esa variable como opcional, con esto si solo sabemos el nombre y no el apellido, la funbcion no se va a joder
function fullName (fisrtName: string, lastName?: string){
    return `${fisrtName} ${lastName}`;
}

const edward = fullName ("Edward", "Gutierrez")
const maria = fullName ("Maria")
console.log ("Hola " + edward)
console.log ("Hola " + maria)


//--------------------------------------------------------------------------INTERFACES
// nos permite declarar el tipado de un objeto con el fin de evitar errores con el autocompletado, como si heredara la estructura y su tipado, donde rect hereda la estructura 
//de Rectangulo. Simepre delcarar el objeto INTERFACE para crearla

enum Color {
    rojo = "Red",
    verde= "Green",
    azul= "Blue"
}

interface Rectangulo {
    ancho: Number,
    alto: Number
    color: string
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color?: Color.rojo
}

function area (r: Rectangulo): number{
    return r.alto * r.ancho;
}

rect.toString = function(){
    return this.color ? `de color ${this.color}` : `sin color`
}
const areaRectangulo = area(rect)
console.log(`el area del rectangulo es de ${areaRectangulo} y es ${rect.toString()}`)