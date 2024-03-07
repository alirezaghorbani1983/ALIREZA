/*
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));
*/

/*var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);
*/

/*
//constant variable
const entree = "Enchiladas";
console.log(entree);

entree = "Tacos";

let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


//increment en decrement operator

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
console.log(gainedDollar);

lostDollar--;
console.log(lostDollar);

*/

/*
//concatenation
let favoriteAnimal = "dog";
console.log('My favorite animal: ' + favoriteAnimal);
*/

/*
let hungerLevel = 7;

if (hungerLevel > 7) {
    console.log('Time to eat!')
} else {
    console.log('We can eat later!')
}
*/
/*
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}
*/

/*

let username = ''; // Declares a variable named username and assigns an empty string to it.
let defaultName; // Declares a variable named defaultName without assigning a value to it.

if (username) { // Checks if the username variable has a truthy value. Since it's an empty string, it's considered falsy.
  defaultName = username; // If username is truthy, assign its value to defaultName.
} else {
  defaultName = 'Stranger'; // If username is falsy, assign the string 'Stranger' to defaultName.
}

console.log(defaultName); // Prints the value of defaultName to the console. In this case, it prints 'Stranger'.
*/
let tool = 'ruler';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


//ternary operator

let isLocked = false;
/*
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
*/

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


//ternary operator - second example
let isCorrect = true;
/*
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
*/

/*
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// ternary - a bit complicated
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
/*
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
*/

/*
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}
*/

/*
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.')
        break;
}
/*