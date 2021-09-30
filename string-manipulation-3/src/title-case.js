/* exported titleCase */
function titleCase(string) {

  const result = [];
  const lowercased = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const words = string.split(' ');

  for (var i = 0; i < words.length; i++) {
    const checkJs = words[i].toLowerCase();
    if (checkJs.includes('javascript')) {
      const language = words[i][0].toUpperCase() + words[i].substr(1, 3) + words[i][4].toUpperCase() + words[i].substr(5, words[i].length);
      result.push(language);
    } else if (lowercased.includes(words[i]) && words[i - 1].charAt(words[i - 1].length - 1) !== ':') {
      result.push(words[i]);
    } else if (words[i] === 'api') {
      const allCased = words[i].toUpperCase();
      result.push(allCased);
    } else if (words[i].includes('-')) {
      const hyphen = words[i].indexOf('-');
      const afterhyphen = words[i].indexOf('-') + 1;
      const hyphenated = words[i][0].toUpperCase() + words[i].substr(1, hyphen) + words[i][afterhyphen].toUpperCase() + words[i].substr(afterhyphen + 1, words[i].length);
      result.push(hyphenated);
    } else {
      const firstCased = words[i][0].toUpperCase() + words[i].substr(1, words[i].length);
      result.push(firstCased);
    }
  }
  return result.join(' ');
}
