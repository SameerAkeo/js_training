const object = {
    name: "sameer",
    age: 25,
    isAdmin: false,
    city: ""
}

const array = [1, 2, 3, 4, 5];

// accessing object properties
console.log(`>varsha_training | [array_object_mainupulations.js] >#9 typeof object:`, typeof object);
console.log(`>varsha_training | [array_object_mainupulations.js] >#10 typeof array:`, typeof array); // will be treated as object


console.log(`>varsha_training | [array_object_mainupulations.js] >#15 object.name:`, object.name);

// update the values 
object.name = "John";

// task number :- 
// 1. how to restrict that the values of object does not get updated. Primary object value should not change.

const object2 = object;

console.log(`>varsha_training | [array_object_mainupulations.js] >#26 object2:`, object2);
console.log(`>varsha_training | [array_object_mainupulations.js] >#27 object:`, object);

// changing the value of one object
object2.name = "Rahul";

console.log(`>varsha_training | [array_object_mainupulations.js] >#31 object2:`, object2);
console.log(`>varsha_training | [array_object_mainupulations.js] >#32 object:`, object);

object.email = "email@email.com";

console.log(`>varsha_training | [array_object_mainupulations.js] >#36 object:`, object);
console.log(`>varsha_training | [array_object_mainupulations.js] >#37 object2:`, object2);

delete object.age;

console.log(`>varsha_training | [array_object_mainupulations.js] >#41 object:`, object);


console.log(`>varsha_training | [object_mainupulations.js] >#44 object:`, object);


// advanced object key accessing type

const object3 = {
    name: "Cris",
    age: 25,
    isAdmin: false,
    city: "",
    email: "sameer@example.com"
};


const email = "a@gmail.com"
const { email: userEmail } = object3; // destructuring assignment

console.log(`>varsha_training | [object_mainupulations.js] >#59 email:`, userEmail);