var coinCombo = function(change) {
  var quarters = Math.floor(change / 25);
  var quartersChange = change % 25;
  var dimesChange = quartersChange % 10;
  var dimes = Math.floor(quartersChange / 10);
  var nicklesChange = dimesChange % 5;
  var nickles = Math.floor(dimesChange / 5);
  var penniesChange = nicklesChange % 1;
  var pennies = Math.floor(nicklesChange / 1);

  if (quartersChange === 0) {
    return quarters + "Q";
  } else if (dimesChange === 0) {
    return quarters + "Q " + dimes + "D";
  } else {
    return quarters + "Q " + dimes + "D " + nickles + "N";
  }
};
