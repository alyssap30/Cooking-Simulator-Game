// Different Counter Elements
const drinkMachine = document.getElementById("drink-machine")
const cashRegister = document.getElementById("cash-register")
cashRegister.style.display = "flex";

//Staff Menu Variables
const StaffTab = document.getElementById("staff-menu");
const ManagerMenu = document.getElementById("manager-menu");
const BaristaMenu = document.getElementById("barista-menu");
const ChefMenu = document.getElementById("chef-menu");
const DessertSpecialistMenu = document.getElementById("dessert-specialist-menu");
const StaffMenuSelection = [ManagerMenu, BaristaMenu, ChefMenu, DessertSpecialistMenu];
const StaffButtons = [document.getElementById("manager-button"), document.getElementById("barista-staff-button"), document.getElementById("chef-staff-button"), document.getElementById("dessert-staff-button")];

// Boosts Variables
const BoostsTab = document.getElementById("boosts-menu");

// Food Tab Variables
const FoodTab = document.getElementById("food-menu");
const italianFood = document.getElementById("italian-food-menu");
const englishFood = document.getElementById("english-food-menu");
const FoodMenuSelection = [italianFood, englishFood];
const FoodButtons = [document.getElementById("italian-food-button"), document.getElementById("english-food-button")];
const allFoods = ["Pizza", "Pasta", "Fish and Chips", "Full English Breakfast"];

// Drink Tab Variables
const drinkTab = document.getElementById("drink-menu");
const coldDrinks = document.getElementById("cold-drinks-menu");
const hotDrinks = document.getElementById("hot-drinks-menu");
const drinkMenuSelection = [coldDrinks, hotDrinks];
const drinkButtons = [document.getElementById("cold-drinks-button"), document.getElementById("hot-drinks-button")];
const allDrinks = ["Water", "Coke", "Fanta", "Dr Pepper", "Tea", "Coffee", "Hot Chocolate"];
const drinksLiquidCold = document.getElementById("drink-liquid-cold");
const drinksLiquidHot = document.getElementById("drink-liquid-hot")
const coldCup = document.getElementById("drink-glass");
const hotCup = document.getElementById("drink-cup");
let drinkAccuracy = 0;

// Desert Tab Variables
const dessertsTab = document.getElementById("desserts-menu");
const coldDesserts = document.getElementById("cold-desserts-menu");
const hotDesserts = document.getElementById("hot-desserts-menu");
const dessertsMenuSelection = [coldDesserts, hotDesserts];
const dessertsButtons = [document.getElementById("cold-desserts-button"), document.getElementById("hot-desserts-button")];
const allDesserts = ["Ice cream", "Cheesecake", "Chocolate Brownie", "Apple Pie"]

// Order Menu Variables 
const orderTab = document.getElementById("order-menu")
let randomFood;
let randomDessert;
let randomDrink;
let generatedOrder = false;

// Variables used throughout the program
const cashStorage = document.getElementById("cash-count");
let moneyCount = 200;
let moneyPerSecond = 0;
let level = 1;
let moneyMultiplier = 0.1;
let xp = 0;
let requireXpToLevelUp = 50;
const navigationMenu = [StaffTab, BoostsTab, FoodTab, drinkTab, dessertsTab, orderTab]
let cart = [];

// Saves on Refresh
document.addEventListener('DOMContentLoaded', function(){
   cashStorage.innerHTML = `£${moneyCount}<br>£${moneyPerSecond}/s`;
   // document.getElementById("boost-level1").textContent = boost1Level;
   BaristaMenu.style.display = "none";
   ChefMenu.style.display = "none";
   DessertSpecialistMenu.style.display = "none";
   englishFood.style.display = "none";
   hotDrinks.style.display = "none";
   drinkMachine.style.display = "none"
});

// Navigation Functions
function Open_menu(tabName) {
   for (let tab of navigationMenu) {
       if (tab !== tabName) {
           tab.style.display = "none"}
       else
           {if (tabName.style.display === "block") {
               tabName.style.display = "none"}
           else {
               tabName.style.display = "block";}}}}

