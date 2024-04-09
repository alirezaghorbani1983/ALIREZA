// is before defined first line code
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;

let runnerAge = 10;

if (earlyRegister && runnerAge > 18){
  raceNumber += 1000;
}

if (earlyRegister && runnerAge > 18){
  console.log(`Race begins at 9:30 AM . Your race number is : ${raceNumber}.`);
} else if(!earlyRegister && runnerAge > 18){
  console.log(`Race begins at 11:00 AM . Your race number is : ${raceNumber}.`);
}else if(runnerAge < 18){
  console.log(`Race begins at 11:00 AM . Your race number is : ${raceNumber}.`);
} else {
    console.log('please, call the registeration department!');
}