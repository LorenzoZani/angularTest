

const nome="pippo";
let cognome;
cognome="pippone";


let age:number=18;

let vero=true;
const children:[string]=["ciao"];

let Person:{
    nome:string,
    age:number
};
Person={nome:"Pippo", age:30};
function go(direction:string="left", distance:number =100) {
    console.log(direction,distance);
    
}
go();

go("right");

go("left",50);


function drive(param:any) {
    
}

drive({distance:100});

function add(x:number, y:number):number {
    
    return x+y;
}

add(5,7)+100;
const add2=function(x){

};
const multiply=(x)=>x*2;

