/* exported numVowels */
function numVowels(string) {
  var lowercase = string.toLowerCase();
  var totalNumVowels = 0;
  for (var i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === 'a' || lowercase[i] === 'e' || lowercase[i] === 'i' || lowercase[i] === 'o' || lowercase[i] === 'u') {
      totalNumVowels += 1;
    }
  }

  return totalNumVowels;
}
