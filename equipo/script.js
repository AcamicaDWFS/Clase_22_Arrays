(function() {
    // numeros();
    // arreglos();
    // solonum();
    // entres();
})();

function numeros() {
    let dato = '';
    let datos = [];
    while(dato !== 'Stop') {
        dato = prompt('Ingresa Dato');
        let numero = isNaN(dato) ? null: Number(dato);
        if( typeof(numero) === 'number' ) {
            if(numero !== NaN ) {
                datos.push(parseInt(dato,10));
            } 
        }
    }
    console.log(datos);
}

function arreglos(){
    let dato = '';
    let par = [];
    let impar = [];
    let nonum = [];
    while(dato !== '0') {
        dato = prompt('Ingresa un Valor');
        let num = Number(dato);
        let mod = typeof(num) === 'number' && num !== NaN ? num%2 : null;
        if( mod === 0) {
            par.push(num);
        } else if(mod === 1) {
            impar.push(num);
        } else {
            nonum.push(dato);
        }
    }
    console.log(par, impar, nonum);
}

function solonum() {
    let dato = '';
    let numeros = [];
    while(dato !== '0'){
        dato = prompt('Ingresa un Valor');
        let num = Number(dato);
        console.log(num);
        if( typeof(num) === 'number' && num !== NaN && num > 0) {
            numeros.push(num);
        }
    }
    let order = numeros.sort((a,b)=> a-b);
    let elimina = [...order];
    console.log(order);
    elimina.shift();
    elimina.pop();
    console.log(elimina);

}

function entres() {
    let dato = '';
    let datos = [];
    let uno = [];
    let dos = [];
    let tres = [];
    while(dato !== '0') {
        dato = prompt('Ingresa un Valor');
        console.log(dato);
        if( dato !== '0' ){
            datos.push(dato);
        }
    }
    let mod = datos.length % 3;
    let arr = parseInt(datos.length / 3);
    if( mod === 1 && arr > 0 ) {
        datos.shift();
    }
    if ( mod === 2 && arr > 0 ) {
        datos.shift();
        datos.pop();
    }
    uno = datos.slice( 0, arr );
    dos = datos.slice( 0 + arr, arr * 2 );
    tres = datos.slice( 0 + arr * 2, arr * 3 );
    console.log(mod, arr, uno, dos , tres);
}