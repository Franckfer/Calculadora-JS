

/*
function multiplicar (factorUno, factorDos) {
    if((factorUno === 0) || (factorDos === 0)) {                               //comparamos si alguno de los parametros es igual a cero 
        console.log("Todo número multiplicado por 0 da como resultado cero")   // muestra por pantalla un string con resutado numero "0"
    } else {                                                                   // sino retornar (factorUno * factorDos) y mostrarlo por consola
        return factorUno * factorDos;
    }
};
*/
function multiplicar (factorUno, factorDos) {
    return factorUno * factorDos;
};


module.exports = multiplicar;       //exportamos la funcion multiplicar
