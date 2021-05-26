/* exported invert */
function invert(source) {

  var invertObj = {};
  var arrayProperty = [];
  var arrayValues = [];

  for (var property in source) {
    arrayProperty.push(property);
    arrayValues.push(source[property]);

    for (var i = 0; i < arrayProperty.length; i++) {
      invertObj[arrayValues[i]] = arrayProperty[i];
    }
  }
  return invertObj;
}
