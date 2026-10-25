//sample usage of arrow function in typescript


//arrow function with explicit return type
const add = (a: number, b: number) =>{
    return a+b;
}

console.log(add(10, 5));

//arrow function with implicit return type
const printOutput : (a: number, b:number) => void = output => console.log(output);

const button = document.querySelector('button');
//arrow function as event listener
if (button){
    button.addEventListener('click', event => console.log(event));
}