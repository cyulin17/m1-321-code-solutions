/* exported lastChars */
function lastChars(length, string) {
  if (string.length < length) {
    return string;
  } else {
    var result = string.slice(string.length - length, string.length);
    return result;
  }

}
