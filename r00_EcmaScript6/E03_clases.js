class Figura{
     constructor(x,y){
         this.x = x;
         this.y = y;
     }
}

class Circunferencia extends Figura{
    constructor(x,y,r){
        super(x,y);
        this.r = r>0? r : 0;
    }
    area(){
        return Math.PI * this.r * this.r;
    }
    toString(){
        return `Circunferencia de radio ${this.r} 
                y centro en ${this.x},${this.y}`;

    }
}
let c = new Circunferencia(1,2,3);
console.log("->" + c);
console.log("Area:",c.area());