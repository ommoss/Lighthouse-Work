var agrs = process.argv.slice(2);
function countLetters(words){
var object ={
};
  for (var j = 0; j < words.length; j++){
    var letterArray = words[j].split("");
    for(var i = 0; i < letterArray.length; i++){
      var x = letterArray[i]
      if(object[x] === undefined){
      object[x] = 1;
      }else{
      object[x] += 1;
      }
    }
      object[x] = object[x].toString();
  }
  console.log(object);
}
countLetters(agrs);
