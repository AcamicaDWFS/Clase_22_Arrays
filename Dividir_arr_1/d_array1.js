alert("Programa que divide arrays por el tipo de valor");

let array_general = []; //Almacén general del input

let i = 0;
let input_grl = prompt("Ingresa los números que desees. \nCuando finalices escribe el número cero.");
while (input_grl != "0") { //Mientras el input sea diferente de cero continúa...
    array_general[i] = input_grl; //Guardar los valores de input_grl en un array_general    
    input_grl = prompt("Ingresa los números que desees. \nCuando finalices escribe el número cero.");
    i++;
}

console.log(array_general);

function n_pares(array) {
    let almacen_pares = [];    
    for (i = 0; i < array.length; i++) {
        let pares = array[i] % 2;
        let numb_trans = parseInt(array[i]);

        if (pares == 0 && (!isNaN(numb_trans))) {
            almacen_pares.push(array[i]);            
        } 
    }
    return almacen_pares;
}

function n_impares(array) {
    let almacen_impares = [];
    for (i = 0; i < array.length; i++) {
        let pares = array[i] % 2;
        let numb_trans = parseInt(array[i]);
        
        if (pares !== 0 && (!isNaN(numb_trans))) {
            almacen_impares.push(array[i]);            
        } 
    }
    return almacen_impares;
}

function no_numeros (array) {
    let almacen_otros = [];
    for (i = 0; i < array.length; i++) {
        let numb_trans = parseInt(array[i]);
        
        if (isNaN(numb_trans)) {
            almacen_otros.push(array[i]);            
        } 
    }
    return almacen_otros;
}

let array_pares = n_pares(array_general);
console.log("El array de pares contiene los siguientes elementos registrados: " + array_pares);

let array_impares = n_impares(array_general);
console.log("El array de impares contiene los siguientes elementos registrados: " + array_impares);

let array_noNumeros = no_numeros(array_general);
console.log("El array de No números contiene los siguientes elementos registrados: " + array_noNumeros);

alert("El array de pares contiene los siguientes elementos registrados: " + array_pares + 
"\nEl array de impares contiene los siguientes elementos registrados: " + array_impares +
"\nEl array de No números contiene los siguientes elementos registrados: " + array_noNumeros);