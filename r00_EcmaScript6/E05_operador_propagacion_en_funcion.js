function sumaN(...valores){
    let total =0
    for(let n of valores){
        total += n;
    }
    return total;
}
let resul = sumaN(2,5,3,6,4,100);
console.log("La suma es", resul);