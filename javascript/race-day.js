let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber);


let earlyRegister = true;

let runnerAge = 10;

if (earlyRegister === true && runnerAge > 18) {
    raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister === true) {
    console.log('Begin at 9:30 AM')
} else if (runnerAge > 18 && earlyRegister === false) {
    console.log('Begin at 11:00 AM')
} else if (runnerAge < 18) {
    console.log('Begin at 12:30 AM')
}