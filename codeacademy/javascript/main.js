// function getReminder(){
//     console.log('Water the plants.');
//   }
  
//   function greetInSpanish(){
//     console.log('Buenas tardes');
//   }

// call a function

// function sayThanks(){
//     console.log('Thank you for your purchase! We appreciate your business.');
//   }
  
//   sayThanks();
//   sayThanks();
//   sayThanks();

// function monitorCount(rows, columns){
//     let numbers = rows * columns;
//     return numbers;
//   }
  
//   const numOfMonitors = monitorCount(5, 4);
  
//   console.log(numOfMonitors);

// function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   function costOfMonitors(rows, columns){
//     return monitorCount(rows, columns) * 200;
//   }
  
//   const totalCost = costOfMonitors(5, 4);
  
//   console.log(totalCost);

// const plantNeedsWater = function(day){
//     if(day === 'Wednesday'){
//       return true;
//     }else{
//       return false;
//     }
// }
  
// console.log(plantNeedsWater('Tuesday'));

// arrow function

// const plantNeedsWater = day => {
//   if (day === 'Wednesday') {
//     return true;
//   } else {
//     return false;
//   }
// };

//scope

// const city = 'New York City';

// const logCitySkyline = () => {
//   let skyscraper = 'Empire State Building';
//   return 'The stars over the ' + skyscraper + ' in ' + city;
// };

// console.log(logCitySkyline());

//global scope

// const satellite = 'The Moon';

// const galaxy = 'The Milky Way';

// const stars = 'North Star';

// const callMyNightSky = () =>  {
//  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy; 
// };

// console.log(callMyNightSky());

//block scope

// const logVisibleLightWaves = () => {
//     const lightWaves = 'Moonlight';
//     console.log(lightWaves);
  
//   };
  
//   logVisibleLightWaves();
  
//   console.log(lightWaves);

// scope poluution - bad practice
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

  