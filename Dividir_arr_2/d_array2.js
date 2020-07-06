alert("Programa para dividir en tres arrays, los elementos ingresados.");

let array_general = []; //Almacén general del input

let i = 0;
let input_grl = prompt("Ingresa los elementos que desees. \nCuando finalices escribe el número cero.");
while (input_grl != "0") { //Mientras el input sea diferente de cero continúa...
    array_general[i] = input_grl; //Guardar los valores de input_grl en un array_general    
    input_grl = prompt("Ingresa los elementos que desees. \nCuando finalices escribe el número cero.");
    i++;
}

console.log("El array original registrado es: " + array_general + "\nSu longitud es de: " + array_general.length);

let multiplo_tres = array_general.length % 3;
console.log("¿Es múltiplo de 3? Si aparece 0, lo es => " + multiplo_tres);

let array_1 = [];
let array_2 = [];
let array_3 = [];


if (multiplo_tres == 1) {
    array_general.shift();
    console.log("Actualización del array con 1 elemento menos: " + array_general);
} else if (multiplo_tres == 2) {
    array_general.shift();
    array_general.pop();
    console.log("Actualización del array con 2 elementos menos: " + array_general);
}

let n_elementos = array_general.length / 3;
console.log("El número de elementos a dividir es: " + n_elementos);
array_1 = array_general.slice(0, n_elementos);
console.log("El array_1 es: " + array_1);
array_2 = array_general.slice(n_elementos, [(n_elementos) * 2]);
console.log("El array_2 es: " + array_2);
array_3 = array_general.slice([(n_elementos) * 2], [(n_elementos) * 3]);
console.log("El array_3 es: " + array_3);