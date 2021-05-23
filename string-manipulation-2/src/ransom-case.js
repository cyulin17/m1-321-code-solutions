/* exported ransomCase */
function ransomCase(string) {
  var stringArray = string.toLowerCase().split('');
  var result = [];
  for (var i = 0; i < stringArray.length; i++) {
    if (i % 2 === 0) {
      result.push(stringArray[i]);
    } else {
      result.push(stringArray[i].toUpperCase());
    }
  }

  return result.join('');
}
