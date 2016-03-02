var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "Bill", "George"];
var listOfNames3 = ["Amy", "Joana", "Jill"];
var listOfNames4 = ["Bill"];
var listOfNames5 = ["Bill", "bill", "Bill", undefined];



  var isSameNameTwice  = function(anArray){
  for(var i = 0; i < anArray.length; i++){
    if(anArray.length === 1){
      return false;
    }
  if(i>0) {
    if(anArray[i] === anArray[i+1]){
      return true;
    }
    else {
      return false;}
    }
  }
  isSameNameTwice(listOfNames);
}



function setup() {
  
}

function draw() {
  
}