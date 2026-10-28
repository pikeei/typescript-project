
interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

interface Authenticatable {
    something: string
}

//inheritance used on interface
interface AuthenticateAdmin extends Authenticatable {
    role: 'admin' | 'any string'
}
class AuthenticatableUser  implements Authenticatable{
    constructor(
        public email: string, 
        public password: string, 
        public something: string){}
        login(){

        }
        logout(){

        }
}

//function that uses interface
function authenticate (user:Authenticatable){
    user.logout;
    //and other stuff 
}
let user: Authenticatable;

user = {
    email: 'test@gmail.com',
    password: 'abc123',
    login(){
        //logic
    },
    logout(){
        //logic
    },
    something: 'something',
};