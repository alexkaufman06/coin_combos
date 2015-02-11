var coinCombo = function(change) {
  var quarters = Math.floor(change / 25);
  var dimes = (change % 25) / 10;

  if(change % 25 === 0) {
    return quarters + "Q";
  } else {
    return quarters + "Q " + dimes + "D";
  }
};
