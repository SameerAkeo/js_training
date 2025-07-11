const numbers = [1, 2, 3, 4, 5];

// map
const doubledNumbers = numbers.map(num => num * 2); // new array with each element doubled
console.log(`>varsha_training | [array_mainupulation.js] >#1 doubledNumbers:`, doubledNumbers);


// filter and find
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`>varsha_training | [array_mainupulation.js] >#2 evenNumbers:`, evenNumbers); // array with only even numbers

const firstEven = numbers.find(num => num % 2 === 0);
console.log(`>varsha_training | [array_mainupulation.js] >#3 firstEven:`, firstEven);// entity with first even number

// reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(`>varsha_training | [array_mainupulation.js] >#4 sum:`, sum);

const marks = [85, 70, 50];


// some and every always returns the boolean values
const allPassed = marks.every(mark => mark >= 50);
const someFailed = marks.some(mark => mark < 50);



// push to push an elemen in the array
// pop to remove the last element from the array
// unshift to add an element at the beginning of the array
