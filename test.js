// Variables
const a = 1;
const b = 2;
const c = 3;
const d = (a + b);
let e = 5;
var x = 6;

{
    var x = 20;
    console.log(x);
}

console.log(d);


console.log("test");



//Loop

tab = ["test", "list"]

for (let i =0; i < tab.lenght; i++){
  console.log(tab[i]);
}

for (const item of tab){
    console.log(item);
  }