function Tab_switch(tabName, ButtonGroup, MenuSelection, Button) {
   for (let menu of MenuSelection) {
       menu.style.display = "none";}
   for (let button of ButtonGroup) {
       button.style.borderBottom = "black 2px solid";}
   tabName.style.display = "block";
   Button.style.borderBottom = "red 2px solid";}

// Navigation Buttons
document.getElementById("staff-button").onclick = function(){
   Open_menu(StaffTab)};

document.getElementById("manager-button").onclick = function(){
   Tab_switch(ManagerMenu, StaffButtons, StaffMenuSelection, document.getElementById("manager-button"))};
document.getElementById("barista-staff-button").onclick = function(){
   Tab_switch(BaristaMenu, StaffButtons, StaffMenuSelection, document.getElementById("barista-staff-button"))};
document.getElementById("chef-staff-button").onclick = function(){
   Tab_switch(ChefMenu, StaffButtons, StaffMenuSelection, document.getElementById("chef-staff-button"))};
document.getElementById("dessert-staff-button").onclick = function(){
   Tab_switch(DessertSpecialistMenu, StaffButtons, StaffMenuSelection, document.getElementById("dessert-staff-button"))};

document.getElementById("boosts-button").onclick = function(){
   Open_menu(BoostsTab)};

document.getElementById("food-button").onclick = function() {
   Open_menu(FoodTab)};

document.getElementById("drinks-button").onclick = function() {
   Open_menu(drinkTab)};

document.getElementById("desserts-button").onclick = function() {
   Open_menu(dessertsTab)};

// Money Spending Class
class Money_Spending {
   constructor(itemName, itemPrice, buttonID) {
       this.itemName = itemName
       this.itemPrice = itemPrice
       this.xpPerClick = itemPrice / 5
       this.moneyEarnt = itemPrice * moneyMultiplier
       this.buttonID =  buttonID
   }
   Buying_Item(buttonDisappears = false) {
      if (moneyCount >= this.itemPrice) {
         moneyCount -= this.itemPrice;
         console.log(`New total: ${moneyCount}`)
         cashStorage.innerHTML = `£${moneyCount}<br>£${moneyPerSecond}/s`;
         xp += this.xpPerClick;
         let levelPercentageComplete = (xp / requireXpToLevelUp) * 100;
         document.getElementById("level-progress").style.width = levelPercentageComplete + "%";
         if (xp >= requireXpToLevelUp) {
            level += 1;
            document.getElementById("level-number").textContent = `Level ${level}`
            xp = xp - requireXpToLevelUp;
            levelPercentageComplete = (xp / requireXpToLevelUp) * 100
            document.getElementById("level-progress").style.height = levelPercentageComplete + "%"
         }
            if (buttonDisappears === true) {
               this.buttonID.style.display = "none"}
               return true;}
      else {
         alert("Not enough cash");
         return false}
   }};

// Food Class Declaration
class Food extends Money_Spending {
   constructor(itemName, itemPrice, buttonID) {
       super(itemName, itemPrice, buttonID);
   }
   Display_foodCounter() {}};

 // Food Menu Navigation
document.getElementById("italian-food-button").onclick = function() {
   Tab_switch(italianFood, FoodButtons, FoodMenuSelection, document.getElementById("italian-food-button"))};
document.getElementById("english-food-button").onclick = function() {
   Tab_switch(englishFood, FoodButtons, FoodMenuSelection, document.getElementById("english-food-button"))};

// Italian Food Selection
const Pizza = new Food("Pizza", 10, document.getElementById("pizza-button"));
const Pasta = new Food("Pasta", 20, document.getElementById("pasta-button"));
const italianItems = {"pizza-button": Pizza, "pasta-button": Pasta}

italianFood.addEventListener('click', function(event) {
   const clickedButton = event.target
   let id = clickedButton.id
   italianItems[id].Buying_Item()
});
   
// English Food Selection
const fishAndChips = new Food("Fish and Chips", 15, document.getElementById("fish-and-chips-button"));
const fullEnglish = new Food("Full English Breakfast", 20, document.getElementById("full-english-button"));
const englishItems = {"fish-and-chips-button": fishAndChips, "full-english-button": fullEnglish}

