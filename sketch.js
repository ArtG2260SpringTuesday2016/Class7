var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfNames3 = ["Amy", "Jane", "Jill"];
var listOfNames4 = ["Bill"];
var listOfNames5 = ["Bill", "bill", "Bill", undefined]

var checkNames = function(anArray){
  for(var i = 0; i < anArray.length; i++){
    if (i > 0){
      if(anArray[i] === anArray[i + 1])
      return true;
  else
    return false;
  }
  }
}

//checkNames(listOfNames0) -> false
//checkNames(listOfNames1) -> true
//checkNames(listOfNames2) -> false
//checkNames(listOfNames3) -> false
//checkNames(listOfNames4) -> false
//checkNames(listOfnames5)  -> false

console.log(checkNames(listOfNames5))
