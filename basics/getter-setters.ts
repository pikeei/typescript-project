class User {
    private firstName: string='';
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
}
const user = new User();  
user._firstName = 'P';
user._lastName = '';
console.log(user.fullName);