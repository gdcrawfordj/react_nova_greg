function sumaN(a,b,c,d){
    return a + b + c + d;
}
let datos = [2,5,3,6];
//let resul = sumarCuatro(datos[0],datos[1],datos[2],datos[3]);
let resul = sumaN(...datos);
console.log("La suma de",...datos, "es", resul);


const a = [1,2,3];
const b = [4,5,6];
const c = [...a, ...b];
console.log(c);

const d = {x:10, y:20};
const e = {y: 30, z:30}
const f = {...d, ...e, x:0, alpha:0.5};
console.log(f); 

const {x,y} = f;// Desestruturaación de variables
console.log('x', x);
console.log('y', y);
console.log('z', f.z);

//Robert C Martin (Clean Code - Codigo Limpio)