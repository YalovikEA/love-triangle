/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;

  for(var i = 0; i < preferences.length; i++) {
    var n1 = i+1;               // n1 Spichonee
    var k1 = preferences[n1-1]; // n1 Spichonee loves k1 Spichonee
    var n2 = k1;                // n2 Spichonee
    var k2 = preferences[n2-1]; // n2 Spichonee loves k2 Spichonee
    var n3 = k2;                // n3 Spichonee
    var k3 = preferences[n3-1]; // n3 Spichonee loves k3 Spichonee

    if((n1 != k1) && (k3 == n1)) {
      count ++;
    }
  }

  return count/3;
};

