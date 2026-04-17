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
const ItalianFood = document.getElementById("italian-food-menu");
const EnglishFood = document.getElementById("english-food-menu");
const FoodMenuSelection = [ItalianFood, EnglishFood];
const FoodButtons = [document.getElementById("italian-food-button"), document.getElementById("english-food-button")];

// Drink Tab Variables
const DrinkTab = document.getElementById("drink-menu");
const drinksLiquid = document.getElementById("drink-liquid");
const ColdDrinks = document.getElementById("cold-drinks-menu");
const coldCup = document.getElementById("drink-glass");
const HotDrinks = document.getElementById("hot-drinks-menu");
const hotCup = document.getElementById("drink-cup-top");
const DrinkMenuSelection = [ColdDrinks, HotDrinks];
const DrinkButtons = [document.getElementById("cold-drinks-button"), document.getElementById("hot-drinks-button")];

// Desert Tab Variables
const DessertsTab = document.getElementById("desserts-menu");
const ColdDesserts = document.getElementById("cold-desserts-menu");
const HotDesserts = document.getElementById("hot-desserts-menu");
const DessertsMenuSelection = [ColdDesserts, HotDesserts];
const DessertsButtons = [document.getElementById("cold-desserts-button"), document.getElementById("hot-desserts-button")];

// Variables used throughout the program
const cashStorage = document.getElementById("cash-count");
let moneyCount = 200;
let moneyPerSecond = 0;
let level = 1;
let xp = 0;
let requireXpToLevelUp = 50;
const NavigationMenu = [StaffTab, BoostsTab, FoodTab, DrinkTab, DessertsTab]

// Saves on Refresh
document.addEventListener('DOMContentLoaded', function(){
   cashStorage.innerHTML = `£${moneyCount}<br>£${moneyPerSecond}/s`;
   // document.getElementById("boost-level1").textContent = boost1Level;
   BaristaMenu.style.display = "none";
   ChefMenu.style.display = "none";
   DessertSpecialistMenu.style.display = "none";
   EnglishFood.style.display = "none";
   HotDrinks.style.display = "none";
   drinkMachine.style.display = "none"
});

// Navigation Functions
function Open_menu(tabName) {
   for (let tab of NavigationMenu) {
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
   Open_menu(DrinkTab)};

document.getElementById("desserts-button").onclick = function() {
   Open_menu(DessertsTab)};
document.getElementById("cold-desserts-button").onclick = function() {
   Tab_switch(ColdDesserts, DessertsButtons, DessertsMenuSelection, document.getElementById("cold-desserts-button"))};
document.getElementById("hot-desserts-button").onclick = function() {
   Tab_switch(HotDesserts, DessertsButtons, DessertsMenuSelection, document.getElementById("hot-desserts-button"))};

// Money Spending Class
class Money_Spending {
   constructor(itemName, itemPrice, buttonID) {
       this.itemName = itemName
       this.itemPrice = itemPrice
       this.xpPerClick = itemPrice / 5
       this.buttonID =  buttonID
   }
   Buying_Item(buttonDisappears = false) {
      if (moneyCount >= this.itemPrice) {
         moneyCount -= this.itemPrice;
         console.log(`New total: ${moneyCount}`)
         cashStorage.innerHTML = `£${moneyCount}<br>£${moneyPerSecond}/s`;
         xp += this.xpPerClick;
         if (xp >= requireXpToLevelUp) {
            level += 1;
            xp = xp - requireXpToLevelUp;}
            if (buttonDisappears === true) {
               this.buttonID.style.display = "none"}
               return true;}
      else {
         alert("Not enough cash");
         return false}
   }
};

class Food extends Money_Spending {
   constructor(itemName, itemPrice, buttonID) {
       super(itemName, itemPrice, buttonID);
   }
   Display_foodCounter() {
      pass 
   }
};

 // Food Menu Navigation
document.getElementById("italian-food-button").onclick = function() {
   Tab_switch(ItalianFood, FoodButtons, FoodMenuSelection, document.getElementById("italian-food-button"))};
document.getElementById("english-food-button").onclick = function() {
   Tab_switch(EnglishFood, FoodButtons, FoodMenuSelection, document.getElementById("english-food-button"))};

// Italian Food Selection
const Pizza = new Food("Pizza", 10, document.getElementById("pizza-button"));
document.getElementById("pizza-button").onclick = function() {
   Pizza.Buying_Item()};

const Pasta = new Food("Pasta", 20, document.getElementById("pasta-button"));
document.getElementById("pasta-button").onclick = function() {
   Pasta.Buying_Item()};

// English Food Selection
const FishAndChips = new Food("Fish and Chips", 15, document.getElementById("fish-and-chips-button"));
document.getElementById("fish-and-chips-button").onclick = function() {
   FishAndChips.Buying_Item()};

const FullEnglish = new Food("Full English Breakfast", 20, document.getElementById("full-english-button"));
document.getElementById("full-english-button").onclick = function() {
   FullEnglish.Buying_Item()};

// Drink Machine Functions
class Drinks extends Money_Spending {
   constructor(itemName, itemPrice, buttonID, drinkColor, cupType) {
       super(itemName, itemPrice, buttonID);
       this.drinkColor = drinkColor;
       this.cupType = cupType;
       this.percentageFull = 0
   }
   Drink_Machine() {
      cashRegister.style.display = "none";
      drinkMachine.style.display = "flex";
      DrinkTab.style.display  = "none";
      drinksLiquid.style.backgroundColor = this.drinkColor
      this.percentageFull = 0;
      drinksLiquid.style.height = this.percentageFull + "%";
      if (this.cupType === "hotCup") {
         hotCup.style.display = "block";
         coldCup.style.display = "none";
         document.getElementById("drink-machine-top").style.backgroundColor = "black";
         document.getElementById("pour-drink-button").style.backgroundColor = "white";
         document.getElementById("pour-drink-button").style.color = "black"}
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
            drinksLiquid.style.height = this.percentageFull + "%";
            document.getElementById("pour-drink-button").textContent = "Pour";
        } 
        if (this.percentageFull >= 100) {
            document.getElementById("pour-drink-button").textContent = "Start again";
         }
      }
   }

