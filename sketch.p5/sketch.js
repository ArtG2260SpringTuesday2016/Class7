var listofNames0=["blueberry", "apple", "peach"];
var listofNames1=["blueberry", "apple", "apple"];
var listofNames2=["peach","blueberry", "strawberry"];
var listofNames3=["kiwi", "potato", "tomato"];

var isSameNameTwice=function(anArray){
  for (var i=0; i<anArray.length; i++){
    if(anArray.length===1){
      return false;
    }
    if(i>0){
      if(anArray[i]===anArray[i+1]){
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