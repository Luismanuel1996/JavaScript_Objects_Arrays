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

//console.log(typeof words)

words.forEach((word) => {
let wordsSplit = word.split('') ;    
//console.log(wordsSplit)
let reversedWords = wordsSplit.reverse() ;
// console.log(reversedWords)
let newValue = reversedWords.join("") ;
newArray.push(newValue) ;

} );

//console.log(newArray.join(" ")) ;

let result = []; 

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let newString = csvData.split("\n") ;

for ( let i = 1 ; i < newString.length ; i++ ){
    const value = newString[i].split(",") ;
    let obj = [];
    obj.name = value[0] ;
    obj.age = value[1] ;
    result.push(obj)
} ;

console.log(result)

