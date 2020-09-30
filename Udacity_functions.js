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