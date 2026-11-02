
type FileSource = {type: 'file', path: string};
const fileSource: FileSource = {
    type: 'file',
    path: "path/of/something/file.csv"
};

type DBSource = {type: 'db', connectionUrl: string};
const dbSource: DBSource = {
    type: 'db',
    connectionUrl: 'connection-url'
};

type Source = FileSource | DBSource

function isFile(source: Source){
    return source.type =='file';
}

//type guard
function loadData(source: Source){
    //Open + read file or reach out to db serevr
    /*if('path' in source){
        return;
    }
        */
    //alternative for checking since we have 'type' now
    if (isFile(source)){
        source.path
        return;
    }

    source.connectionUrl;
}