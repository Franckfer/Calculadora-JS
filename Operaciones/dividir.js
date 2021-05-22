

function dividir (dividendo, divisor) {
    if(Number(dividendo == 0) || Number(divisor == 0)) {  // si el dividendo o el divisor es igual a cero retornar ("No se puede dividir por cero")
        return "No se puede dividir por cero"            // sino retornar (dividendo / divisor) 
    }    
    
    return dividendo / divisor;
    
};


module.exports = dividir;      //exportamos la funcion dividir