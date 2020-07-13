function stop () {
    let newItem;
    let numeros = new Array ();
    do {
        newItem = prompt("Ingresa un numero");
        numeros.push(newItem);
    } while (newItem != "stop");

    numeros.pop();
    console.log (numeros);
}

function dividirArrays() {
    let newItem;
    let numerosPares = new Array();
    let numerosImpares = new Array();
    let otros = new Array();
    do {
        newItem = prompt("Ingresa un numero");
        console.log(Number(newItem));
        if (isNaN(newItem)) {
            otros.push(newItem);
        } else if (Number(newItem) % 2 == 0) {
            numerosPares.push(newItem);
        } else if (Number(newItem) % 2 != 0) {
            numerosImpares.push(newItem);
            console.log(numerosImpares);
        } 
    
    } while (newItem != 0);

    numerosPares.pop();
    console.log (`Numero pares: ${numerosPares} \n Numeros impares: ${numerosImpares} \n Otros: ${otros}`);
}

function eliminarExtremos() {
    let newItem;
    let numeros = new Array();
    let otros = new Array();

    do {
        newItem = parseInt(prompt("Ingresa un número"));
        if (isNaN(newItem)) {
            otros.push(newItem);
        } else {
            numeros.push(newItem);
        }
    } while ( newItem != 0);
    
    numeros.sort((a,b)=>a-b);
    numeros.pop();
    numeros.shift();
    console.log (numeros);
}

function eliminarExtremosSinCero() {
    let newItem;
    let numeros = new Array();
    let otros = new Array();

    do {
        newItem = parseInt(prompt("Ingresa un número"));
        if (isNaN(newItem)) {
            otros.push(newItem);
        } else {
            numeros.push(newItem);
        }
    } while ( newItem != 0);
    
    numeros.sort((a,b)=>a-b);
    numeros.pop();
    numeros.shift();
    numeros.shift();
    console.log (numeros);
}

function dividirEnTres() {
    let newItem;
    let arrayCompleto = new Array();
    let tramo;
    let arrayuno;
    let arraydos;
    let arraytres;

    do {
        newItem = (prompt("Ingresa algo"));
        arrayCompleto.push(newItem);
    } while (newItem != 0);

    if (arrayCompleto.length % 3 != 0) {
        arrayCompleto.shift();

        if (arrayCompleto.length % 3 !=0) {
            arrayCompleto.pop();
        }
    } 

    tramo = arrayCompleto.length / 3;
    console.log(tramo);

    arrayuno = arrayCompleto.splice(0,tramo);
    arraydos = arrayCompleto.splice(0,tramo);
    arraytres = arrayCompleto;

    console.log(`Array 1: ${arrayuno} \n Array 2: ${arraydos} \n Array 3: ${arraytres}`);
}