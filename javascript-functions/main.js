function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}

console.log('result of convertMinutesToSeconds(5)', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey,' + name;
  return greeting;
}

console.log('result of greet("Beavis")', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('result of getArea(17, 42)', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('result of getFirstName', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log("result of getLastElement(['propane', 'and', 'propane', 'accessories'])", getLastElement(['propane', 'and', 'propane', 'accessories']));
