'use strict';

// var user;
const user; //assigning values that do not change at runtime
user = { name: "Mia", age: 24 };

if(true) {
  let dog = "Mr. Muddypaws"; //dof is scoped
}

const colors = ['red', 'green', 'blue']; //color is constant

/*for (var i = 0; i < colors.length; i++) {
  console.log (colors[i]);
}*/

//j is scoped to the block
for (let j = 0; i < colors.length; i++) {
  console.log (colors[j]);
}

//secret is scoped to the function; var would exhibit same behavior:
function secretKeeper() {
  let secret = "Tell nobody!";
}

//topsecret is not secret at all; without const, let or var,
//'topsecret' appears in the global scope:
function theGossiper() {
  topsecret = "I promise not to tell anybody!";
}

const teacher = "Karl";
const class = "COM 333/533: Application Programming Interfaces";

//console.log(teacher + " is the instructor for " + course);

let planet = `Earth`;
console.log(`${teacher} is the instructor for ${courses}`);

const sayTwelve = () => {return 12 };

//function expression, two + variables

const addFour = n => {return n + 4 }
//function expression, two + variables

// ^ that is the short form for this:
// const sayTwelve = function() {
// return 12
//};

const addTwoThings = (n,m) => { return n + m }
