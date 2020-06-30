function isanumber () {
    do {
        input_user = prompt("Ingresa SÓLO números para guardar en un array. \nCuando finalices escribe la palabra 'Stop'.");
        if(input_user == "Stop") {
            return input_user;
        }
        input_user = parseFloat(input_user);
    } while (isNaN(input_user));
    return input_user;
}

alert("Programa para almacenar números en un array");

let numbers = []; //Array para guardar los números
let input_numbers = isanumber(); //El input del usuario
let i = 0;
while (input_numbers != "Stop") { //Si es diferente de 'Stop' continúa
    numbers[i] = input_numbers; //Guardar en este array los valores de cada elemento que ingrese el usuario
    input_numbers = isanumber(); //Repetir el input para ingresar números
    i++; //Incrementar el siguiente índice para el siguiente elemento de número
}

console.log("El array numbers contiene: " + numbers);
