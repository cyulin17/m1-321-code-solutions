/* exported union */
function union(first, second) {
  var unionArray = [];

  if (first.length >= second.length) {
    unionArray = first;
    for (var i = 0; i < second.length; i++) {
      if (!first.includes(second[i])) {
        unionArray.push(second[i]);
      }
    }
  } else {
    unionArray = second;
    for (var j = 0; j < first.length; j++) {
      if (!second.includes(first[i])) {
        unionArray.push(first[i]);
      }
    }
  }
  return unionArray;
}
