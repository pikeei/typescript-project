

let roles=["admin", "guest", "editor"] as const;

//roles.push("user"); //error since as const makes this array readonly
const firstRole = roles[0];