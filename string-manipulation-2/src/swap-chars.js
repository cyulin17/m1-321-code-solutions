/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array1 = string.split('');
  var array2 = string.split('');

  array2[firstIndex] = array1[secondIndex];
  array2[secondIndex] = array1[firstIndex];

  return array2.join('');
}
