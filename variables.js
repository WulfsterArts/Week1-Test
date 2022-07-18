console.log("All Around the World".charAt(7).toUpperCase())

//let and var are for valuables that can be changed
//const is a variable that cannot be changed
//let is a more modern version of var. var is outdated but still used occasionally

//Arithmetic Operators 

//Assignment operators

let i = 10;
i = i+=2;

console.log(i)

let favouriteDrink ="coffee";
console.log(favouriteDrink);

console.log("My favourite drink is " + favouriteDrink);

let favDrink = "coffee";
console.log(`My favourite drink is ${favDrink}`)
// //Use backticks to put some code inside strings, like f strings in python

//Activities
//1
let username = "Eve";
let age= 25;
let favColour = "Light Blue";
console.log(`${username} is ${age} and their favourite colour is ${favColour}.`)
//stretch
username = "Dawn";
age = 26;
favColour = "Green";
console.log(`Next year, ${username} will be ${age} and their favourite colour will be ${favColour}.`)

//2
let breakfast = "A Fried Egg Butty";
let lunch = "Cheeseburger and Chips";
let dinner = "A Tuna Pasta bake";
//stretch
console.log (`Today I had ${breakfast} at breakfast, ${lunch} at lunch, and ${dinner} for dinner.`)

breakfast = "A Can of Red Bull";
lunch = "A Cheese and Ham Sandwich";
dinner = "Cheese Pizza";

console.log (`Tomorrow i'll have ${breakfast}, ${lunch}, and then ${dinner}.`)

//3
let date1 = new Date();
let date2 = new Date("03/02/2023");
let diffrenceInTime = date2.getTime() - date1.getTime();
let msInDay = (1000 * 3600 * 24);
var diffrenceInDays = diffrenceInTime / msInDay;
console.log(`There are ${Math.ceil(diffrenceInDays)} days until my next birthday`);


//4
let space1 = "X" ;
let space2 = "O";
let space3 = " ";
let space4 = "X";
let space5 = "X";
let space6 = " ";
let space7 = "O";
let space8 = " ";
let space9 = " ";

console.log(`   |   |  `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log(`   |   |   `);
console.log(`------------`);
console.log(`   |   |   `);
console.log(` ${space4} | ${space5} | ${space6} `);
console.log(`   |   |   `);
console.log(`------------`);
console.log(`   |   |   `);
console.log(` ${space7} | ${space8} | ${space9} `);
console.log(`   |   |   `);

if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}
