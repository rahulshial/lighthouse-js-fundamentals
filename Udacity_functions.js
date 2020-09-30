function reverseString(reverseMe) {
  let reversed = "";
  for (let i = reverseMe.length -1; i >= 0; i--) {
    reversed += reverseMe[i];
  } 
  return reversed;
}

let setString = "malayalam";
console.log("The reverse of " + setString + " is " + reverseString(setString));

function laugh(num) {
  const laughValue = "ha";
  let returnLaugh = "";
  for (let i = 0; i < num; i++) {
    returnLaugh += laughValue;
  }
  returnLaugh += "!";

  return returnLaugh;
}

console.log(laugh(10));

function isPrime(integer) {
  for (let x = 2; x < integer; x++) {
    if(integer % x === 0) {
      console.log(integer + " is divisible by " + x);
      return "not a prime";
    }
  }
  return "is a prime";
}

console.log(isPrime (49));

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "hello";
}

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(width) {
  let triangle = ""
  for (let lineNumber = 1; lineNumber <= width; lineNumber++) {
      triangle += makeLine(lineNumber);
  }
  return triangle;
}

console.log(buildTriangle(10));

// callback functions
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));

//Inline Function expressions
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

let numberOfLaughs = function (num) {
  const laughValue = "ha";
  let returnLaugh = "";
  for (let i = 0; i < num; i++) {
    returnLaugh += laughValue;
  }
  returnLaugh += "!";

  return returnLaugh;
}

console.log(numberOfLaughs(10));

// inline function call
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(4));
}

emotions ("happy", function(num) {
  let sound = ""; // Local variable
  //Iterate
  for (let i = 0 ; i < num ; i++) {
      sound += "ha" ;  
  }
  sound += "!"; 
  return sound; 
});