englishFood.addEventListener('click', function(event) {
   const id = event.target.id
   let item = italianItems[id]
   if (item){item.Buying_Item()}
});

// Drink Machine Functions
class Drinks extends Money_Spending {
   constructor(itemName, itemPrice, buttonID, drinkColor, cupType) {
      super(itemName, itemPrice, buttonID);
      this.drinkColor = drinkColor;
      this.cupType = cupType;
      this.drinkLiquid = null;
      this.percentageFull = 5;
   }
   Drink_Machine() {
      cashRegister.style.display = "none";
      drinkMachine.style.display = "flex";
      drinkTab.style.display  = "none";
      if (this.cupType === "hotCup") {
         this.drinkLiquid = drinksLiquidHot
      }
      else {
         this.drinkLiquid = drinksLiquidCold
      }
      this.drinkLiquid.style.backgroundColor = this.drinkColor
      this.drinkLiquid.style.height = this.percentageFull + "%";
      if (this.cupType === "hotCup") {
         hotCup.style.display = "block";
         coldCup.style.display = "none";
         document.getElementById("drink-machine-top").style.backgroundColor = "black";
         document.getElementById("pour-drink-button").style.backgroundColor = "white";
         document.getElementById("pour-drink-button").style.color = "black";
         document.getElementById("done-drink-button").style.backgroundColor = "white";
         document.getElementById("done-drink-button").style.color = "black";
         document.getElementById("drink-nozzle").style.backgroundColor = "grey"
      }
      else {
         coldCup.style.display = "block";
         hotCup.style.display = "none";
         document.getElementById("drink-machine-top").style.backgroundColor = "red";
         document.getElementById("pour-drink-button").style.backgroundColor = "rgb(246, 76, 46)";
         document.getElementById("pour-drink-button").style.color = "white";
      }};

   Pouring_drink() {
      if (this.percentageFull < 75) {
         this.percentageFull += 5;
         this.drinkLiquid.style.height = this.percentageFull + "%";
         document.getElementById("pour-drink-button").textContent = "Pour";
      } 
      else if (this.percentageFull === 75) {
         this.document.getElementById("pour-drink-button").textContent = "Start again";}
      }

   Done_Pouring_Drink() {
      drinkAccuracy = (this.percentageFull / 75) * 100;
      cashRegister.style.display = "flex";
      drinkMachine.style.display = "none";
      this.percentageFull = 0;
      this.drinkLiquid.style.height = this.percentageFull + "%";
      cart.push(this.itemName);
      console.log(cart);
   }}

// Drinks Menu Navigation 
document.getElementById("cold-drinks-button").onclick = function() {
   Tab_switch(coldDrinks, drinkButtons, drinkMenuSelection, document.getElementById("cold-drinks-button"))};
document.getElementById("hot-drinks-button").onclick = function() {
   Tab_switch(hotDrinks, drinkButtons, drinkMenuSelection, document.getElementById("hot-drinks-button"))};

// Drink Machine Fuctionality
let activeDrink;
document.getElementById("pour-drink-button").onclick = function() {
   activeDrink.Pouring_drink()};

document.getElementById("done-drink-button").onclick = function() {
   activeDrink.Done_Pouring_Drink()};

// Cold Drinks Selection
const Coke = new Drinks("Coke", 0.5, document.getElementById("coke-button"), "rgb(94, 48, 0)", "coldCup");
const Fanta = new Drinks("Fanta", 0.5, document.getElementById("fanta-button"), "orange", "coldCup");
const drPepper = new Drinks("Dr Pepper", 1, document.getElementById("dr-pepper-button"), "rgb(72, 43, 11)", "coldCup");
const Water = new Drinks("Water", 0, document.getElementById("water-button"), "lightblue", "coldCup");
const coldDrinkItems = {"coke-button": Coke, "fanta-button": Fanta, "dr-pepper-button": drPepper, "water-button": Water};

