var b = [1,2,3,4,5,6,7,8,9,10]
function mediaArray(a) {
  var soma = 0;
  for (i=1 ; i < a.length; i++) {
  soma += a[i]
  media = soma / a.length
  }
  return soma
}
console.log(mediaArray(b))