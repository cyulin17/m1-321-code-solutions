/* exported equal */
function equal(first, second) {
  var flag = true;
  if (first.length !== second.length) {
    flag = false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        flag = false;
      }
    }
  }
  return flag;
}
