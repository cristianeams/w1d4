function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var i = 0;
  //closure example
  return function() {
    var result = list[i];
    i++;
    return result;
  }
}
//rollLoadedDie in this case is the anonymous function
var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6