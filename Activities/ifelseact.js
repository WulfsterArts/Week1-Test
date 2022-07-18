//if, else, switch

//1
let age = 17;

let canDrink = (age > 17) ? `Yes, I can serve you` : `You're not old enough`

console.log(canDrink)

//Stretch
let age2 = 18;
let country = "UK";

if(age2 > 17 && country == "UK"){
    console.log("Yes, I can serve you")
} else {
    console.log("I can't serve you, sorry.")
}

//2
let pizzaTopping = "pineapple"
 
switch(pizzaTopping){
    case "ham":
    case "cheese":
    case "pepperoni":
    case "beef":
console.log(`I like ${pizzaTopping} on my pizza.`);
    break;
    case "chicken":
console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
    break;
    default:
console.log(`I'd rather not have ${pizzaTopping} on my pizza`);
    }

//3
let password = "password"

if (password.length >= 8){
    console.log(password);
}  else {
    console.log('password to short');
}

//Stretch
let num0 = 10;

if (num0 % 3 == 0 || num0 % 5 == 0){
    console.log(`${num0} can be divided by 3 or 5`)
}else {
    console.log(`${num0} is not divisible by 3 or 5`)};

//4
let num1 = 15;

if (num1 % 3 == 0 && num1 % 5 == 0){
    console.log("fizz buzz")
}else if (num1 % 5 == 0) {
    console.log("buzz")
} else if (num1 % 3 == 0){
    console.log("fizz")
} else {
    console.log(num1)
}

//5
num3 = "20202"

numArray = num3.split("")
numArrayReversed = numArray.reverse()
numReversed = numArrayReversed.join("")

if (num3 == numReversed) {
  console.log("Yep, that's a palindrome.")
} else {
  console.log("No, that's not a palindrome.")
}

//6
let time = 7;
let placeOfWork = "Office";
let townOfHome = "Liverpool";

if (time == 7 && townOfHome == "Liverpool"){
    console.log("I'm at home.");
} else if (time == 8){
    ("I'm off to work");
} else if (time == 9 && placeOfWork == "Office"){
    console.log("I'm at work");
} else {
    console.log("I'm not sure where I am");
}

//7
let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let vowels =  ['a','e','i','o','u'];

let arr = myString.split("").reverse(); 
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

if(indexOfLastVowelInReverse != -1) {
  let index = myString.length-1-indexOfLastVowelInReverse
  console.log(`Last vowel found at index ${index}: ${myString[index]}`)
}

//8
function firstLastLetters(word)
    {
        let i = word.length;
        if (i < 2)
            return -1;
        if (word[0] == word[i - 1])
            return 1;
        else
            return 0;
    }

    let word = "liverpool";
    let res = firstLastLetters(word);
 
    if (res == -1)
      console.log("Invalid Input");
    else if (res == 1)
      console.log("Equal");
    else
      console.log("Not Equal");

//9
let num5 = 10;
let num6 = 6;

if (num5 % 2 == 0 && num6 % 2 == 0){
  console.log("The numbers are even.");
}else{
  console.log(num5 * num6);
}