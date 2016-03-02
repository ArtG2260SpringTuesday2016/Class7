var listofNames0=["Talia", "Joana", "Amy"];
var listofNames1=["bill", "Bill", "Bill"];
var listofNames2=["Joe", "Bill", "George"];
var listofNames3=["Amy", "Jane", "Jill"];
var listofNames4=["Bill"];
var listofNames5=["Bill","bill", "Bill", undefined];
var listofNames6=["Bill","bill", "Bill", undefined, undefined];

var isSameNameTwice=function(anArray){
  for (var i=0; i<anArray.length; i++){
    if(anArray.length===1){
      return false;
    }
    if(i>0){
      if(anArray[i]===anArray[i+1] && typeof anArray[i]=== 'string'){
        return true;
      }
      else{
        return false;
      }
    }
  }
}

console.log(isSameNameTwice(listofNames0))
console.log(isSameNameTwice(listofNames1))
console.log(isSameNameTwice(listofNames2))
console.log(isSameNameTwice(listofNames3))
console.log(isSameNameTwice(listofNames4))
console.log(isSameNameTwice(listofNames5))
console.log(isSameNameTwice(listofNames6))