/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";
// Your code here...
let stringJ = string1.indexOf("j");

console.log(typeof stringJ);
console.log(stringJ);



/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";
// Your code here...
let letterC = string2.charAt(2);
let letterO = string2.slice(-1);
let letterL = string2.slice(-2,-1);
let wordCool = letterC + letterO.repeat(2)+ letterL;
console.log(letterC);
console.log(letterO);
console.log(letterL);
console.log(wordCool);



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
let sentence = string3.repeat(4) + "Batman!";
console.log(sentence);



/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
let wordKiwi = fruit.search("kiwi");
console.log(wordKiwi);

let myFavouriteWord = fruit.slice(32,36);
console.log(myFavouriteWord);


/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";
// Check the first headline
// Your code here ...
if(funnyHeadline1.includes("oxygen")){
console.log("The string includes the word 'oxygen'");
}
else{
console.log("The string does not include the word 'oxygen'");
}

// Check the second headline
// Your code here ...
if(funnyHeadline2.includes("oxygen")){
console.log("The string includes the word 'oxygen'");
}
else{
console.log("The string does not include the word 'oxygen'");
}


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
let lastLetter = string4.slice(-1);
let lastLetterString = lastLetter.toString();
console.log(string4.length,lastLetterString);
console.log(typeof lastLetterString,typeof lastLetterString);

// b) Print the last character in the string
// Your code here ...
