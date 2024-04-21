const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

console.log(sum);

const cart = [{
    id: 1,
    name: 'product 1',
    price: 120
},
{
    id: 2,
    name: 'product 2',
    price: 150
},
{
    id: 3,
    name: 'product 3',
    price: 200
}];

// const total = cart.reduce((preValue, product) => {
//     return preValue + product.price;
// }, 0);

const total = cart.reduce((preValue, product) => preValue + product.price, 0);

console.log(total);