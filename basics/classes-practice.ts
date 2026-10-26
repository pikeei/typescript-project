
class User {
    name: string;
    age: number

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

let a = new User("PK", 25);

console.log(a.name);
console.log(a.age);