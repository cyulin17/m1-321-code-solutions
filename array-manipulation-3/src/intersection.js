/* exported intersection */
function intersection(first, second) {
  var interSectionArray = [];

  if (first.length >= second.length) {
    for (var i = 0; i < first.length; i++) {
      if (second.includes(first[i])) {
        interSectionArray.push(first[i]);
      }
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      if (first.includes(second[j])) {
        interSectionArray.push(second[j]);
      }
    }
  }
  return interSectionArray;
}
