//Sleep Debt Calculator mini-project

// get hours of sleep 

const getSleepHours = day => {
    switch (day.toLowerCase()) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 6;
      case 'thursday':
        return 8;
      case 'friday':
        return 7;
      case 'saturday':
        return 8;
      case 'sunday':
        return 7;
      default:
        return 'Invalid day';
    }
};
 
  
const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');


const getIdealSleepHours = () => {
let idealHours = 8;
return idealHours * 7;
};

// console.log(getIdealSleepHours());
// console.log(getActualSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('you\'ve the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours){
    console.log('you\'ve got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed this week');
  } else if (actualSleepHours < idealSleepHours){
    console.log('you need more rest because you\'ve slept ' +(idealSleepHours - actualSleepHours) + ' hours fewer than needed this week');
  } else {
    console.log('Error, something went wrong. check your code')
  }
};

calculateSleepDebt();
  