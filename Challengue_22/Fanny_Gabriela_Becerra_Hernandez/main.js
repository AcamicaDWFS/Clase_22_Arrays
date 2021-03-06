/***************************************************************************************************
 * Name: ARRAYS_LoopsInJavascript
 * Author:
 * Description: This script tests for loops for an array.
 * *************************************************************************************************
 * LastModifiedBy     |     LastModifiedDate     |     Modification Id     |     Change description
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Fanny Becerra      |     26-Jun-2020          |     v0.1                |     Beta version
 */

let counterFor = 0,
    counterForIn = 0,
    counterForOf = 0,
    counterWhile = 0,
    forType = '',
    fruitsArray = ["Aguacatito", "Berenjenita", "Pepinito feliz", "Tomatito bebé"],
    fruitsLenght = fruitsArray.length,
    index = 0,
    table = null,
    td = null,
    tr = null,
    txt = '';

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests while loop.
 */
function funcWhile() {
    forType = 'while';
    table = document.getElementById(forType);
    if (counterWhile == 0) {
        console.log(forType);
        while (index < fruitsLenght) {
            console.log(fruitsArray[index]);
            printRow(table, fruitsArray[index]);
            index++;
        }
        index = 0;
        counterWhile++;

    } else {
        deleteRows(table, forType);
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests for loop.
 */
function funcFor() {
    forType = 'for';
    table = document.getElementById(forType);
    if (counterFor == 0) {
        console.log(forType);
        for (index; index < fruitsLenght; index += 1) {
            console.log(fruitsArray[index]);
            printRow(table, fruitsArray[index]);
        }
        index = 0;
        counterFor++;
    } else {
        deleteRows(table, forType);
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests for...in loop.
 */
function funcForIn() {
    forType = 'forIn';
    table = document.getElementById(forType);
    if (counterForIn == 0) {
        console.log(forType);
        for (let fruit in fruitsArray) {
            console.log(fruitsArray[fruit]);
            printRow(table, fruitsArray[fruit]);
        }
        counterForIn++;
    } else {
        deleteRows(table, forType);
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests for...of loop.
 */
function funcForOf() {
    forType = 'forOf';
    table = document.getElementById(forType);
    if (counterForOf == 0) {
        console.log(forType);
        for (let fruit of fruitsArray) {
            console.log(fruit);
            printRow(table, fruit);
        }
        counterForOf++;
    } else {
        deleteRows(table, forType);
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       table, element.
 *   @return:      None.
 *   @description: this function prints a row in a table for every element in fruitsArray.
 */
function printRow(table, element) {
    txt = document.createTextNode(element);
    td = document.createElement('td');
    tr = document.createElement('tr');

    td.appendChild(txt);
    tr.appendChild(td);
    table.appendChild(tr);
}

/**  @author:      Fanny Becerra.
 *   @param:       table.
 *   @return:      None.
 *   @description: this function delets all rows if counters are different from 0.
 */
function deleteRows(table, forType) {
    table.querySelectorAll('tr').forEach(node => node.remove());
    if (forType == 'while') {
        counterWhile = 0;
    } else if (forType == 'for') {
        counterFor = 0;
    } else if (forType == 'forIn') {
        counterForIn = 0;
    } else if (forType == 'forOf') {
        counterForOf = 0;
    }
}