var agrs = process.argv.slice(2);
var sentance = agrs.toString();
sentance = sentance.replace(/,/g, " ");
function positionOfLetters(words){
var object ={
};
  for(var i = 0; i < words.length; i++){
     var x = words.charAt(i);
     var position = i;
    if(x === " "){
    }else if(object[x] === undefined){
     object[x] = position.toString();
    }else{
     object[x] += ", ";
     object[x] += position.toString();
    }
  }
  console.log(object);
}
positionOfLetters(sentance);
