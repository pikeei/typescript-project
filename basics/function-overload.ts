function getLength(value: any[]): number;
function getLength(value: string): string;
function getLength(value: string | any[]){
    if(typeof value =='string'){
        //splits by spaces and gets the length
        const numberOfWords = value.split(' ').length;
        return `${numberOfWords} words`;
    }
    return value.length;
}

const numOfWords = getLength("I am Paul Kenneth or PK, The Lebron James of Pos1 in SEA server");
const numOfItems = getLength(["Sports", "Cooking", "Music"]);;
console.log(numOfWords);
console.log(numOfItems);