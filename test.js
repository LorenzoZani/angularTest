var nome = "pippo";
var cognome;
cognome = "pippone";
var age = 18;
var vero = true;
var children = ["ciao"];
var Person;
Person = { nome: "Pippo", age: 30 };
function go(direction, distance) {
    if (direction === void 0) { direction = "left"; }
    if (distance === void 0) { distance = 100; }
    console.log(direction, distance);
}
go();
go("right");
go("left", 50);
function drive(param) {
}
drive({ distance: 100 });
function add(x, y) {
    return x + y;
}
add(5, 7) + 100;
