
type FileSource = {path: string};
const fileSource: FileSource = {
    path: "path/of/something/file.csv"
};

type DBSource = {connectionUrl: string};
const dbSource: DBSource = {
    connectionUrl: 'connection-url'
};

type Source = FileSource | DBSource

//type guard
function loadData(source: Source){
    //Open + read file or reach out to db serevr
    if('path' in source){
        return;
    }
    source.connectionUrl;
}