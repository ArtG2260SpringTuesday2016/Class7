var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfNames3 = ["Amy", "Jane", "Jill"];

var compareWords= function(listOfNames){
  for (var i=0; i<listOfNames.length; i++){
    if (listOfNames.length===1){
      return false;
    }
    if (i>0){
      if (listOfNames[i]===listOfNames[i+1]){
        return true;
      }
    }
    return false;
    }
}