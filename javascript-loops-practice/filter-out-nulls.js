/* exported filterOutNulls */
function filterOutNulls(values) {

  var nullsOut = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      nullsOut.push(values[i]);
    }
  }
  return nullsOut;
}
