// console.log(window.document);
// console.log(document);
// console.log(document.body);
// console.log(document.body.innerHTML);

// document.body.innerHTML = "<h1>webprog</h1>";

// console.log(window.document);
// console.log(document.body.innerHTML);

// document.body.innerHTML = "<h1> website </h1>";

// let output;

// output = document.all;
// output = document.all[1];
// output = document.all.length;
// output = document.documentElement;

// output = document.head;
// output = document.body.children;

// als we gebruik document.URl en we zijn op server, zullen we domein ontvangen
// output = document.URL;

// output = document.body.children[0].id;

// output = document.body.children[0].classList;

// document.body.children[0].className = 'new-class';

// output = document.body.children[0].classList;

// is different in source code and element

// output = document.links[0].href;

// document.links[0].href = "https://google.com";

// document.links.forEach((item) => {
//     console.log(item);
// });

// const links = Array.from(document.links);
// links.forEach((item) => {
//         console.log(item);
// });
// //length <a> in console means we have one a tag in our page

// console.log(links);

// single elemet select

// let output;
// output = document.getElementById('title-id');

// output = document.getElementById('title-id').id;

// output = document.getElementById('title-id').classList;

// document.getElementById('title-id').className = 'new-class';


// output = document.getElementById('title-id').getAttribute('id');
// output = document.getElementById('title-id').getAttribute('class');

// document.getElementById('title-id').setAttribute('class', 'new-class');

// document.getElementById('title-id').setAttribute('title', 'new-title');
// // document.getElementById('title-id').setAttribute('id', 'new-id-');

// console.log(output);

// const title = document.getElementById('title-id');

// title.textContent = 'hello world';

// title.innerText = 'hello world';

// title.innerHTML = '<i> web prog </i>';

// title.style.color = 'red';
// title.style.backgroundColor = 'yellow';
// title.style.padding = '15px';
// let output;

// output = document.querySelector('body h1');

// output = document.querySelector('title-id');
// output = document.querySelector('input[type=text]');

// output = document.querySelector('li:last-child');
// output = document.querySelector('li:first-child');

// output = document.querySelector('li:nth-child(3)');

// console.log(output, document.getElementById('title-id'));

// console.log(output);

// const list = document.querySelector('ul');

// console.log(list.querySelector('li'));

const listItems = document.querySelectorAll('li');

// listItems[1].style.color = 'blue';
// console.log(listItems[1].innerText);
listItems.forEach(item => {
    item.style.color = 'green'
})

console.log(listItems);