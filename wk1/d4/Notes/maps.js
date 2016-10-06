/*map is a higher order function that:
  -takes in an array
  -appliesa transformation
  -returns another array with the thransformation appiled to all element
  */



var names = ["bob", "anna", "don", "David"];
//var upcaseNames = names.map(function(items){
//  return items + "!";
//})
var upcaseNames = [];
names.forEach(function(items){
  upcaseNames.push(items + "!");
})
//console.log("upcaseNames", upcaseNames);
//console.log("names ", names);
 /* find is a higher order function that is designed to
 look through every item in an array and find the item
 that matches a condition in the call back */
var list = ["Apples", "Feta Cheese", "Avacodo", "Milk", "tomatoes", "Humus" ];

/*var itemWithA;

list.forEach(function(item){
  if(typeof itemWithA === "undefined" && item.startsWith("A")){
    itemWithA = item;
  }
})*/

//console.log(itemWithA);

//find function v

//var itemWithA = list.find(function(item){
  // if you return true out of the callback the item is found!
 // return item.startsWith("A");
//})
//console.log(itemWithA);

//Making our own map function

function myMap(list, callback){
  var listCopy = [];
  list.forEach(function(item){
    var transformedItem = callback(item);
    listCopy.push(transformedItem);
  })
  return listCopy;
}

myMap(names, function(item){
  return item + "!";
});
console.log("upcaseNames ", upcaseNames);