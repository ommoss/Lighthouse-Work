var args = process.argv[2];
var arrayDice = [];

function rollDice(dice) {
  for (var i = 0; i < dice; i++ ) {
    var dicey = Math.floor((Math.random() * 6) + 1);
    var x = dicey.toString();
    arrayDice.push(x);
    console.log(dicey);
    console.log(arrayDice);
  }
}
rollDice(args);
console.log(arrayDice);