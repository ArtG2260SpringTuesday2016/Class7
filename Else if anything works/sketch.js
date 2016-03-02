var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfNames3 = ["Amy", "Jane", "Jill"];
var listOfNames4 = ["Bill", 7, 7];
var listOfNames5 = ["Bill", "bill", "Bill", undefined]
var listOfNames6 = ["Bill", "bill", "Bill", 7, 7,undefined]
var listOfNames7 =[];

var isSameNameTwice = function (anArray){
for (var i=0;i<=anArray.length; i++){
  if (anArray.length<=0){
   return false;
  }
  
  else if  (i>0){
   if (anArray[i]===anArray[i+1])
  return true;
  else if (anArray[i] !== "")
    return false;
  
  else 
  return false;
  }
   
}}

console.log(isSameNameTwice(listOfNames0));
console.log(isSameNameTwice(listOfNames1));
console.log(isSameNameTwice(listOfNames2));
console.log(isSameNameTwice(listOfNames3));
console.log(isSameNameTwice(listOfNames4));
console.log(isSameNameTwice(listOfNames5));
console.log(isSameNameTwice(listOfNames6));
console.log(isSameNameTwice(listOfNames7));



