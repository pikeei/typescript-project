
class User {
    public name: string;
    private age: number;
    readonly hobbies: string[] =[];

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet () {
        return console.log('Age is '+this.age);
    }
    //push will work because hobbies is an array and we are not reassigning the array, we are just modifying it
    addHobby(hobby: string) {
        this.hobbies.push(hobby);
    }
}

const a = new User("PK", 25);
a.addHobby("Coding");
a.greet();
console.log(a);