var listofNames0 = ["talia", "joanna", "amy"];
var listofNames1 = ["bill", "Bill", "Bill"];
var listofNames2 = ["joe", "bill", "george"];
var listofNames3 = ["amy", "jane", "jill"];

var isSameNameTwice = function (anArray){
  for (var i = 0 ; i < anArray.length; i++){
    if(anArray.length===1){
      return false;
  }
  if(i>0) {
    if(anArray[i]===anArray[i+1]){
      return true
    }
  }
  return false
}
}


//keeps saying isSameNameTwice is undefined!!