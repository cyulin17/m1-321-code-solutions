/* exported chunk */
function chunk(array, size) {

  var newArray = [];

  for (var i = 0; i <= array.length - 1; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
