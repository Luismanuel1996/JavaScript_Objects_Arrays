console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

let sum = 0;
function arraySum(arr) {
    arr.forEach((number) => { sum += number ; });


    return sum;
}

console.log(arraySum(numbers));

 // Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = [] ;


book.title = "The Catcher in the Rye";
book.author = " by J.D Salinger";
book.pages = 234 ;
book.readCount = 1 ;
book.info = function(){ 
    return `${this.title} ${this.author} is ${this.pages} pages and i have read it ${this.readCount} time(s).`
} 

console.log(book.info()) ;


let sentence = "The quick brown fox jumps over the lazy dog";

let newArray = []

let words = sentence.split(" ")

console.log(typeof words)

words.forEach((word) => {
let wordsSplit = word.split('') ;    
//console.log(wordsSplit)
let reversedWords = wordsSplit.reverse() ;
// console.log(reversedWords)
let newValue = reversedWords.join("") ;
newArray.push(newValue) ;

} );

console.log(newArray.join(" ")) ;

 // Exercise 2 Section
 console.log("EXERCISE 5:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26"; 
let rows = csvData.split("\n").slice(1) ;
//console.log(rows)

let result = rows.forEach(elt => {
    const row = elt.split(",") ;
    //console.log(row)
    const name = row[0] ;
    const age = row[1] ;
    console.log( name, age)
    
});
