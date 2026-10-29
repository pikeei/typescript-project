class User {
    constructor(public name: string){}

    join(){}
}

class Admin {
    constructor(permissions:string[]){
    }
    
    scan(){}

}

const user = new User("PK")
const admin = new Admin(["ban","restore"])
type Entity = User | Admin;

//usage of guards in classes using instanceof
function init(entity:Entity){
    //join() or scan()
    if (entity instanceof User){
        entity.join();
        return;
    }
    entity.scan();
}