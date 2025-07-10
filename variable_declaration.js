var a = 10; // global scope and can be re-declared
let b = 20; // block scope and cannot be re-declared in the same scope
const c = 30; // block scope, it cannot be re assigned or re-declared at any place in the particular file

// scope 1
console.log(`>varsha_training | [variable_declaration.js] >#6 a:`, a);
console.log(`>varsha_training | [variable_declaration.js] >#7 b:`, b);
console.log(`>varsha_training | [variable_declaration.js] >#8 c:`, c);

let d; // undefined

if (true) {
    // this is our if block and having a blocked scope
    console.log("in the if condition");
    console.log(`>varsha_training | [variable_declaration.js] >#11 a:`, a);
    console.log(`>varsha_training | [variable_declaration.js] >#13 b:`, b);       a = 100
    console.log(`>varsha_training | [variable_declaration.js] >#14 c:`, c);         


    console.log("before assigning the values");
    a = 100;
    b = 200;
    // c = 300;
    d = 400;

    console.log(`>varsha_training | [variable_declaration.js] >#23 a:`, a);
    console.log(`>varsha_training | [variable_declaration.js] >#24 b:`, b);
    console.log(`>varsha_training | [variable_declaration.js] >#25 c:`, c);
}

console.log(`>varsha_training | [variable_declaration.js] >#28 a:`, a);  //10
console.log(`>varsha_training | [variable_declaration.js] >#29 b:`, b); // 20
console.log(`>varsha_training | [variable_declaration.js] >#30 c:`, c); // 30
console.log(`>varsha_training | [variable_declaration.js] >#34 d:`, d);


var a = 2
var a = 3
console.log(`>varsha_training | [variable_declaration.js] >#39 a:`, a);


 