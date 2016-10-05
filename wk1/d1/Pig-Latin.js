var args = process.argv;
console.log(args)
var x = [];
function pig(words){
  for(var i = 2; i < words.length; i++){
    x = words[i].substring(1, words[i].length) + words[i].charAt(0) + "ay";
    console.log(x);
  }
}

pig(args);