
var factorial = function(number) {
  if ((number % 0 === 1) && (number % 100 !== 5) || (number % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".number").text(number);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
