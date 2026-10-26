let hobbies : string[] = ["Sports", "Cooking"];

hobbies.push("Reading");

console.log(hobbies[2]); 
let users: string[];

users = ["Pk", "John", "Jane"];

let arrayTest : (string | number | boolean)[];

arrayTest = ["asd",123,456,"zxc", true];

console.log(arrayTest);

let possibleResults : [1 |-1, 1 | -1];

possibleResults = [1,1];
possibleResults = [-1,-1];



console.log(possibleResults);
    
let user :{
    name: string;
    age: number;
    description:{
        somethingString: string;
        somethingNumber: number;
    }
} =
{
    name: "test",
    age: 23,
    description: {
        somethingString: "test",
        somethingNumber: 123
    }
}

console.log(user);