// Cold drinks Selection
document.getElementById("cold-drinks-button").onclick = function() {
   Tab_switch(ColdDrinks, DrinkButtons, DrinkMenuSelection, document.getElementById("cold-drinks-button"))};
let activeDrink;

const Coke = new Drinks("Coke", 0.5, document.getElementById("coke-button"), "brown", "coldCup");
document.getElementById("coke-button").onclick = function() {
   if (Coke.Buying_Item()) {
      activeDrink = Coke;
      Coke.Drink_Machine();
   }};

const Fanta = new Drinks("Fanta", 0.5, document.getElementById("fanta-button"), "orange", "coldCup");
document.getElementById("fanta-button").onclick = function() {
   if (Fanta.Buying_Item()) {
      activeDrink = Fanta;
      Fanta.Drink_Machine();
   }};

const DrPepper = new Drinks("Dr Pepper", 1, document.getElementById("dr-pepper-button"), "brown", "coldCup");
document.getElementById("dr-pepper-button").onclick = function() {
   if (DrPepper.Buying_Item()) {
      activeDrink = DrPepper;
      DrPepper.Drink_Machine();
   }};

const Water = new Drinks("Water", 0, document.getElementById("water-button"), "lightblue", "coldCup");
document.getElementById("water-button").onclick = function() {
   if (Water.Buying_Item()) {
      activeDrink = Water;
      Water.Drink_Machine();
   }};

document.getElementById("pour-drink-button").onclick = function() {
   activeDrink.Pouring_drink()};

// Hot Drinks Selection
document.getElementById("hot-drinks-button").onclick = function() {
   Tab_switch(HotDrinks, DrinkButtons, DrinkMenuSelection, document.getElementById("hot-drinks-button"))};

const Tea = new Drinks("Tea", 2, document.getElementById("tea-button"), "orange", "hotCup");
document.getElementById("tea-button").onclick = function() {
   if (Tea.Buying_Item()) {
      activeDrink = Tea;
      Tea.Drink_Machine();
   }};

const Coffee = new Drinks("Coffee", 2.5, document.getElementById("coffee-button"), "#8B4513", "hotCup");
document.getElementById("coffee-button").onclick = function() {
   if (Coffee.Buying_Item()) {
      activeDrink = Coffee;
      Coffee.Drink_Machine();
   }};

const HotChocolate = new Drinks("Hot Chocolate", 3, document.getElementById("hot-chocolate-button"), "brown", "hotCup");
document.getElementById("hot-chocolate-button").onclick = function() {
   if (HotChocolate.Buying_Item()) {
      activeDrink = HotChocolate;
      HotChocolate.Drink_Machine();
   }};