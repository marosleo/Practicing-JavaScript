function myConcat(separador) {
    var result = "", // inicializa a lista
        i;
    // itera por meio de argumentos
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separador;
    }
    return result;
 }

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
