// console.log(window.document);
// console.log(document);
// console.log(document.body);
// console.log(document.body.innerHTML);

// document.body.innerHTML = "<h1>webprog</h1>";

// console.log(window.document);
// console.log(document.body.innerHTML);

// document.body.innerHTML = "<h1> website </h1>";

let output;

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

const links = Array.from(document.links);
links.forEach((item) => {
        console.log(item);
});
//length <a> in console means we have one a tag in our page

console.log(links);