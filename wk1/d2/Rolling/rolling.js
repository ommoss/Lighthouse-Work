var args = process.argv[2];
var x = [];


function rollDice(dice){
  for (var i = 0; i < dice; i ++){
    var j = Math.floor((Math.random()*6)+1);
    var y = j.toString();
    x.push(y);

  }
}

function joinList(list){
  if(list.length == 0){
    return "";
  }
  var c = 0;
  var v = list[0];
  for(c = 1; c < list.length; c++){
    v = v + ", ";
    v = v + list[c];
  }
  return v;
}

rollDice(args);
var h = joinList(x);
console.log("Rolled " + process.argv[2] + " dice: " + h + ".");