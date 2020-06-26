// ["auto", 1, 5, "rojo", "verde", 5, 11, "casa", 2]
const data = ["auto", "1", 5, "rojo", "verde", 5, 11, "casa", 2];
let noNumbers = [];
let suma = 0;

let index = 0;
while (index < data.length) {
	if (typeof(data[index]) === "number") {
		suma = suma + data[index]; // suma += data[index]
	} else {
		noNumbers.push(data[index]);
	}
	index++;
}

console.info("La suma es:" + suma);
console.warn("Datos no númericos: " + noNumbers);

// Versión arrow function
suma = 0;
noNumbers = [];
data.forEach(x => typeof (x) === "number" ? suma += x : noNumbers.push(x));

console.log("La otra suma es: " + suma);
console.error("Lo otros no numéricos son: " + noNumbers);
