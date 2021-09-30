/* exported reverseWords */
function reverseWords(string) {

  const result = [];
  const wordReverse = string.split(' ');

  for (var i = 0; i < wordReverse.length; i++) {
    const words = wordReverse[i].split('').reverse().join('');
    result.push(words);
  }

  return result.join(' ');
}
