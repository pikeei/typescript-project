let names: Array<string> = ["Max","Anna"];

//Generic Type
type DataStore<T> = {
  [key: string]: T
};

let store: DataStore<string | boolean> = {};

store.name = "Max"; 
store.isInstructor = true;