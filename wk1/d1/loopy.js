
function loopyLighthouse(x, y, z){
  for (var i = x[0]; i <= x[1]; i++){
    if(i % y[0] === 0 && i % y[1] === 0){
      console.log(z[0] + z[1]);
    }else if (i % y[0] === 0){
      console.log(z[0]);
    }else if (i % y[1] === 0){
      console.log(z[1]);
    }else{
     console.log(i);
    }
  }
}
loopyLighthouse([15,90], [2,5],["Batty", "Beacon"])