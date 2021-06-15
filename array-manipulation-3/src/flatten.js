/* exported flatten */
function flatten(array) {

  var flattenArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        flattenArray.push(array[i][j]);
      }
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}
