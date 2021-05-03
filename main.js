function main(array) {
  let retStr = "";

  var dict = {1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 0: "Zero"};
  var i;

  for (i = 0; i < array.length; i++) {
    var currentString = "";
    var currentNum = array[i];

    if (currentNum == 0) {
      currentString += "Zero";
    } else {
      while (currentNum > 0) {
        var lastDigit = currentNum % 10;
        currentString = dict[lastDigit] + currentString;

        currentNum = Math.floor(currentNum/10);
      }
    }
    if (i != array.length - 1) {
      currentString += ',';
    }
    retStr = retStr + currentString;
  }
  return retStr;
}

var num_array = process.argv.slice(2);
console.log(main(num_array));
