/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var y = [];
 // a custom function written by you (you must define it too!)
function joinList(list){
  if(list.length == 0){
    return "";
  }
  var i = 0;
  var x = list[0];
  for(i = 1; i < list.length; i++){
    x = x + ", ";
    x = x + list[i];
  }
  return x;
}

var concepts = joinList(y);
// Write your code here...


console.log("Today I learned about " + concepts + ".");

