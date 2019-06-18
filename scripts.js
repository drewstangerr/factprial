
var factorial = function(number) {
  if ((number % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
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
    var result = leapYear(year);

    $(".number").text(number);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
