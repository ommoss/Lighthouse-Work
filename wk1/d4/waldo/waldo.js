function findWaldo(arr, found) {
  var counter = 0;
  arr.forEach(function(items){
    counter += 1;
    if(items === "Waldo"){
      found(counter);
      }
  })
}

function actionWhenFound(index) {
  console.log("Found him! At index:", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



