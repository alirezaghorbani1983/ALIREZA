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

// const user = {
//     adddress : {
//         city: {
//             id : 1,
//             name : 'london'

//         }
//     }
// }

// console.log(user.adddress.city.name);

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};

// const obj3 = {...obj1, ...obj2};

// // console.log(obj3);

// const todos = [
//     {
//         id : 1,
//         title : 'todo 1' 
//     },
//     {
//         id : 2,
//         title : 'todo 2' 
//     },
//     {
//         id : 3,
//         title : 'todo 3' 
//     }

// ];

// console.log(todos[1].title);
// let x;

// const user1 = {
//     name: 'ali',
//     age : 20,
//     adddress : {
//         city: {
//             id : 1,
//             name : 'london'

//         }
//     }
// }

// x = Object.keys(user1);
// x = Object.keys(user1.adddress);

// x = Object.keys(user1).length;

// x = x = Object.values(user1);

// x = Object.entries(user1);

// x = Object.hasOwnProperty('name');


// console.log(x);

// const firstName = 'ali';
// const lastName = 'ghorbani';
// const age = 32;

// const user ={
//     firstName,
//     lastName,
//     age : age
// }

// console.log(user);

// const todo = {
//     id : 1,
//     title : 'todo 1',
//     user : {
//         name : 'ali'
//     }
// }

// const id = todo.id;

//  const {id: todoId, title, user:{ name }} = todo;

// console.log(id, title, name);
// console.log(todoId, title, name);

// const numbers =[10, 29, 31, 42, 52];
// const numbers2 =[100, 249, 314, 425, 552];

// console.log([...numbers, ...numbers2]);


// destructuring in array and rest operator

// const [first, second, ...other] = numbers;

// console.log(first, second, other);

// const posts = [
//     {
//     id : 1,
//     title : 'title post 1',
//     body : 'post 1'
// },
// {
//     id : 2,
//     title : 'title post 2',
//     body : 'post 2'
// }
// ]
// console.log(posts);

// convert object to JSON
// const str = JSON.stringify(posts);

// //convert JSON to object
// const obj = JSON.parse(str);

// console.log(obj);

// function sayHello(){
//     console.log('hello world');
// }

// sayHello();

// function add(x, y, z = 10){
//     return x + y + z;
// }

// const result = add(5, 9, 16);

// console.log(result);

// function sum(...numbers){
//     return numbers;
// }

// console.log(sum(5, 3, 6, 7, 8));

// window.alert('hallo');
// alert('hallo');

// x = 10;

// console.log(x, 'in global');

// function run(){
//     const x = 5;
//     const y = 20;
//     // console.log(x, 'in function');
//     // console.log(y + x);
// }

// console.log(y);

// run();

// if(true){
//     const z = 30;
//     // console.log(z);
// }

// console.log(z);


// function sum() {
//     let x = 100;
//     const y = 200;
//     var z = 300;
//     // console.log(x, 'in function');
//     console.log(x, y, z);
// }

// sum();

// // console.log(z);

// if(true) {
//     let x = 100;
//     const y = 200;
//     var z = 300;

//     console.log(x, y, z);
// }

// console.log(z);

// function first(){
//     const x = 100;

//     function second(){
//         const y = 200;

//         console.log(x + y);
//     }

//     second();
// }

// first();


//part 20  naming and destructuring

// const firstName = "ali";

// const lastName = "Ghorbani";
// const age = 40;


// const user = {
//     firstName,
//     lastName,
//     age: age
// }

// console.log(user);

// const todo = {
//     id: 1,
//     title: 'Todo 1',
//     user: {
//         name : 'ali'
//     }
// }

// // const id = todo.id;

// const {id: todoId, title, user: {name}} = todo;

// // console.log(id, title, name);

// console.log(todoId, title, name);

// const numbers = [13, 24, 3, 4, 5];

// const [first, second, ...other] = numbers;

// console.log(first, second, other);

// const posts =[
//     {
//     id: 1, 
//     title: 'Title post 1',
//     body: 'body post 1'
//     },
//     {
//         id: 2, 
//         title: 'Title post 2',
//         body: 'body post 2'
//     }
// ]

// console.log(posts);

// //convert object to JSON

// const str = JSON.stringify(posts);


// //convert JSON to object

// console.log(str);

// const obj = JSON.parse(str);

// console.log(obj);

// function add(x, y, z = 55){
//     return x + y + z;  
// }

// const result = add(5, 9, 32);

// console.log(result);


// function sum(...numbers){
//     return numbers;
// }

// console.log(sum(5, 4, 8, 7, 9, 3));

// window.alert('ali');

// const x = 10;

// console.log(x, 'in global');

// function run(){
//     const x = 5;
//     const y = 30;
//     console.log(y + x);
// }

// // console.log(y);

// run();

// if(true){
//     const z = 30;
//     console.log(z);

// }

// console.log(z);

// function first(){
//     const x = 100;

//     function second(){
//         const y = 200;

//         console.log(x + y);
//     }

//     console.log(y);

//     second();
// }

// first();

//function expression

// console.log(add2(3, 6));

// const add2 = function(x,y){
//     return x + y;
// }

// console.log(add2(3, 6));

// function add(x, y){
//     return x + y;
// }

// console.log(add(5, 6));

// const add = (x, y) => {
//     return x + y;
// }

// console.log(add(5, 6));


// const substract = (x, y) => x - y;

// const double = x => x * 2;

// console.log(double(2));

// const createObj = () => (
//     {
//         name : 'ali' ,
//         age : 25

//     }
// ) 


// console.log(createObj);

