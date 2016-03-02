var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfNames3 = ["Amy", "Jane", "Jill"];

var isSameNameTwice = function (anArray){
for (var i=0;i<anArray.length; i++){
  if (anArray.length===1){
   return false;
  }
  else if  (i>0){
   if (anArray[i]===anArray[i+1])
  return true;
  else 
  return false;
  }
   
}}

console.log(isSameNameTwice(listOfNames0));
console.log(isSameNameTwice(listOfNames1));
console.log(isSameNameTwice(listOfNames2));
console.log(isSameNameTwice(listOfNames3));
