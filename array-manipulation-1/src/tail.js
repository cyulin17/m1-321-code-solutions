/* exported tail */
function tail(array) {

  var tailArray = [];

  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
}
