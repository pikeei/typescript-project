//sample usage of arrow function in typescript


//arrow function with explicit return type
const add = (a: number, b: number) =>{
    return a+b;
}

console.log(add(10, 5));

//arrow function with implicit return type
const printOutput : (a: number) => void = output => console.log(output);
printOutput(add(5,10));

/*
const button = document.querySelector('button');
//arrow function as event listener
if (button){
    button.addEventListener('click', event => console.log(event));
}
*/

const hobbies = ['Dota', 'Football', 'Coding'];
const activeHobbies = ['Sleeping'];
activeHobbies.push(...hobbies);

//destructuring array
const [...hobbyList] = hobbies; 
console.log(activeHobbies);
console.log(hobbyList);
console.log('test');

const person ={
    name: 'John',
    age: 20,
}
//destructuring an object
const {name, age} = person;

//copying object using spread operator
const copiedPerson ={...person};

console.log(copiedPerson);

//usage of rest parameters in arrow function
const addVersion2 = (...addedNumbers: number[]) =>{
    let result = 0
    addedNumbers.reduce((prevValue, curValue) =>{
        result = prevValue + curValue;
        return result;
    }, 0);
    return result;
}
const addedNumbers = addVersion2(10,3,2,34,13,2312,3,5,);
console.log(addedNumbers);