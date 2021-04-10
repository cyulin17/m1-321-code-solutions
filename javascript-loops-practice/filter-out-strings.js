/* exported filterOutStrings */
function filterOutStrings(values) {

  var stringOut = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      stringOut.push(values[i]);
    }
  }
  return stringOut;
}
