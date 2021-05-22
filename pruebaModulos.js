// Importante ver que las carpetas sean correctas para evitar fallas en el codigo
//("../") sirve para volver a una carpeta anterior                                              

let sumar = require("./Operaciones/sumar"); 
let restar = require("./Operaciones/restar");
let multiplicar = require("./Operaciones/multiplicar");
let dividir = require("./Operaciones/dividir");


let fs = require("fs"); 
// asi requerimos el modulo file system
// modulo nativo de node, es necesario requerirlo para poder usar sus funciones
// para requerirlo ponemos el nombre del modulo pero como string dentro de los parentesis




let process = require("process"); 
// requerimos el objeto process
// modulo nativo de node, es necesario requerirlo para poder usar sus funciones
// para requerirlo ponemos el nombre del modulo pero como string dentro de los parentesis
// PROCESS es un objeto que tiene varios metodos y para acceder a las propiedades del objeto
// es necesario poner un punto al final de process, ejemplo:
// let operacion = process.argv





// process.argv ES UN ARRAY que lee todo lo que le pasemos por consola 
// y me lo devuelve como si fuera un array de elementos
// en este caso usamos argv para poder pasar datos por consola.



let operacion = process.argv[2]     
//DECLARO UNA VARIABLE DONDE VOY A GUARDAR LO QUE ME DEVUELVE EL METODO
//(el string del valor que ingrese a la posicion 2 de la consola)



//pasamos la operacion "sumar" por terminal



// declaro una variable donde voy a guardar lo que me devuelve 
// en esta variable guardo el valor recibido por consola en la posicion 3
// en este caso vamos a guardar un numero recibido por terminal
let numero1 = Number(process.argv[3])   
let numero2 = Number(process.argv[4])   


//  0         1              2          3         4
// node  calculadora.js  operacion   numero1   numero2 


//console.log(process.argv[2]); 
// nos deja pasar por terminal la OPERACION ej: sumar



let arrayProcess = ["node", "pruebaModulos.js", "sumar", "14", "10"] // ejemplo de process por detras



// .toLowerCase (transforma todo lo que recibe a minuscula)
if(operacion.toLowerCase() == "sumar") {  
    console.log(sumar(numero1, numero2))
}
if(operacion.toLowerCase() == "restar") {   
// si la palabra que escribo en la posicion que corresponde a operacion (aplico el metodo toLowerCase
//para pasar a minus. el string recibido), es igual a "RESTAR" se ejecuta la funcion restar()
    console.log(restar(numero1, numero2))
}
if(operacion.toLowerCase() == "multiplicar") {  
    console.log(multiplicar(numero1, numero2))
}
if(operacion.toLowerCase() == "dividir") {  
    console.log(dividir(numero1, numero2))
}






// metodo splice que separa los elementos de un array con el parametro
// que le pasemos ejemplo:
//console.log(process.argv.splice(",")); // SEPARA LOS ELEMENTOS DEL ARRAY CON UNA COMA
