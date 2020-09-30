let price = 15.00 // price of the hamer//
let money = 20.00 //how much money do I have?//

if (money >= price) {
  console.log("Buy the hammer");
} else {
  console.log("don't buy the hammer");
};

let a = 1;
let b = 2;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

let weather = "rain";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

money = 100.50;
price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}

let runner = "Kendyll";
let position = 2;
let medal;

if (position === 1) {
  medal = "gold";
} else if (position === 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

let musicians = 0;

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else if (musicians >= 5) {
  console.log("this is a large group");
}

/* ****************************************** */
var room = "dining room";
var suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/
var weapon = "";  // Initial value
var solved = false;

if (room === 'ballroom' && suspect === "Mr. Kalehoff") {
  weapon = 'poison';
  solved = true;
}
else if (room === 'gallery') {
  weapon = 'trophy';
  if (suspect === "Ms. Van Cleve")
    solved = true;
}
else if (room === 'billiards room') {
  weapon = 'pool stick';
  if (suspect === "Mrs. Sparr")
    solved = true;
}
else if (room === 'dining room') {
  weapon = 'knife';
  if (suspect === "Mr. Parkes")
    solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

/* ****************************************** */

let balance = 325;
let isActive = false;
let checkBalance = true;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2));
  } else if (isActive && balance === 0) {
    console.log("Your account is empty");
  } else if (isActive && balance < 0) {
    console.log("Your balance is negative. Please contact bank");
  } else if (!isActive) {
    console.log("Your account is no longer active.")
  }
} else {
  console.log("Thank you. Have a nice day!");
}


/*
    if flavor is set to vanilla or chocolate and
    if vessel is set to cone or bowl and
    if toppings is set to sprinkles or peanuts

    If the above conditions are true, then print out:
I'd like two scoops of __________ ice cream in a __________ with __________.
*/

let flavor = "strawberry";
let vessel = "cone";
let toppings = "cookies";

if ((flavor === 'vanilla' || flavor === 'chocolate') && (vessel === 'cone' || vessel === 'bowl') && (toppings === 'sprinkles' || toppings === 'peanuts')) {
  console.log("I\'d like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

var size = "NA";

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  size = "S";
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  size = "M";
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
  size = "L";
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
  size = "XL";
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
  size = "2XL";
}
else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
  size = "3XL";
}
else {
  size = "NA";
}
console.log(size);

if ("") {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

/*
"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals

Use the eatsPlants and eatsAnimals variables to test your code.

TIP: Make sure to test your code with different values. For example,

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.
*/

var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category);

var tier = "none";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);


let education = "no high school diploma";
let salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");

var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}

x = 1;
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  }
  else {
    console.log(x);
  }
  x = x + 1;
}

var num = 99;

while (num >= 1) {
  // Last iteration. Note occurances of bottle, bottle, bottleS
  if (num === 1) {
    console.log(num + " bottle of juice on the wall! "
      + num + " bottle of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  }
  // Second-last iteration. Note occurances of bottleS, bottleS, bottle
  else if (num === 2) {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottle of juice on the wall!");
  }
  // All other iterations. Note occurances of bottleS, bottleS, bottleS
  else {
    console.log(num + " bottles of juice on the wall! "
      + num + " bottles of juice! Take one down, pass it around... "
      + (num - 1) + " bottles of juice on the wall!");
  }
  num = num - 1;
}

var n = 60;

// While loop with a stop condition
while (n >= 0) {
  if (n === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }
  else if (n === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  else if (n === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (n === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if (n === 6) {
    console.log("Main engine start");
  }
  else if (n === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-" + n + " seconds");
  }

  //Never forget to decrement/increment the iteration variable in a while loop
  // Otherwise, you loop will run infinite iterations
  n = n - 1;
}

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

for (let row = 0;  row <= 25; row++) {
  for (let seat = 0; seat <= 99; seat ++) {
    console.log(row+"-"+seat);
  }
}