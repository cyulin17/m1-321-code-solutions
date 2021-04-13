/* exported initial */
function initial(array) {

  var initialArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      initialArray.push(array[i]);
    }
  }
  return initialArray;
}
