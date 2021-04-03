// The Math Object
var num1 = 10;
var num2 = 20;
var num3 = 30;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue', maximumValue);

var heroes = ['ironman', 'spiderman', 'batman', 'superman'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

// Array Methods
var library = [
  {
    title: 'Harry Potter',
    author: 'J.K.Rowling'
  },
  {
    title: 'HTML and CSS: Design and Build Websites',
    author: 'Jon Duckett'
  },
  {
    title: 'JavaScript and jQuery',
    author: 'Jon Duckett'
  }
];

var lastBook = library.pop();
console.log('lastBook', lastBook);

var firstBook = library.shift();
console.log('firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library', library);

// String Method
var fullName = 'ChiaYu Lin';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
