// Set prices
const beerCost = 6.25;
const burgerCost = 4.75;
const popCost = 3.0;

// Define and output account balance
let accountBalance = 15.75;
const outputBalance = document.querySelector(".balance");
outputBalance.textContent = accountBalance.toFixed(2);

// Drink beer
const beerBalance = function () {
  accountBalance = accountBalance - beerCost;
  outputBalance.textContent = accountBalance.toFixed(2);
};
const beerButton = document.querySelector(".drink-beer");
beerButton.addEventListener("click", beerBalance);

// Eat burger
const burgerBalance = function () {
  accountBalance = accountBalance - burgerCost;
  outputBalance.textContent = accountBalance.toFixed(2);
};
const burgerButton = document.querySelector(".eat-burger");
burgerButton.addEventListener("click", burgerBalance);

// Drink pop
const popBalance = function () {
  accountBalance = accountBalance - popCost;
  outputBalance.textContent = accountBalance.toFixed(2);
};
const drinkButton = document.querySelector(".drink-pop");
drinkButton.addEventListener("click", popBalance);
