// Variables
console.log("--- Vars ---")
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
console.log("--- Loops---")

tab = ["test", "list"]

for (let i =0; i < tab.lenght; i++){
  console.log(tab[i]);
}

for (const item of tab){
    console.log(item);
  }



// Functions

console.log("--- Functions ---")

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



// Default parameter

console.log("--- Default params ---")

const sayHello = (formule, name) => {
  console.log(`${formule} ${name}`)
}

sayHello(); //Return undefined for both vars

sayHello("Hi", "Alex");

const sayHelloDef = (formule = "Hello", name = "Bob") => {
  console.log(`${formule} ${name}`)
}

sayHelloDef(); // Returns default values

sayHelloDef("Hi");


// JSON

console.log("--- JSON---")

const pc = {
  ram: 16,
  stockage: 512,
  processeur: "Intel Core i7",
  annee:2020,
  logiciels: ["VSCode", "Firefox", "NodeJS", "Termnial"],

  upgrade: function() {
    this.ram *= 2;
    this.stockage *= 2;
  },
};

console.log(pc);
console.log(pc.stockage);
console.log(pc.logiciels);
console.log(pc.logiciels[0]);

// Can upgrade multiple time
pc.upgrade();
console.log(pc);

pc.upgrade();
console.log(JSON.stringify(pc));
const strJSON = JSON.stringify(pc)

console.log(JSON.parse(strJSON));