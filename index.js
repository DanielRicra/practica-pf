function laCajaDePandora(numero) {
    if (numero % 2 === 0) {
        return numero.toString(2); // Convierte a binario
    } else {
        return numero.toString(16); // Convierte a hexadecimal
    }
}


// hola god