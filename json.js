const json = {
    name: "json",
    age: 30,
}


// Convert JSON object to string
const jsonString = JSON.stringify(json);
console.log(`>varsha_training | [json.js] >#9 :`, jsonString);
console.log(`>varsha_training | [json.js] >#10 typeof jsonString:`, typeof jsonString);


const jsonStr = '{"name":"Zaid","age":30}';

// Convert JSON string to object
const jsonObject = JSON.parse(jsonStr);

console.log(`>varsha_training | [json.js] >#18 jsonObject:`, jsonObject);
console.log(`>varsha_training | [json.js] >#19 typeof jsonObject:`, typeof jsonObject);