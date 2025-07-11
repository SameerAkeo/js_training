const array = [1,2];
array.push(3,4);


const spreadPush = [...array, 4,5,6];
console.log(`>varsha_training | [spread_rest_operator.js] >#4 array:`, array);
console.log(`>varsha_training | [spread_rest_operator.js] >#7 spreadPush:`, spreadPush);

// object merging 
const obj1 = { a: 1 };
const obj2 = { b: 1 };

const combined = { ...obj1, ...obj2 };
console.log(`>varsha_training | [spread_rest_operator.js] >#14 combined:`, combined);


// you need to create the function which can take n number of parameters as number and you need return the sum of those numbers.


// template literals

const name = "sameer";
const city = "Jaipur";

const old = "My name is " + name + " and i live in " + city;
console.log(`>varsha_training | [spread_rest_operator.js] >#26 old:`, old);

const neww = `My name is ${name} and i live in ${city}`;
console.log(`>varsha_training | [spread_rest_operator.js] >#29 neww:`, neww);


// default parameters in the functions

function greet (name= "John") {
    console.log(`Namaste ${name}`);
}

greet();
greet("Varsha");


// optional chaining
const user = {
    profile: {
        name: "sameer",
    }
}


console.log("===============>", user.profile.name);
console.log("printing last name if not coming", user.profile?.lastName || '');




try {
    let json = '{"name":"sameer"}';
    let data = JSON.parse(json);
    console.log(`>varsha_training | [11JulySession.js] >#59 data.name:`, data.name);
} catch (error) {
    console.log(`>varsha_training | [11JulySession.js] >#61 error:`, error);
}


// function divide (a,b) {
//     if (b === 0) throw new Error("cannot divide the number by 0");
//     return a/b;
// }

const divide = (a,b) => {
    if (b === 0) throw new Error("cannot divide the number by 0");
    return a/b;   
}

// divide(4,0);



try {
    console.log(divide(4,0));
} catch (error) {
    console.error("------------------error", error);
}