/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  for (var i = 0; i < preferences.length; i++) {
    var a = preferences[i], b = preferences[a - 1], c = preferences[b - 1];
    if (preferences[i] == 'Checked') continue;
    if (c == i + 1 && isArrayDigitsDifferent([a, b, c])) {
      count++;
      preferences[i] = preferences[a - 1] = preferences[b - 1] = 'Checked'
    }
  }
  return count;
};
function isArrayDigitsDifferent(array = []) {
  return array.every((el, i, arr) => el != arr[i - 1]);
}