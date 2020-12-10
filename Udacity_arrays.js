var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

// your code goes here
var crew = new Array(captain, second, pilot, companion, mercenary, mechanic);

// Another method
// var crew = [captain, second, pilot, companion, mercenary, mechanic];

// Print
// console.log(crew);

//Add new members
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

// Print
// console.log(crew);


var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); 
// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and 
//"creme de leche" starting at index 1
// console.log(donuts);

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"Purple");
// console.log(rainbow);

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

let hasEnoughPlayers = function(team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
}

// console.log(hasEnoughPlayers(team));


// the variable `i` is used to step through each element in the array
// for (let i = 0; i < donuts.length; i++) {
//     donuts[i] += " hole";
//     donuts[i] = donuts[i].toUpperCase();
// }
// console.log(donuts);

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

console.log(donuts);

let improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
// console.log(donuts);
// console.log(improvedDonuts);

let test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 
  36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

  test.forEach(function(number, index){
    if (number % 3 === 0) {
      test[index] += 100;
    }
  })
  // console.log(test);

let bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

let totals = bills.map(function(element){
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);

  return element;
})

// console.log(totals);

let donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (let row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (let column = 0; column < donutBox[row].length; column++) {
    // console.log(donutBox[row][column]);
  }
}

let numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++) {
  for (let col = 0; col < numbers[row].length; col++) {
    if (numbers[row][col] % 2 === 0) {
      numbers[row][col] = "even";
    } else {
      numbers[row][col] = "odd";
    }
  }
}

console.log(numbers);




