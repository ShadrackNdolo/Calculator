var add = function(number1, number2) {
        return number1 + number2;
      };

      var subtract = function(number1, number2) {
        return number1 - number2;
      };

      var multiply = function(number1, number2) {
        return number1 * number2;
      };

      var divide = function(number1, number2) {
        return number1 / number2;
      };

      $(document).ready(function() {
        $("form#add").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#add1").val());
          var number2 = parseInt($("#add2").val());
          var result = add(number1, number2);
          $("#output").text(result);
        });
      });

      $(document).ready(function() {
        $("form#subtract").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#subtract1").val());
          var number2 = parseInt($("#subtract2").val());
          var result = subtract(number1, number2);
          $("#output").text(result);
        });
      });

      $(document).ready(function() {
        $("form#multiply").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#multiply1").val());
          var number2 = parseInt($("#multiply2").val());
          var result = multiply(number1, number2);
          $("#output").text(result);
        });
      });

      $(document).ready(function() {
        $("form#divide").submit(function(event) {
          event.preventDefault();
          var number1 = parseInt($("#divide1").val());
          var number2 = parseInt($("#divide2").val());
          var result = divide(number1, number2);
          $("#output").text(result);
        });g
      });

      var beverage = $("#beverage").val();

      var flavor = $("input:radio[name=flavor]:checked").val();

      var dob = $("#born").val();

      var favoriteColor = $("#color").val();
      // Business (or back-end) logic:

          /*  var add = function(number1, number2) {
              return number1 + number2;
            };

            var subtract = function(number1, number2) {
              return number1 - number2;
            };

            var multiply = function(number1, number2) {
              return number1 * number2;
            };

            var divide = function(number1, number2) {
              return number1 / number2;
            };

            // Everything below this line is user interface (or front-end) logic:

            $(document).ready(function() {
              var number1 = parseInt(prompt("Enter a number:"));
              var number2 = parseInt(prompt("Enter another number:"));

              alert(add(number1, number2));
            }); */
