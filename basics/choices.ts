/*enum Role {
    Admin,
    Editor,
    Guest,
    Viewer
};

let userRole: Role = Role.Editor;
console.log(userRole); 
userRole = Role.Guest;

console.log(userRole);
*/
// literal types practice
type Role = "admin" | "editor" | "guest" | "viewer";

type User ={
    name: string,
    age: number,
    role: Role,
    permissions: string[];
}
let userRoleLiteral: Role;

function access(role: Role){
console.log(role);
}

access("admin");