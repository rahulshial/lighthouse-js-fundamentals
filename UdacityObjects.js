var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },
   close: function() {
     if (umbrella.isOpen === true) {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    } else {
      umbrella.isOpen = false;
      return "The umbrella is already closed!";
    }
   }
};

console.log(umbrella.open());
console.log(umbrella.open());
console.log(umbrella.open());
console.log(umbrella.close());
console.log(umbrella.close());
console.log(umbrella.close());

let breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast.name);

let savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    let verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function () {
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
  }
};

console.log(savingsAccount.print());

let facebookProfile = {
  name: "Rahul",
  friends: 200,
  messages: ["Message 1", "Message 2", "Message 3"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends + 1;
    //friends += 1; // this statement is equivalent to the above
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends = facebookProfile.friends - 1;
  }
};

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});


