var args = process.argv;
function reverse(words){
for(var i = 2; i < words.length; i++){
var y = "";

  for(var x = words[i].length; x >= 0; x--){
  y = y + words[i].charAt(x);
  }
console.log(y);
}
}
reverse(process.argv);