coldDrinks.addEventListener('click', function(event) {
   const clickedButton = event.target
   let id = clickedButton.id
   activeDrink = coldDrinkItems[id]
   if (activeDrink.Buying_Item()) {
      activeDrink.Drink_Machine()
}});

// Hot Drinks Selection
const Tea = new Drinks("Tea", 2, document.getElementById("tea-button"), "rgb(133, 94, 26)", "hotCup");
const Coffee = new Drinks("Coffee", 2.5, document.getElementById("coffee-button"), "#8B4513", "hotCup");
const hotChocolate = new Drinks("Hot Chocolate", 3, document.getElementById("hot-chocolate-button"), "brown", "hotCup");
const hotDrinkItems = {"tea-button": Tea, "coffee-button": Coffee, "hot-chocolate-button": hotChocolate}

hotDrinks.addEventListener('click', function(event) {
   const clickedButton = event.target
   let id = clickedButton.id
   activeDrink = hotDrinkItems[id]
   if (activeDrink.Buying_Item()) {
      activeDrink.Drink_Machine()
}});

// Desserts Class Declaration 
class Dessert extends Money_Spending {
   constructor(itemName, itemPrice, buttonID) {
       super(itemName, itemPrice, buttonID);
   }
   Display_dessertMachine() {}};

// Desserts Menu Navigation
document.getElementById("cold-desserts-button").onclick = function() {
   Tab_switch(coldDesserts, dessertsButtons, dessertsMenuSelection, document.getElementById("cold-desserts-button"))};
document.getElementById("hot-desserts-button").onclick = function() {
   Tab_switch(hotDesserts, dessertsButtons, dessertsMenuSelection, document.getElementById("hot-desserts-button"))};

// Cold Desserts Selection
const iceCream = new Dessert("Ice Cream", 2, document.getElementById("ice-cream-button"))
const cheeseCake = new Dessert("Cheesecake", 10, document.getElementById("cheesecake-button"))
const coldDessertItems = {"ice-cream-button": iceCream, "cheesecake-button": cheeseCake}

coldDesserts.addEventListener('click', function(event) {
   const clickedButton = event.target
   let id = clickedButton.id
   coldDessertItems[id].Buying_Item()
});

// Hot Desserts Selection
const chocolateBrownie = new Dessert("Chocolate Brownie", 5, document.getElementById("chocolate-brownie-button"))
const applePie = new Dessert("Apple Pie", 6, document.getElementById("apple-pie-button"))
const hotDessertItems = {"chocolate-brownie-button": chocolateBrownie, "apple-pie-button": applePie}

hotDesserts.addEventListener('click', function(event) {
   const clickedButton = event.target
   let id = clickedButton.id
   hotDessertItems[id].Buying_Item()
});

// Order Generation Functions

document.getElementById("generate-order-btn").onclick = function() {
   Open_menu(orderTab)
   if (generatedOrder === false) {
      generatedOrder = true;
      randomFood = allFoods[Math.floor(Math.random() * allFoods.length)];
      document.getElementById("random-food-display").textContent = `Food: ${randomFood}`;
      randomDrink = allDrinks[Math.floor(Math.random() * allDrinks.length)];
      document.getElementById("random-drink-display").textContent = `Drink: ${randomDrink}`;
      randomDessert = allDesserts[Math.floor(Math.random() * allDesserts.length)];
      document.getElementById("random-dessert-display").textContent = `Dessert: ${randomDessert}`;
   }
}
document.getElementById("close-order-btn").onclick = function() {
   orderTab.style.display = "none"
}

document.getElementById("submit-order-btn").onclick = function() {
   if (cart.includes(randomFood)) {
      document.getElementById("random-food-display").style.color = "green"
   }  
   if (cart.includes(randomDrink)) {
      document.getElementById("random-drink-display").style.color = "green"
   }
   if (cart.includes(randomDessert)) {
      document.getElementById("random-dessert-display").style.color = "green"
   }
   if (cart.includes(randomFood, randomDrink, randomFood)) {
      console.log("Order Complete");
      cart = []
      generatedOrder = false
      moneyCount = (randomDrink.moneyEarnt * drinkAccuracy)
   }
}