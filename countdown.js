//takes in a number x and returns a function that counts down

var countdownGenerator = function (x) {
  var list = ["Blast Off", 1, 2, 3];
  var index = x;
  var result;

  return function() {
    //closure checks for indexes in list and set conditions for results
    //console.log(index);
    if (index >= 1) {
      result = `T-minus ${list[index]} ... `;
      //console.log(result);
    } else if (index === 0) {
      result = list[index];
      //console.log(result);
    } else {
      result = `Rockets already gone, bub!`;
      //console.log(result);
    }
    //decrements index at each function call
    index --;
    console.log(result);
  }
};


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!