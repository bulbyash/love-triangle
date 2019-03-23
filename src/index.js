/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var count = 0;
   for (var i = 0; i < preferences.length; i++) {
      var k = preferences[i] - 1;
      if (k == i) continue;
      var n = preferences[k] - 1;
      if (k == n) continue;
      var m = preferences[n] - 1;
      if (m == n) continue;
      if (m == i) {
          count++;
          preferences[i] = null;
      }
   }
  return count;
};
