// arithematic
let x = 10;
let y = 3;
let z = "5";
let w = +z; // unary plus operator converts string to number
console.log(`>varsha_training | [operators.js] >#2 x + y:`, x + y);
console.log(`>varsha_training | [operators.js] >#3 x - y:`, x - y);
console.log(`>varsha_training | [operators.js] >#4 x * y:`, x * y);
console.log(`>varsha_training | [operators.js] >#5 x / y:`, x / y);

// if you need to check the datatype is correct or not use typeof
console.log(`>varsha_training | [operators.js] >#10 typeof x:`, typeof x);
console.log(`>varsha_training | [operators.js] >#12 typeof z:`, typeof z);
console.log(`>varsha_training | [operators.js] >#14 typeof w:`, typeof w);


// logical // boolean examples

const isLoggedIn = true;
const isAdmin = false;

console.log("at line 22", isLoggedIn && isAdmin); // and operator // in and , all conditions should be true
console.log("at line 23", isLoggedIn || isAdmin); // or operator  // in or , at least one condition should be true


// ternary
const myAge = 18;
const canVote = myAge >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(`>varsha_training | [operators.js] >#30 canVote:`, canVote);


// if-else alternative using ternary operator
let canVote2;
if (myAge >= 18) {
    canVote2 = "Yes, you can vote";
} else {
    canVote2 = "No, you cannot vote";
}

console.log(`>varsha_training | [operators.js] >#38 canVote2:`, canVote2);