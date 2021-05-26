/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringArray = string.toLowerCase().split(' ');

  var result = [];

  for (var i = 0; i < stringArray.length; i++) {
    result.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1, stringArray[i].length));
  }

  return result.join(' ');
}
