var student = {
  firstName: 'ChiaYu',
  lastName: 'Lin',
  age: '33'
};

console.log('value of student: ', student);

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2012
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = 'false';

console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'sushi',
  type: 'orange tabby'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
