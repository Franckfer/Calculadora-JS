// Importante ver que las carpetas sean correctas para evitar 
// fallas en el codigo
// ("../") sirve para volver a una carpeta anterior 


let sumar = require("./Operaciones/sumar");   //                                             
let restar = require("./Operaciones/restar");
let multiplicar = require("./Operaciones/multiplicar");
let dividir = require("./Operaciones/dividir");
//requerimos (recibimos) los archivos usando la funcion "require()" 
// y dentro pasamos la ruta(carpeta) y el nombre del archivo


//Ejecutar la función que permite sumar y la función que permite restar, 
//pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados..

console.log("El resultado de la suma es: " + sumar(256, 963));                              
console.log("El resultado de la resta es: " + restar(584, 827));
// mostramos por consola el resultado, pasando los parametros dentro de la función



//Ejecutar la función que permite multiplicar, pasando como argumentos dos números
//cualesquiera. Mostrar en consola el resultado.
console.log("El resultado de la multiplicacion es: " + multiplicar(5646489, 54984));

//Ejecutar la función que permite multiplicar, pasando ahora como uno de los dos
//argumentos, el número cero. Mostrar en consola el resultado.
console.log("El resultado de la multiplicacion es: " + multiplicar(1654, 0));




//Ejecutar la función que permite dividir, pasando como argumentos dos números
//cualesquiera. Mostrar en consola el resultado.
console.log("El resultado de la division es: " + dividir(4654894, 65464));

//Ejecutar la función que permite dividir, pasando ahora como uno de los dos
//argumentos, el número cero. Mostrar en consola el resultado.
console.log("El resultado de la division es: " + dividir(0, 564));









//METODO DE CALCULADORA MAS SIMPLE Y MAS CORTO DE CODIGO
//QUE SIMPLIFICA EN UNA FUNCION TODOS LOS CALCULOS QUE HICIMOS ARRIBA


/* function calculadora (operacion, n1, n2) {
    if(operacion == sumar) {
        return sumar(n1, n2)
    } else if (operacion == restar) {
        return restar (n1, n2)
    } else if (operacion == multiplicar) {
        return multiplicar (n1, n2)
    } else if (operacion == dividir) {
        return dividir (n1, n2)
    } else {
        return "no es una operacion valida"
    }
}

console.log(calculadora(sumar, 5, 2));
console.log(calculadora(restar, 56, 49));
console.log(calculadora(multiplicar, 51, 16));
console.log(calculadora(dividir, 65, 151));
*/