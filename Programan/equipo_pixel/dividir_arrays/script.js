/* Función que pide los valores y al finalizar llama a la función para mostrar
 * los arreglos con los valores ingresados.
 */
function start() {
  let input;
  const noNumbers = [];
  const evenNumbers = [];
  const oddNumbers = [];

  do {
    input = prompt("Ingresa cualquier valor.\nIngresa '0' (cero) para salir.");

    if (input === "" || input === null) {
      return;
    }

    if (isNaN(parseInt(input))) {
      noNumbers.push(input);
    } else {
      input = parseInt(input);

      if (input === 0) {
        break;
      }

      input % 2 === 0 ? evenNumbers.push(input) : oddNumbers.push(input);
    }
  } while (input !== "0");

  showArrays(noNumbers, evenNumbers, oddNumbers);
}

/* Función que muestra los arreglos, si el usuario no ingresó nada entonces
 * mostrará un mensaje informando. En caso contrario se crea un cadena con los
 * valores de cada uno de los arreglos.
 */
function showArrays(noNumbers, evenNumbers, oddNumbers) {
  if (isEmpty(noNumbers) && isEmpty(evenNumbers) && isEmpty(oddNumbers)) {
    alert("No ingresaste ningún valor.");
  } else {
    let msg = `Valores no numéricos:\n${getValues(noNumbers)}\n`;
    msg += `Números pares:\n${getValues(evenNumbers)}\n`;
    msg += `Números impares:\n${getValues(oddNumbers)}`;

    alert(msg);
  }
}

// Permite saber si un arreglo está vacío.
function isEmpty(array) {
  return array.length === 0;
}

/* Retorna una cadena de texto con los valores del arreglo. Si no tiene ningún
 * valor entonces se retorna la cadena "No hay valores."
 */
function getValues(array) {
  return isEmpty(array) ? "No hay valores." : array.join(", ");
}

// Inicia la ejecución del programa.
start();
