function isnumber () {
    do {
        input_user = parseInt(prompt("Ingresa sólo números enteros. \nCuando finalices escribe el número cero."));
    } while (isNaN(input_user));
    return input_user;
}

alert("Programa para eliminar los números extremos de un array.");

let input_numbers = isnumber();
let almacen_numeros = [];
let i = 0;

while (input_numbers != 0) { //Mientras input_numbers no sea cero entonces
    almacen_numeros[i] = input_numbers; //Guarda los valores de cada elemento; arreglo y en que casilla se guardará y su valor
    input_numbers = isnumber(); //Repetir el input para ingresar los números
    i++; //Incrementar el siguiente índice para el siguiente elemento de input_numbers
}

console.log("Array registrado: " + almacen_numeros);
almacen_numeros.sort((a, b) => a - b); //Función para ordenar los números ingresados
console.log("Array ordenado: " + almacen_numeros);

//Eliminar el primer elemento, que es el valor más bajo
almacen_numeros.shift();
console.log("Array sin el primer elemento: " + almacen_numeros);


//Eliminar el útimo elemento, que es el valor más alto
almacen_numeros.pop();
console.log("Array sin el último elemento: " + almacen_numeros);