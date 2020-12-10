// x = 100;
// while (x <= 200) {
//   if (x % 3 === 0 && x % 4 === 0) {
//     console.log("LoopyLighthouse");
//   } else if (x % 4 === 0) {
//     console.log("Lighthouse");
//   } else if (x % 3 === 0) {
//     console.log("Loopy");
//   }
//   else {
//     console.log(x);
//   }
//   x = x + 1;
// }

// for (const num of nums) {
//   let output = "";

//   if (num % 3 === 0) {
//     output += "Loopy";
//   }
//   if (num % 4 === 0) {
//     output += "Lighthouse";
//   }
//   console.log(output === "" ? num : output);
// }

const loopyLighthouse = function (range, multiples, words) {

  let x = range[0];
  let y = range[1];
  let divByTwo = multiples[0];
  let divByFive = multiples[1];

  while (x <= y) {
    if (x % divByTwo === 0 && x % divByFive === 0) {
      console.log(words[0] + words[1]);
    } else if (x % divByTwo === 0) {
      console.log(words[0]);
    } else if (x % divByFive === 0) {
      console.log(words[1]);
    } else {
      console.log(x);
    }
    x++;
  }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
