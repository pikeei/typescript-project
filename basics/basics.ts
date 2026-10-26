
function add(a: number, b: number):number{
    return a+b;
}
add(10, 5);

function logAndThrow (errorMessage : string){
    console.log(errorMessage);;
    throw new Error(errorMessage);
}


const logMsg = (msg: string) => {
    console.log(msg);
};

function performJob (cb : (msg: string) => void){
    try{
        cb("Performing job...");
    }catch(error){
        logAndThrow("Error in performJob");
    }
}

performJob(logMsg);

type User = {
    name: string,
    age: number,
    greet: (msg: string) => string;
}

let user: User = {
    name: "John",
    age: 30,
    greet(msg: string) {
        return `Hello, ${this.name}! ${msg}`;
    }
};

console.log(user.greet);