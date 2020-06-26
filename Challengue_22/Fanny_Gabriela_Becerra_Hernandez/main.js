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
    fruitsArray = ["Aguacatito", "Berenjenita", "Pepinito feliz", "Tomatito bebé"],
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
    table = document.getElementById('while');
    console.log('WHILE');
    if (counterWhile == 0) {
        while (index < fruitsArray.length) {
            console.log(fruitsArray[index]);
            printRow(table, fruitsArray[index]);
            index++;
        }
        index = 0;
        counterWhile++;

    } else {
        deleteRows(table);
        counterWhile = 0;
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests for loop.
 */
function funcFor() {
    table = document.getElementById('for');
    console.log('FOR');
    if (counterFor == 0) {
        for (index; index < fruitsArray.length; index++) {
            console.log(fruitsArray[index]);
            printRow(table, fruitsArray[index]);
        }
        index = 0;
        counterFor++;
    } else {
        deleteRows(table);
        counterFor = 0;
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests for...in loop.
 */
function funcForIn() {
    table = document.getElementById('forIn');
    console.log('FOR IN');
    if (counterForIn == 0) {
        for (let fruit in fruitsArray) {
            console.log(fruitsArray[fruit]);
            printRow(table, fruitsArray[fruit]);
        }
        counterForIn++;
    } else {
        deleteRows(table);
        counterForIn = 0;
    }
}

/**  @author:      Fanny Becerra.
 *   @param:       None.
 *   @return:      None.
 *   @description: this function tests for...of loop.
 */
function funcForOf() {
    table = document.getElementById('forOf');
    console.log('FOR OF');
    if (counterForOf == 0) {
        for (let fruit of fruitsArray) {
            console.log(fruit);
            printRow(table, fruit);
        }
        counterForOf++;
    } else {
        deleteRows(table);
        counterForOf = 0;
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
function deleteRows(table) {
    table.querySelectorAll('tr').forEach(node => node.remove());
}