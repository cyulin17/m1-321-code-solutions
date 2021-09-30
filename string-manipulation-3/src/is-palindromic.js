/* exported isPalindromic */
function isPalindromic(string) {

  const character = string.split(' ').join('');
  for (var i = 0; i < character.length; i++) {
    if (character[i] !== character[character.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
