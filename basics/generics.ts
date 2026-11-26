let names: Array<string> = ["Max","Anna"];

//Generic Type
type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};

store.name = "Max"; 
store.isInstructor = true;

function merge<T, U> (a: T, b: U) {
  return [a,b];
}

const id = merge<number, string>(1, "PK");

console.log(id);

function mergeObj<T extends object, U extends object>(a:T,b:T){
  return {...a,...b};
}
console.log(mergeObj({name:"Max"},{age:30}));

interface Role<T>{
  id: T;
}
class User<T>{
  constructor(public id: T){

  }
}

const user = new User(1);

user.id;