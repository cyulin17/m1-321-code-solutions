/* exported pick */
function pick(source, keys) {
  var newObj = {};

  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === property && source[property] !== undefined) {
        newObj[keys[i]] = source[property];
      }
    }
  }
  return newObj;
}
