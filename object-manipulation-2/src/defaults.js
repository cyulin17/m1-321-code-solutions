/* exported defaults */
function defaults(target, source) {
  var array = [];

  for (var key in target) {
    array.push(key);
  }

  for (var property in source) {
    if (!array.includes(property)) {
      target[property] = source[property];
    }
  }

}
