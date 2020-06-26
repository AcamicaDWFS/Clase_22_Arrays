let fruitsArray = new Array("Aguacate", "Berenjena", "Pepino", "Tomate"),
    arr = ['foo', 'bar', 'baz'],
    table,
    newLength,
    prevLength,
    tr = null,
    td = null,
    txt = '',
    index = 0;

function funcWhile() {
    table = document.getElementById('while');
    console.log('WHILE');
    while (index < fruitsArray.length) {
        console.log(fruitsArray[index]);
        newLength = printRow(table, fruitsArray[index], prevLength);
        prevLength = newLength;
        index++;
    }
    index = 0;
}

function funcFor() {
    table = document.getElementById('for');
    console.log('FOR');
    for (index; index < fruitsArray.length; index++) {
        console.log(fruitsArray[index]);
        printRow(table, fruitsArray[index]);
    }
    index = 0;
}

function funcForIn() {
    table = document.getElementById('forIn');
    console.log('FOR IN');
    for (let fruit in fruitsArray) {
        console.log(fruitsArray[fruit]);
        printRow(table, fruitsArray[fruit]);
    }
}

function funcForOf() {
    table = document.getElementById('forOf');
    console.log('FOR OF');
    for (let fruit of fruitsArray) {
        console.log(fruit);
        printRow(table, fruit);
    }
}

function printRow(table, element, prevLength) {
    console.log('table.children.length ', table.children.length);
    console.log('fruitsArray.length ', fruitsArray.length);
    console.log('table ', table);
    console
    if (table.children.length >= fruitsArray.length) {
        table.querySelectorAll('*').forEach(node => node.remove());
        //table.innerHTML = '';
        //table.remove();
    } else {
        txt = document.createTextNode(element);
        td = document.createElement('td');
        tr = document.createElement('tr');

        td.appendChild(txt);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    return table.children.length;
}