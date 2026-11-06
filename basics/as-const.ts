

let roles=["admin", "guest", "editor"] as const;

//roles.push("user"); //error since as const makes this array readonly
const firstRole = roles[0];

const dataEntries ={
     entry1: 0.51,
     entry2: -1.2
} satisfies Record<string, number>;

