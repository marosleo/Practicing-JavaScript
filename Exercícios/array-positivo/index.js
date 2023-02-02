var b = [-1,1,2,3,4,5,6,7,8,9,10];

function mediaArray(a) {
  var posi = [];
  for (i=0 ; i < a.length; i++) {
    if (a[i] > 0) {
      posi.push(a[i]);
    }
  }
  return posi;
}

console.log(mediaArray(b));
