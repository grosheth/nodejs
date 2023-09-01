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



// Loop

tab = ["test", "list"]

for (let i =0; i < tab.lenght; i++){
  console.log(tab[i]);
}

for (const item of tab){
    console.log(item);
  }



// Functions


function sum(a, b){
  return a + b;
}

const sum_anonymous = function(a, b){
  return a + b;
}


const sum_anonymous_new_syntax = (a, b) => {
  return a + b;
}

const sum_anonymous_new_syntax_simplified = (a, b) => a + b;

var res = sum(2 , 5);
console.log(res)
var res = sum_anonymous(2 , 5);
console.log(res)
var res = sum_anonymous_new_syntax(2 , 5);
console.log(res)
var res = sum_anonymous_new_syntax_simplified(2 , 5);
console.log(res)
