// const firstNmae = 'ali';

// console.log(firstNmae, typeof firstNmae); 

// const age = 25;

// console.log(age, typeof age);

// const user = {
//     name :'ali',
//     age : 25
// }

// console.log(typeof user);

// let value = '9';

// console.log();

//covert strig to number
// value = parseInt(value);

// value = +value;

// value = Number(value);

// convert number tot string 

// let value = 30;
// value = value.toString();

// console.log(value.__proto__);

// value = String(value);

//covert string to decimal

// let value = '5.6';

// value = parseFloat(value);

// convert number to boolean
// let value = 'ssstt';

// value = Boolean(value);
// console.log(value, typeof value);

// x = 2;
// // x++;
// x--;

// console.log(x);

// let x = 2;

// let y = '2';

// console.log(x === y);

// let x;

// const firstName = 'alireza';

// const lastName = 'ghorbani';

// x = 'my name is ' + firstName + ' ' + lastName;

// x = `my name is ${firstName} ${lastName} ${ 1 + 2 }`;

// const s = ' google.com  ';
// const s = new String('google');

// console.log(s);


// x = s.length;

// x = s.charAt(1);

// x = s.toUpperCase();
// x = s.toLowerCase();

// x = s.trim();

// x = s.replace('com', 'org');

// x = s.includes('ali');
// x = s.includes('oo');

// x = s.split('');

// console.log(x);
// let x;

// let num = 9;

// x = num.toString().length;

// x = Math.round(11.7);

// x = Math.ceil(11.7);

// x = Math.floor(11.7);

// x = Math.pow(2, 3);
// x = Math.min(2, 3, 9);
// x = Math.max(2, 3, 9);

// x = Math.random() * 10 + 1;
// x = Math.floor(Math.random() * 10 + 1);

// console.log(x);

// const arr = [1, 2, 3, 4, 5];

// const mixed = [1, 'hello', null, true];

// const numbers = new Array(5, 6, 8, 1, 2);

// let x;

// x = numbers[1] + numbers[3];

// x = `first number is ${numbers[0]}`;

// x = numbers.length;

// x = numbers[numbers.length - 1];

// numbers[1] = 10;

// console.log(numbers);
// let x;

// const arr = [1, 2, 3, 4, 5];

// arr.push(10);

// arr.pop();

// arr.unshift(10);
// arr.shift();

// arr.reverse();

// x = arr.includes(50);

// x = arr.indexOf(7);

// x = arr.slice(2, 5);

// x = arr.splice(1, 4);
// x = arr.splice(1, 4).reverse().toString().charAt(0);

// console.log(x);
// let x;
// const numbers = [1, 2, 3, 4, 5];

// const names = ['ali', 'nima', 'liam'];

// numbers.push(names)

// console.log(numbers[5][2]);

// const arr = [numbers, names];

// x = numbers.concat(names);

//spread operator

// x = [...numbers, ...names];

// const arr2 = [1, 2, [3,4], 5, [6,7]];

// x = arr2.flat();

// // x = Array.isArray(numbers);

// // x = Array.from('1234');

// const a = 1, b = 2, c = 3;

// x = Array.of(a, b, c);
// console.log(x);
// let x;

// const person = {
//     name : 'ali',
//     age : 30,
//     address: {
//         city : 'paris'
//     },
//     numbers: [1, 2, 3, 4]
// };

// x = person.numbers[1];

// person.name = "maria";

// x = person.name;

// delete person.age;

// person.isAdmin = true;

// console.log(person);

const user = {
    adddress : {
        city: {
            id : 1,
            name : 'london'

        }
    }
}

// console.log(user.adddress.city.name);

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};

console.log(obj3);

