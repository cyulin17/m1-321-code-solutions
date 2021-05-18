/* exported drop */
function drop(array, count) {

  var newArray = [];
  if (array === 0) {
    return newArray;
  } else {
    for (var i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
