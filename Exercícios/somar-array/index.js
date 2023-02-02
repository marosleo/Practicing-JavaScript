var b = [1,2,3,4,5,6,7,8,9,10]
function somarArray(a) {
  var soma = 0;
  for (i=0 ; i < a.length; i++) {
  soma += a[i]
  }
  return soma
}
console.log(somarArray(b))