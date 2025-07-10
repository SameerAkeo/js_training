// if
const myAge = 32;
let canVote2;
if (myAge >= 18) {
    canVote2 = "Yes, you can vote";
} else {
    canVote2 = "No, you cannot vote";
}

console.log(`>varsha_training | [operators.js] >#09 canVote2:`, canVote2);
console.log(`>varsha_training | [control_structures.js] >#11 myAge:`, myAge);
// switch
switch (true) {
  case myAge === 18:
    console.log(`>varsha_training | [operators.js] >#14 You are exactly 18.`);
    break;
  case myAge === 19:
    console.log(`>varsha_training | [operators.js] >#18 You are 19.`);
    break;
  case myAge > 30:
    console.log(`>varsha_training | [operators.js] >#21 You are above 30.`);
    break;
  default:
    console.log(`>varsha_training | [operators.js] >#24 You are not 18 or 19.`);
}


// for


// while
let count = 0;
while (count < 5) {
    console.log(`>varsha_training | [control_structures.js] >#30 count:`, count);
    count++;
}


// forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log(`>varsha_training | [control_structures.js] >#36 Number at index ${index}:`, number);
});

// for of and for in loop understanding as a task
