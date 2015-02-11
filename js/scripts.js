var coinCombo = function(change) {
  var answer = [0,0,0,0]
  while (change >= 25) {
    answer[0] += 1;
    change -= 25;
  } while (change >= 10) {
    answer[1] += 1;
    change -= 10;
  } while (change >= 5) {
    answer[2] += 1;
    change -= 5;
  } while (change >= 1) {
    answer[3] += 1;
    change -= 1;
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
