
/*
type Filedata = {
    path: string;
    content: string
}

type Status = {
    isOpen: boolean;
    errorMessage: string;
}

//usage of intersection for types
type AccessFileData = Filedata & Status;

let test : AccessFileData = {
    path: "test",
    content: "test",
    isOpen : true,
    errorMessage: "test"
}

console.log(test);
*/

//same concept can be applied to interface

interface DatabaseData {
    connectionUrl: string;
    credentials: string;
}

interface Status  {
    isOpen: boolean;
    errorMessage: string;
}

interface AccessedDatabaseData extends DatabaseData,Status {};
