class User {
    protected firstName: string='';
    private lastName: string='';

    //sample usage of setter
    set _firstName(firstName: string){
        if (firstName.trim()==''){
            throw new Error('First Name is required');
        }
        this.firstName = firstName;
    }
    
    set _lastName(lastName:string){
        if (lastName.trim()==''){
            throw new Error('Last Name is required');
        }
        this.lastName = lastName;
    }
    // constructor (name: string, lastName: string) {
    //     this.name = name;
    //     this.lastName = lastName;
    // }
    
    //sample usage of getter
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
    
    static usageOfStatic = 'This is a static method usage';
    static greet (){
        console.log("Hello world");
    }
}

console.log(User.usageOfStatic);
User.greet();
const user = new User();  
user._firstName = 'P';
user._lastName = 'K';
console.log(user.fullName);

class Employee extends User {
    
    constructor(jobtitle: string){
        super();
        super._firstName = 'Paul Kenneth';
    }

    work(){
        console.log(this._firstName);
    }

}

abstract class UIEelement {

    constructor(public identifier: string){}
    clone(targetlocation:string){
        //logic
    }
}

//won't work because its abstract
//const element = new UIEelement();

//we can only inherit it
class SideElement extends UIEelement {
    constructor(
        public identifier: string, 
        public position: 'left' | 'right'){
            super(identifier);
        }
}