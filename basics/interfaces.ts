
interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
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
    }
};