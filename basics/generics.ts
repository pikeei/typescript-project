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