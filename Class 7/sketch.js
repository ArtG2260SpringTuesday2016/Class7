var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfnames3 = ["Amy", "Jane", "Jill"];
var listOfnames4 = ["Bill"];

var isSamenametwice = function(anArray){
  for(var i = 0; i < anArray.length; i ++){
    if(anArray.length === 1){
      return false;
}
}

if(i > 0){
  if(anArray[i] === anArray[i+1]){
    return true;
    }
    else{
    return false;}
  }
}
console.log(isSamenametwice(listOfNames1));

