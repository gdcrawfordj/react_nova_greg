const nombre = 'pepe';
// if(typeof nombre !== 'undefined' && nombre!==''){
if(nombre){
    console.log(nombre, 'tiene', nombre.length, 'caracteres' );
}


// Falsy : cosas que al ponerse en un sitio donde se espera una expresíon boolean se evaluan a falso
if(''){
    console.log('cadena vacia');
}
if(undefined){
    console.log('undefined');
}
if(null){
    console.log('null');
}
if(0){
    console.log('0');
}
if(NaN){
    console.log('NaN');
}
let apellidos = undefined;
if(!apellidos){
    console.log('Por favor inserte sus apellidos');
}

console.log('fin');
