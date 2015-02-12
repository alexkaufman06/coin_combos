var coinCombo = function(change) {
  var answer = [0,0,0,0]
  var coins = [25, 10, 5, 1]

  for (var i=0; i < coins.length; i++) {
    while (change >= coins[i]) {
    answer[i] += 1;
    change -= coins[i];
    }
  } return answer;
};

$(document).ready(function() {
  $("form#coin-combo").submit(function(event) {
    var change = parseInt($("input#change").val());
    var answer = coinCombo(change);

    $(".change-answer").text(answer);
    $("#result").show();

    event.preventDefault();
  });
});
