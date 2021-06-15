/* exported zip */
function zip(first, second) {
  var arrayLength = 0;
  var temArray = [];
  var zipArray = [];
  if (first.length <= second.length) {
    arrayLength = first.length;
  } else {
    arrayLength = second.length;
  }
  for (var i = 0; i < arrayLength; i++) {
    temArray.push(first[i]);
    temArray.push(second[i]);
    zipArray.push(temArray);
    temArray = [];
  }
  return zipArray;
}
