var books = [
  {
    isbn: 'B07RFSSYBH',
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    isbn: 'B07RZ8MTLX',
    title: 'Morning Routine for Highly Successful People',
    author: 'Robert A. Williams'
  },
  {
    isbn: '1449393195',
    title: 'CSS: The Definitive Guide',
    author: 'Eric A. Meyer'
  }
];

console.log('Type of books', typeof books);

var jString = JSON.stringify(books);
console.log('Type of JSON string', typeof jString);

var student = '{ "id": "100", "name": "Michelle"}';

console.log('string in JSON', typeof student);

var obj = JSON.parse(student);
console.log('object from JSON', typeof obj);
