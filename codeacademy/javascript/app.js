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


// let athleteFinalPosition = 'first place';

// switch (athleteFinalPosition) {
//     case 'first place':
//         console.log('You get the gold medal!');
//         break;
//     case 'second place':
//         console.log('You get the silver medal!');
//         break;
//     case 'third place':
//         console.log('You get the bronze medal!');
//         break;
//     default:
//         console.log('No medal awarded.')
//         break;
// }

// Write your function here:
// const greetWorld = () => {
//   return 'Hello, World!';
// }

// console.log(greetWorld());

// const canIVote = age => {
//   if (age >= 18) {
//       return true
//   } else {
//       return false
//   }
// }

// console.log(canIVote(22));

// As a ternary:

// const agreeOrDisagree = (first, second) => (first === second) ? 'You agree!' : 'You disagree!';

// const lifePhase = age => {
//   switch (true) {
//     case age >= 0 && age <= 3:
//       return 'baby';
//     case age >= 4 && age <= 12:
//       return 'child';
//     case age >= 13 && age <= 19:
//       return 'teen';
//     case age >= 20 && age <= 64:
//       return 'adult';
//     case age >= 65 && age <= 140:
//       return 'senior citizen';
//     default:
//       return 'This is not a valid age';
//   }
// }

// console.log(lifePhase(6));

// const finalGrade = (midterm, final, homework) => {
//   if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
//       return 'You have entered an invalid grade.'
//   }
//   let average = (midterm + final + homework) / 3;
//   if (average < 60) {
//       return 'F';
//   }
//   else if (average < 70) {
//       return 'D';
//   }
//   else if (average < 80) {
//       return 'C';
//   }
//   else if (average < 90) {
//       return 'B';
//   } else {
//       return 'A';
//   }
// }

// console.log(finalGrade(34, 68, 81));


// const rollTheDice = () => {
//   // Math.random() gives us a random number from 0 up to, but not including, 1
//   // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
//   // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
//     let die1 = Math.floor(Math.random() * 6 + 1)
//     let die2 = Math.floor(Math.random() * 6 + 1)
//     return die1 + die2
// }

// const calculateWeight = (earthWeight, planet) => {
//   switch (planet) {
//           case 'Mercury':
//               return earthWeight * 0.378;
//           case 'Venus':
//               return earthWeight * 0.907;
//           case 'Mars':
//               return earthWeight * 0.377;
//           case 'Jupiter':
//               return earthWeight * 2.36;
//           case 'Saturn':
//               return earthWeight * 0.916;
//           default:
//               return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
//   }
// }

// console.log(calculateWeight(100, 'Jupiter'));

//sillySentence()

// const sillySentence = (adjective, verb, noun) => {
//   return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
// }

// console.log(sillySentence("happy", "like", "codes"));

// const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
      // let dateToday = new Date();
      // let thisYear = dateToday.getFullYear();
      //The .getFullYear() method is a built-in JavaScript method that belongs to the Date object. It returns the current year as a four-digit number (e.g., 2024).
  
    // It is totally ok if your function used the current year directly!
    
  //     const yearDifference = year - thisYear
  //     const newAge = age + yearDifference
  //     if (newAge > age) {
  //         return `You will be ${newAge} in the year ${year}`
  //     } else if (newAge < 0) {
  //         return `The year ${year} was ${-newAge} years before you were born`
  //     } else {
  //         return `You were ${newAge} in the year ${year}`
  //     }
  // }
  
  
  // console.log(howOld(40, 1983));

//   const whatRelation = percentSharedDNA => {
//     if (percentSharedDNA === 100) {
//         return 'You are likely identical twins.'
//     }
//     if (percentSharedDNA > 34) {
//         return 'You are likely parent and child or full siblings.'
//     }
//     if (percentSharedDNA < 13) {
//         return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
//     }
//     if (percentSharedDNA > 5) {
//         return 'You are likely 1st cousins.'
//     }
//     if (percentSharedDNA >= 2) {
//         return 'You are likely 2nd cousins.'
//     }
//     if (percentSharedDNA > 0) {
//         return 'You are likely 3rd cousins'
//     }
//     return 'You are likely not related.'
// }

// console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

// console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'

// Write your function here:

// const tipCalculator = (quality, totalCost) => {
//   switch (quality) {
//         case 'bad':
//             return 0.05 * totalCost;
//         case 'ok':
//             return 0.15 * totalCost;
//         case 'good':
//             return 0.20 * totalCost;
//         case 'excellent':
//             return 0.30 * totalCost;
//         default:
//             return 0.18 * totalCost;
//     }

// }

// console.log(tipCalculator('bad', 100));

// Write your function here:
// const toEmoticon = (state) => {
//   switch (state) {
//       case 'shrug':
//           return '|_{"}_|';
//       case 'smiley face':
//           return ':)';
//       case 'frowny face':
//           return ':(';
//       case 'winky face':
//           return ';)';
//       case 'heart':
//           return '<3';
//       default:
//           return '|_(* ~ *)_|';
//   }
// }


// console.log(toEmoticon('heart'));
// const isEven = (number)=> 
// {
//   if(number % 2 === 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// const colorMessage = (favoriteColor, shirtColor) => {
//   if(favoriteColor === shirtColor){
//     return 'The shirt is your favorite color!';
//   } else {
//     return 'That is a nice color.';
//   }
// }

const numberDigits = (x) => {
  if (x >= 0 && x < 10) {
    return 'One digit: ' + x;
  } else if (x >= 10 && x < 100) {
    return 'Two digits: ' + x;
  } else {
    return 'The number is: ' + x;
  }
}

console.log(numberDigits(5));   