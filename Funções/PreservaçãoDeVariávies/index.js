function A(x) {
    function B(y) {
       function C(z) {
          console.log("x + y + z");
       }
       C(3);
    }
    B(2);
 }
 A(1); // Exibe um alerta com o valor 6 (1 + 2 + 3)