/* exported isAnagram */
function isAnagram(firstString, secondString) {

  const firstStringJoin = firstString.split(' ').join('');
  const secondStringJoin = secondString.split(' ').join('');

  for (var i = 0; i < firstStringJoin.length; i++) {
    for (var j = 0; j < secondStringJoin.length; j++) {
      const firstResult = secondStringJoin.includes(firstStringJoin[i]);
      const secondResult = firstStringJoin.includes(secondStringJoin[j]);
      if (firstResult === false || secondResult === false || firstStringJoin.length !== secondStringJoin.length) {
        return false;
      }
    }
  }
  return true;
}
