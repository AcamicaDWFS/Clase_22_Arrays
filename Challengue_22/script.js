const frutas = ['Manzana', 'Pera', 'Fresa', 'Naranja', 'Uva', 'Melon', 'Sandia'];
var count = 0;
var container = document.getElementById('frutas');
console.log(container)

while( count < frutas.length ) {
    let p = document.createElement('p');
    p.innerHTML = frutas[count];
    container.append(p);
    count++;
}