//immediatley invoked function expression - IIFE

// (function(){
//     console.log('IIFE');
// })();

// if(true){
//     console.log('do');
// }

// const x = 20;
// const y = 20;

// if(x == y) {
//     console.log("if");
// }else if (x > y){
//     console.log("else if");
// } else if (x < y){
//     console.log("else if");
// } else {
//     console.log('else');
// }

// if (x == y){
//     console.log('IF');

//     if(x == 20){
//         console.log( 'X is 20');
//     }
// }

// session 29   switch command

// const x = 30;

// switch(x) {
//     case 10:
//         console.log('x is 10');
//         break;
//     case 15:
//         console.log('x is 15');
//         break;
//     case 20:
//         console.log('x is 20');
//         break;
//     case 25:
//         console.log('x is 25');
//         break;
//     default:
//         console.log(`x is ${x}`);
//         break;
// }

// const firstName = 'ali';

// console.log(Boolean(firstName));

// if(firstName){
//     console.log(firstName);
// }

// const x = {};

// if(x){
//     console.log('this is truthy');
// }else{
//     console.log('this is falsy');
// }

// const user = {name: "ali"};
// // const posts = [];

// // console.log(Object.keys(user));

// if(Object.keys(user).length){
//     console.log('list user');
// } else {
//     console.log('No user');
// }

// console.log(20 > 10 && 10 > 30);

// if(5 > 10 || 10 > 30 || 30 > 20) {
//     console.log('if');
// }else {
//     console.log('else');
// }

// const a = true;

// if(!a){
//     console.log('if');
// }else{
//     console.log('else');
// }

// let a;

// a = 10 && 20 && 0;

// console.log(a);

// let c;

// c = 0 ?? 10;

// console.log(c);

// let c = null;

// c ??= 40;

// console.log(c);

// const x = 10;
// const y = 10;

// if(x === y) {   
//     console.log('If'); 
    
//     if(x == 10){
//         console.log('x is 20');
//     }
// }

// const x =20;

// switch(x) {
//     case 10:
//         console.log('x is 10');
//         break;
//     case 15:
//         console.log('x is 15');
//         break;
//     case 20:
//         console.log('x is 20');
//         break;
//     default:
//         console.log(`x is ${x}`);
//         break;
// }

// const firstName = 'alireza';

// console.log(Boolean(firstName));

// const user = {name : 'ali'};

// if(user) {
//     console.log('list user');
// }else {
//     console.log('no user');
// }

//ternary operators

// const age = 3;

// if(age >= 10){
//     console.log('you can vote');
// } else {
//     console.log('you can not vote');
// }

//or ternary

// age >= 18 ? (alert('you can vote'), console.log('you can vote')) : (alert('you can not vote'), console.log('you can not vote'));

// const catVote = age >= 18 ? true : false;
// console.log((catVote));

// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log('skipping 5 ...');
//         continue;
//     }
//     console.log(`Number ${i}`); 
// }

// let i = 11;

// while (i <= 20) {
//     console.log(`Number ${i}`);
    
//     let j = 0;
//     while(j <= 5){
//         console.log(`${i} - ${j}`);
//         j++
//     }

//     i++;
// }

// do {
//     console.log(`Number ${i}`);
// } while(i <= 10);

// for of good voor arrays

// const items = ['ali', 'reza', 'sara'];

// for(i = 0; i < items.length; i++){
//     console.log(items[i]);
// }

// for(const name of items){
//     console.log(name);
// }
// const users = [{name: 'ali'}, {name: 'reza'}, {name : 'sara'}];

// for (const user of users){
//     console.log(user.name);
// }

// const str = 'welkome';

// for(const letter of str){
//     console.log(letter);
// }

// for in good for Object

// const colorObj = {
//     color1: 'red',
//     color2: 'green',
//     color3: 'yellow',
//     color4: 'voilet',
// }

// for(const key in colorObj){
//     console.log(key, colorObj[key]);
// }

// const colorArr = ['red', 'blue', 'green'];

// for(const index in colorArr){
//     console.log(index, colorArr[index]);
// }

//foreach method



// console.log((numbers));

//callback function or anonym function
// numbers.forEach(function (number) {
//     console.log(number);
// }
// );

// numbers.forEach((number) => console.log(number));

// numbers.forEach((number, index, arraaaay) => {console.log(number, index, arraaaay);
// }
// );

// function logNumber (number){
//     console.log(number);
// }

// numbers.forEach(logNumber)

// const users = [{name: 'ali'}, {name: 'reza'}, {name: 'sara'} ];

// users.forEach((user) => console.log(user.name));

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.filter((number) => number > 3);

// console.log(result);

// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 == 1;
// });

// console.log(evenNumbers);

// const result = numbers.every((number) =>{
//     return number > 3;
// })

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 70];

// const result = numbers.map((number) => number*2);

// console.log(result);

// const result = [];

// numbers.forEach((number) => {
//     result.push(number*2);
// });

// const result = numbers.filter((number)=> number % 2).map((item) => item*2 );
// const users = [{name : 'ali'}, {name : 'reza'}, {name : 'philip'}];

// const result = users.map((user) => {
//     return {
//         name: `firstname: ${user.name}`
//     }
// })
// console.log(result);
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const sum = numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// }, 0);

// console.log(sum);

const cart =[{
    id : 1,
    name: 'product 1',
    price : 120
}, {
    id : 2,
    name: 'product 2',
    price : 150
},{
    id : 1,
    name: 'product 3',
    price : 90

}]

const total = cart.reduce((preValue, product)=> preValue + product.price, 0);

console.log(total);