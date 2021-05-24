/* exported omit */
function omit(source, keys) {

  var newObj = {};

  for (var property in source) {
    if (!keys.includes(property)) {
      newObj[property] = source[property];
    }
  }
  return newObj;
}
